/** @jsx jsx */
import { css, jsx, React } from 'jimu-core'
import { Button, Icon, defaultMessages } from 'jimu-ui'
import { BaseTool, BaseToolProps, IconType } from '../../layout/base/base-tool'
import { SelectedNumber } from './selected-number'

const SelectZoomtoIcon = require('../../assets/icons/select-tool/select-zoomto.svg')
const SelectClearIcon = require('../../assets/icons/select-tool/select-clear.svg')

interface States{
  selectedGraphics: __esri.Graphic[]
}

export default class SelectState extends BaseTool<BaseToolProps, States> {
  toolName = 'SelectState'

  constructor (props) {
    super(props)

    this.state = {
      selectedGraphics: []
    }
  }

  getStyle () {
    return css`
      background-color: ${this.props.theme.arcgis.components.button.variants.default.default.bg};

      .divide-line {
        border-right: 1px solid ${this.props.theme.colors.palette.dark[400]};
        height: 100%;
      }
    `
  }

  getTitle () {
    return ''
  }

  getIcon (): IconType {
    return null
  }

  handleSelectedGraphicsChanged = (selectedGraphics: __esri.Graphic[]) => {
    this.setState({
      selectedGraphics: selectedGraphics
    })
  }

  zoomToSelectedFeatures = () => {
    if (this.props.jimuMapView.view) {
      this.props.jimuMapView.view.goTo(this.state.selectedGraphics)
    }
  }

  clearSelectedFeatures = () => {
    this.props.jimuMapView.clearSelectedFeatures()
  }

  getExpandPanel (): JSX.Element {
    if (this.props.isMobile) {
      return (
        <div css={this.getStyle()} className='w-100 d-flex justify-content-between align-items-center' style={{ height: '40px' }}>
          <div className='ml-2'>
            {`${this.props.intl.formatMessage({ id: 'SelectionSelectedFeatures', defaultMessage: defaultMessages.SelectionSelectedFeatures })}:${this.state.selectedGraphics.length}`}
          </div>
          <div className='d-flex'>
            <div
              className='h-100 border border-top-0 border-bottom-0 d-flex justify-content-center align-items-center' style={{ width: '40px', cursor: 'pointer' }}
              onClick={this.zoomToSelectedFeatures}
            >
              <Icon width={18} height={18} icon={SelectZoomtoIcon} />
            </div>
            <div
              className='h-100 d-flex justify-content-center align-items-center' style={{ width: '40px', cursor: 'pointer' }}
              onClick={this.clearSelectedFeatures}
            >
              <Icon width={18} height={18} icon={SelectClearIcon} />
            </div>
          </div>
          <SelectedNumber jimuMapView={this.props.jimuMapView} onSelectedGraphicsChanged={this.handleSelectedGraphicsChanged} />
        </div>
      )
    } else {
      return (
        <React.Fragment>
          <Button onClick={this.zoomToSelectedFeatures}>
            <Icon width={16} height={16} icon={SelectZoomtoIcon} className='mr-2' />
            {`${this.props.intl.formatMessage({ id: 'SelectionSelectedFeatures', defaultMessage: defaultMessages.SelectionSelectedFeatures })}:${this.state.selectedGraphics.length}`}
          </Button>
          <SelectedNumber jimuMapView={this.props.jimuMapView} onSelectedGraphicsChanged={this.handleSelectedGraphicsChanged} />
        </React.Fragment>
      )
    }
  }
}
