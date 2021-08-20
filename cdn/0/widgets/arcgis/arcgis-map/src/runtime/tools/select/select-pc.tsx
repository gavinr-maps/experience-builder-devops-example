/** @jsx jsx */
import { css, jsx, classNames, React, polished, IMThemeVariables, FeatureLayerQueryParams, IntlShape } from 'jimu-core'
import { Icon, Popper, defaultMessages, Radio } from 'jimu-ui'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'

interface Props {
  theme?: IMThemeVariables
  intl?: IntlShape

  jimuMapView?: JimuMapView
}

interface States {
  sketchInitialed: boolean
  isShowSelectTypePopup: boolean
  isShowResultPopup: boolean
  isQuerying: boolean

  currentSelectType: 'Point' | 'Rectangle' | 'Lasso' | 'Circle' | 'Line'
  isActive: boolean
  spatialRelationship: 'intersects' | 'contains'
  resultGraphics: __esri.Graphic[]
}

const defaultPointSymbol = {
  style: 'esriSMSCircle',
  color: [0, 0, 128, 128],
  name: 'Circle',
  outline: {
    color: [0, 0, 128, 255],
    width: 1
  },
  type: 'esriSMS',
  size: 18
}

const defaultPolylineSymbol = {
  tags: ['solid'],
  title: 'Blue Thin',
  style: 'esriSLSSolid',
  color: [79, 129, 189, 255],
  width: 3,
  name: 'Blue 1',
  type: 'esriSLS'
}

const defaultPolygonSymbol = {
  style: 'esriSFSSolid',
  color: [79, 129, 189, 77],
  type: 'esriSFS',
  outline: {
    style: 'esriSLSSolid',
    color: [54, 93, 141, 255],
    width: 1.5,
    type: 'esriSLS'
  }
}

const IconArrowDown = require('jimu-ui/lib/icons/arrow-down-header.svg')

const SelectRectangleIcon = require('../../assets/icons/select-tool/select-rectangle.svg')
const SelectLassoIcon = require('../../assets/icons/select-tool/select-lasso.svg')
const SelectCircleIcon = require('../../assets/icons/select-tool/select-circle.svg')
const SelectLineIcon = require('../../assets/icons/select-tool/select-line.svg')
const SelectPointIcon = require('../../assets/icons/select-tool/select-point.svg')
const SelectClearIcon = require('../../assets/icons/select-tool/select-clear.svg')

export class SelectPCTool extends React.PureComponent<Props, States> {
  btnContainer: HTMLElement
  selectResultContainer: HTMLElement
  SketchViewModel: typeof __esri.SketchViewModel
  GraphicsLayer: typeof __esri.GraphicsLayer
  Query: typeof __esri.Query
  sketchViewModel: __esri.SketchViewModel
  currentActiveTool: string = 'rectangle'
  query: FeatureLayerQueryParams
  jsonUtils: typeof __esri.jsonUtils = null
  geometryEngine: typeof __esri.geometryEngine
  resultGraphics: __esri.Graphic[] = []

  constructor (props: Props) {
    super(props)
    this.state = {
      isShowResultPopup: false,
      isShowSelectTypePopup: false,
      currentSelectType: 'Rectangle',
      sketchInitialed: false,
      isActive: false,
      spatialRelationship: 'intersects',
      resultGraphics: [],
      isQuerying: false
    }
  }

  getCSSStyle () {
    const theme = this.props.theme
    const containerbg = theme.arcgis.components.button.variants.default.default.bg
    const containerBorder = theme.arcgis.components.button.variants.default.default.border
    return css`
      .select-tool-container {
        ${containerbg && `background-color: ${containerbg};`}
        ${containerBorder && `border: ${containerBorder.color} ${containerBorder.width} solid;`}
      }

      .select-tool-btn {
        width: 32px;
        height: 32px;
      }

      .content-bg {
        background-color: ${theme.colors.palette.light[100]};
      }

      .content-title {
        font-size: ${polished.rem(13)};
        font-weight: bold;
      }

      .select-tool-type-mobile-container-shell {
        overflow-x: auto;
      }

      .select-tool-type-mobile-container-shell::-webkit-scrollbar {
        height: 0 !important;
        display: none;
      }

      .select-tool-type-mobile-container {
        width: 400px;
      }

      .select-tool-type {
        width: 64px;
        height: 64px;
        border: 1px solid ${theme.colors.palette.light[400]};
        cursor: pointer;
      }

      .select-tool-type-choosed {
        border: 1px solid ${theme.colors.primary};
        position: relative;
      }

      .select-tool-type-choosed:after {
        width: 0;
        height: 0;
        border-top: 8px solid ${theme.colors.primary};
        border-left: 8px solid transparent;
        position: absolute;
        top: 0;
        right: 0;
        content: "";
      }

      .select-tool-type-text {
        font-size: ${polished.rem(12)};
      }

      .select-tool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .select-tool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .select-tool-loader:after {
        background-color: ${theme.colors.primary};
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

    `
  }

  componentDidMount () {
    if (!this.state.sketchInitialed) {
      loadArcGISJSAPIModules([
        'esri/widgets/Sketch/SketchViewModel',
        'esri/layers/GraphicsLayer',
        'esri/tasks/support/Query',
        'esri/symbols/support/jsonUtils',
        'esri/geometry/geometryEngine'
      ]).then(modules => {
        [this.SketchViewModel, this.GraphicsLayer, this.Query, this.jsonUtils, this.geometryEngine] = modules
        this.props.jimuMapView.view.when(() => {
          this.initialSketchTool()

          this.setState({
            sketchInitialed: true
          })
        })
      })
    }
  }

  componentDidUpdate (prevProps: Props, prevState: States) {
    if (prevState.sketchInitialed !== this.state.sketchInitialed && this.state.sketchInitialed) {
      this.initialSketchTool()

      if (this.state.isActive && this.currentActiveTool) {
        this.sketchViewModel.create(this.currentActiveTool as any)
      }
      return
    }

    if (prevProps.jimuMapView && this.props.jimuMapView && (prevProps.jimuMapView.id !== this.props.jimuMapView.id) && this.state.sketchInitialed) {
      this.initialSketchTool()

      this.sketchViewModel.view = this.props.jimuMapView.view
      if (this.state.isActive && this.currentActiveTool) {
        this.sketchViewModel.create(this.currentActiveTool as any)
      }
      return
    }

    if (prevState.isActive !== this.state.isActive) {
      this.initialSketchTool()
      if (this.state.isActive) {
        this.sketchViewModel.create(this.currentActiveTool as any)
      } else {
        this.sketchViewModel.destroy()
        this.sketchViewModel = null
      }
    }
  }

  componentWillUnmount () {
    if (this.sketchViewModel) {
      this.sketchViewModel.destroy()
    }
  }

  toggleIsSelectActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  getSelectToolIcon = () => {
    if (this.state.currentSelectType === 'Point') {
      return SelectPointIcon
    } else if (this.state.currentSelectType === 'Rectangle') {
      return SelectRectangleIcon
    } else if (this.state.currentSelectType === 'Lasso') {
      return SelectLassoIcon
    } else if (this.state.currentSelectType === 'Circle') {
      return SelectCircleIcon
    } else if (this.state.currentSelectType === 'Line') {
      return SelectLineIcon
    } else {
      return SelectRectangleIcon
    }
  }

  toggleSelectTypePopup = () => {
    this.setState({
      isShowSelectTypePopup: !this.state.isShowSelectTypePopup
    })
  }

  toggleResultPopup = () => {
    this.setState({
      isShowResultPopup: !this.state.isShowResultPopup
    })
  }

  setCurrentSelectType = (currentSelectType: any) => {
    this.initialSketchTool()

    if (currentSelectType === 'Point') {
      this.sketchViewModel.create('point')
      this.currentActiveTool = 'point'
    }

    if (currentSelectType === 'Rectangle') {
      this.sketchViewModel.create('rectangle')
      this.currentActiveTool = 'rectangle'
    }

    if (currentSelectType === 'Lasso') {
      this.sketchViewModel.create('polygon')
      this.currentActiveTool = 'polygon'
    }

    if (currentSelectType === 'Circle') {
      this.sketchViewModel.create('circle')
      this.currentActiveTool = 'circle'
    }

    if (currentSelectType === 'Line') {
      this.sketchViewModel.create('polyline')
      this.currentActiveTool = 'polyline'
    }

    this.setState({
      currentSelectType: currentSelectType,
      isShowSelectTypePopup: false,
      isActive: true
    })
  }

  initialSketchTool () {
    if (!this.SketchViewModel) {
      return
    }

    if (!this.sketchViewModel) {
      this.sketchViewModel = new this.SketchViewModel({
        view: this.props.jimuMapView.view,
        layer: new this.GraphicsLayer(),
        pointSymbol: this.jsonUtils.fromJSON(defaultPointSymbol) as any,
        polylineSymbol: this.jsonUtils.fromJSON(defaultPolylineSymbol) as any,
        polygonSymbol: this.jsonUtils.fromJSON(defaultPolygonSymbol) as any
      })

      this.sketchViewModel.on('create', (event) => {
        if (event.state === 'complete') {
          this.sketchViewModel.create(this.currentActiveTool as any)
          this.setState({
            isQuerying: true
          })

          const jimuMapView = this.props.jimuMapView
          jimuMapView.selectFeaturesByGraphic(event.graphic, this.state.spatialRelationship).then(() => {
            this.setState({
              isQuerying: false
            })
          })
        }
      })
    }
  }

  clearSelect = () => {
    this.props.jimuMapView.clearSelectedFeatures()
  }

  render () {
    return (
      <div css={this.getCSSStyle()}><div className='d-flex align-items-center justify-content-center select-tool-container' ref={ref => { this.btnContainer = ref }}>
        <div className='d-flex'>
          <div className='d-flex'>
            <button
              onClick={this.toggleIsSelectActive}
              className={classNames('esri-widget--button  border-0 select-tool-btn d-flex align-items-center justify-content-center',
                { active: this.state.isActive })}
              disabled={!this.state.sketchInitialed}
            >
              <Icon width={16} height={16} icon={this.getSelectToolIcon()} />
            </button>
            <button
              onClick={this.toggleSelectTypePopup} style={{ width: 18 }}
              className={classNames('esri-widget--button border-0 pl-1 pr-1 select-tool-btn d-flex align-items-center justify-content-center',
                { active: this.state.isShowSelectTypePopup })}
              disabled={!this.state.sketchInitialed}
            >
              <Icon width={8} height={8} icon={IconArrowDown} />
            </button>
          </div>
          <button
            className='select-tool-btn d-flex align-items-center justify-content-center select-tool-btn-hover esri-widget--button border-0'
            ref={ref => { this.selectResultContainer = ref }} onClick={this.clearSelect}
            disabled={!this.state.sketchInitialed}
          >
            <Icon width={16} height={16} icon={SelectClearIcon} />
          </button>
          <Popper css={this.getCSSStyle()} reference={this.btnContainer} open={this.state.isShowSelectTypePopup} placement='bottom-start' toggle={this.toggleSelectTypePopup}>
            <div className='p-3 content-bg' style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='content-title'>
                {this.props.intl.formatMessage({ id: 'SelectionTool', defaultMessage: defaultMessages.SelectionTool })}
              </div>
              <div className='mt-2 mb-2'>
                <div className='d-flex mb-2'>
                  <div
                    className={classNames('select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover', {
                      'select-tool-type-choosed': this.state.currentSelectType === 'Rectangle'
                    })} onClick={() => { this.setCurrentSelectType('Rectangle') }}
                  >
                    <Icon width={16} height={16} icon={SelectRectangleIcon} />
                    <div
                      className='select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center'
                      title={this.props.intl.formatMessage({ id: 'SelectionToolRectangle', defaultMessage: defaultMessages.SelectionToolRectangle })}
                    >
                      {this.props.intl.formatMessage({ id: 'SelectionToolRectangle', defaultMessage: defaultMessages.SelectionToolRectangle })}
                    </div>
                  </div>
                  <div
                    className={classNames('select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover', {
                      'select-tool-type-choosed': this.state.currentSelectType === 'Lasso'
                    })} onClick={() => { this.setCurrentSelectType('Lasso') }}
                  >
                    <Icon width={16} height={16} icon={SelectLassoIcon} />
                    <div
                      className='select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center'
                      title={this.props.intl.formatMessage({ id: 'SelectionToolLasso', defaultMessage: defaultMessages.SelectionToolLasso })}
                    >
                      {this.props.intl.formatMessage({ id: 'SelectionToolLasso', defaultMessage: defaultMessages.SelectionToolLasso })}
                    </div>
                  </div>
                  <div
                    className={classNames('select-tool-type d-flex flex-column align-items-center justify-content-center select-tool-btn-hover', {
                      'select-tool-type-choosed': this.state.currentSelectType === 'Circle'
                    })} onClick={() => { this.setCurrentSelectType('Circle') }}
                  >
                    <Icon width={16} height={16} icon={SelectCircleIcon} />
                    <div
                      className='select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center'
                      title={this.props.intl.formatMessage({ id: 'SelectionToolCircle', defaultMessage: defaultMessages.SelectionToolCircle })}
                    >
                      {this.props.intl.formatMessage({ id: 'SelectionToolCircle', defaultMessage: defaultMessages.SelectionToolCircle })}
                    </div>
                  </div>
                </div>
                <div className='d-flex'>
                  <div
                    className={classNames('select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover', {
                      'select-tool-type-choosed': this.state.currentSelectType === 'Line'
                    })} onClick={() => { this.setCurrentSelectType('Line') }}
                  >
                    <Icon width={16} height={16} icon={SelectLineIcon} />
                    <div
                      className='select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center'
                      title={this.props.intl.formatMessage({ id: 'SelectionToolLine', defaultMessage: defaultMessages.SelectionToolLine })}
                    >
                      {this.props.intl.formatMessage({ id: 'SelectionToolLine', defaultMessage: defaultMessages.SelectionToolLine })}
                    </div>
                  </div>
                  <div
                    className={classNames('select-tool-type d-flex flex-column align-items-center justify-content-center select-tool-btn-hover', {
                      'select-tool-type-choosed': this.state.currentSelectType === 'Point'
                    })} onClick={() => { this.setCurrentSelectType('Point') }}
                  >
                    <Icon width={16} height={16} icon={SelectPointIcon} />
                    <div
                      className='select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center'
                      title={this.props.intl.formatMessage({ id: 'SelectionToolPoint', defaultMessage: defaultMessages.SelectionToolPoint })}
                    >
                      {this.props.intl.formatMessage({ id: 'SelectionToolPoint', defaultMessage: defaultMessages.SelectionToolPoint })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='content-title'>
                {this.props.intl.formatMessage({ id: 'SelectionMode', defaultMessage: defaultMessages.SelectionMode })}
              </div>
              <div>
                <div className='d-flex align-items-center mt-2'>
                  <Radio
                    style={{ cursor: 'pointer' }} checked={this.state.spatialRelationship === 'intersects'}
                    onChange={() => { this.setState({ spatialRelationship: 'intersects' }) }}
                  />
                  <label className='m-0 ml-2 content-title' style={{ cursor: 'pointer' }} onClick={() => { this.setState({ spatialRelationship: 'intersects' }) }}>
                    {this.props.intl.formatMessage({ id: 'SelectionWithin', defaultMessage: defaultMessages.SelectionWithin })}
                  </label>
                </div>
                <div className='d-flex align-items-center mt-2'>
                  <Radio
                    style={{ cursor: 'pointer' }} checked={this.state.spatialRelationship === 'contains'}
                    onChange={() => { this.setState({ spatialRelationship: 'contains' }) }}
                  />
                  <label className='m-0 ml-2 content-title' style={{ cursor: 'pointer' }} onClick={() => { this.setState({ spatialRelationship: 'contains' }) }}>
                    {this.props.intl.formatMessage({ id: 'SelectionContain', defaultMessage: defaultMessages.SelectionContain })}
                  </label>
                </div>
              </div>
            </div>
          </Popper>
        </div>
      </div>
      {(this.state.isQuerying || !this.state.sketchInitialed) && <div className='select-tool-loader' />}
      </div>
    )
  }
}
