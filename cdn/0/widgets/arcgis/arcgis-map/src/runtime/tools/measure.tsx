import { React, classNames } from 'jimu-core'
import { Icon, Nav, NavItem, NavLink, defaultMessages } from 'jimu-ui'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'

type MeasureType = (__esri.DistanceMeasurement2D | __esri.AreaMeasurement2D | __esri.DirectLineMeasurement3D | __esri.AreaMeasurement3D)

interface States {
  activeTabIndex: number
  measureInstances: MeasureType[]
}

export default class Measure extends BaseTool<BaseToolProps, States> {
  toolName = 'Measure'
  measureModules2D = [{
    name: 'Line',
    title: 'Line',
    path: 'DistanceMeasurement2D',
    src: require('../assets/icons/measure-distance.svg')
  }, {
    name: 'Polygon',
    title: 'Polygon',
    path: 'AreaMeasurement2D',
    src: require('../assets/icons/measure-area.svg')
  }]

  measureModules3D = [{
    name: 'Line',
    title: 'Line',
    path: 'DirectLineMeasurement3D',
    src: require('../assets/icons/measure-distance.svg')
  }, {
    name: 'Polygon',
    title: 'Polygon',
    path: 'AreaMeasurement3D',
    src: require('../assets/icons/measure-area.svg')
  }]

  constructor (props) {
    super(props)

    this.state = {
      activeTabIndex: 0,
      measureInstances: [null, null]
    }
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'MeasureLabel', defaultMessage: defaultMessages.MeasureLabel })
  }

  getIcon (): IconType {
    return {
      icon: require('../assets/icons/measure.svg')
    }
  }

  destroy () {
    for (let i = 0; i < this.state.measureInstances.length; i++) {
      if (this.state.measureInstances[i] && !(this.state.measureInstances[i] as any).destroyed) {
        (this.state.measureInstances[i] as any).destroy()
      }
    }
  }

  handleMeasurceInstanceCreated = (measurceInstance: MeasureType, activeTabIndex: number) => {
    const measureInstances = this.state.measureInstances
    measureInstances[activeTabIndex] = measurceInstance
    this.setState({
      measureInstances: measureInstances
    })
  }

  onTabClick = (index: number) => {
    if (this.state.activeTabIndex === index) {

    } else {
      this.setState({ activeTabIndex: index })
      for (let i = 0; i < this.state.measureInstances.length; i++) {
        if (i !== index && this.state.measureInstances[i]) {
          (this.state.measureInstances[i] as any).visible = false
        }

        if (i === index && this.state.measureInstances[i]) {
          (this.state.measureInstances[i] as any).visible = true
        }
      }
    }
  }

  onClosePanel = () => {
    for (let i = 0; i < this.state.measureInstances.length; i++) {
      if (this.state.measureInstances[i]) {
        (this.state.measureInstances[i] as any).visible = false
      }
    }
  }

  onShowPanel = () => {
    for (let i = 0; i < this.state.measureInstances.length; i++) {
      if (i !== this.state.activeTabIndex && this.state.measureInstances[i]) {
        (this.state.measureInstances[i] as any).visible = false
      }

      if (i === this.state.activeTabIndex && this.state.measureInstances[i]) {
        (this.state.measureInstances[i] as any).visible = true
      }
    }
  }

  getNavTab = () => {
    if (this.props.jimuMapView.view.type === '2d') {
      return (
        <Nav tabs>{
          this.measureModules2D.map((module, index) => {
            return (
              <NavItem key={index}>
                <NavLink active={this.state.activeTabIndex === index} onClick={() => { this.onTabClick(index) }}>
                  <Icon width={16} height={16} className='m-0' icon={module.src} />
                </NavLink>
              </NavItem>
            )
          })
        }
        </Nav>
      )
    } else if (this.props.jimuMapView.view.type === '3d') {
      return (
        <Nav tabs>{
          this.measureModules3D.map((module, index) => {
            return (
              <NavItem key={index}>
                <NavLink active={this.state.activeTabIndex === index} onClick={() => { this.onTabClick(index) }}>
                  <Icon width={16} height={16} className='m-0' icon={module.src} />
                </NavLink>
              </NavItem>
            )
          })
        }
        </Nav>
      )
    } else {
      return null
    }
  }

  getMeasureModule = () => {
    if (this.props.jimuMapView.view.type === '2d') {
      return this.measureModules2D[this.state.activeTabIndex]
    } else {
      return this.measureModules3D[this.state.activeTabIndex]
    }
  }

  getExpandPanel (): JSX.Element {
    return (
      <div
        style={{ width: this.props.isMobile ? '100%' : '250px', position: 'relative' }}
        className={classNames({ 'exbmap-ui-pc-expand-maxheight': !this.props.isMobile })}
      >
        {this.getNavTab()}
        <MeasureInner
          activeTabIndex={this.state.activeTabIndex} jimuMapView={this.props.jimuMapView}
          measureModule={this.getMeasureModule()}
          measureInstance={this.state.measureInstances[this.state.activeTabIndex]}
          onMeasurceInstanceCreated={this.handleMeasurceInstanceCreated}
        />
      </div>
    )
  }
}

interface MeasureInnerProps {
  jimuMapView: JimuMapView
  measureModule: {name: string, title: string, path: string}
  measureInstance: MeasureType
  activeTabIndex: number

  onMeasurceInstanceCreated: (instance: MeasureType, activeTabIndex: number) => void
}

interface MeasureInnerState {
  apiLoaded: boolean
}

class MeasureInner extends React.PureComponent<MeasureInnerProps, MeasureInnerState> {
  MeasureClass: typeof __esri.DistanceMeasurement2D | typeof __esri.AreaMeasurement2D | typeof __esri.DirectLineMeasurement3D | typeof __esri.AreaMeasurement3D
  MeasureInstance: MeasureType = null

  parentContainer: HTMLElement
  container: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false
    }
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules(['esri/widgets/' + this.props.measureModule.path]).then(modules => {
        [this.MeasureClass] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

  componentDidUpdate (prevProps: MeasureInnerProps) {
    if (prevProps.activeTabIndex !== this.props.activeTabIndex || prevProps.measureModule !== this.props.measureModule) {
      this.reload()
      return
    }

    if (this.state.apiLoaded && this.parentContainer && this.container) {
      if (prevProps.jimuMapView && this.props.jimuMapView && (prevProps.jimuMapView.id !== this.props.jimuMapView.id)) {
        this.props.measureInstance.view = this.props.jimuMapView.view
        this.props.measureInstance.renderNow()
        this.props.measureInstance.viewModel.start()
      } else {
        if (!this.props.measureInstance) {
          const tempInstance = new this.MeasureClass({
            container: this.container,
            view: this.props.jimuMapView.view
          })
          tempInstance.viewModel.start()

          this.props.onMeasurceInstanceCreated(tempInstance, this.props.activeTabIndex)
        } else {
          if (this.props.measureInstance.view === this.props.jimuMapView.view) {
            if (this.parentContainer.getElementsByClassName('measure-container') && this.parentContainer.getElementsByClassName('measure-container')[0]) {
              this.parentContainer.getElementsByClassName('measure-container')[0].remove()
            }

            this.parentContainer.appendChild(this.props.measureInstance.container as HTMLElement)
            if ((this.props.measureInstance.viewModel as any).state !== 'measured' && (this.props.measureInstance.viewModel as any).state !== 'measuring') {
              this.props.measureInstance.viewModel.start()
            }
          } else {
            if (this.props.measureInstance?.view?.type !== this.props.jimuMapView.view.type) {
              this.props.measureInstance.destroy()
              if (this.parentContainer.getElementsByClassName('measure-container') && this.parentContainer.getElementsByClassName('measure-container')[0]) {
                this.parentContainer.getElementsByClassName('measure-container')[0].remove()
              }

              this.container.innerHTML = '';
              (this.container as any).style.opacity = 1;
              (this.container as any).style.height = ''

              this.parentContainer.appendChild(this.container)

              const tempInstance = new this.MeasureClass({
                container: this.container,
                view: this.props.jimuMapView.view
              })
              tempInstance.viewModel.start()

              this.props.onMeasurceInstanceCreated(tempInstance, this.props.activeTabIndex)
            } else {
              this.props.measureInstance.view = this.props.jimuMapView.view
              this.props.measureInstance.renderNow()
              this.props.measureInstance.viewModel.start()
            }
          }
        }
      }
      this.checkContainer()
    }
  }

  checkContainer = () => {
    if ((this.container as any).style.opacity === '0' || (this.container as any).style.opacity === 0) {
      (this.container as any).style.opacity = 1;
      (this.container as any).style.height = ''
    }
  }

  reload () {
    if (this.container.childNodes && this.container.childNodes[0]) {
      (this.container as any).style.opacity = 0;
      (this.container as any).style.height = '35px'
    }

    this.setState({
      apiLoaded: false
    }, () => {
      loadArcGISJSAPIModules(['esri/widgets/' + this.props.measureModule.path]).then(modules => {
        [this.MeasureClass] = modules
        this.setState({
          apiLoaded: true
        })
      })
    })
  }

  render () {
    return (
      <div className='w-100' style={{ width: '250px', position: 'relative', minHeight: '32px' }} ref={ref => { this.parentContainer = ref }}>
        <div className='measure-container' ref={ref => { this.container = ref }} />
        {!this.state.apiLoaded && <div className='exbmap-basetool-loader' />}
      </div>
    )
  }
}
