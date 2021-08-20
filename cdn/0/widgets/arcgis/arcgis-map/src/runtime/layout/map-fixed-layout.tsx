/** @jsx jsx */
import { React, ReactDOM, jsx, AppMode, SizeModeLayoutJson, Immutable, LayoutItemConstructorProps, LayoutItemType, WidgetType, classNames } from 'jimu-core'
import { JimuMapView } from 'jimu-arcgis'
import { LayoutEntry } from 'jimu-layouts/layout-runtime'
import { checkIsLive } from '../utils'

interface LayoutProps {
  jimuMapView?: JimuMapView

  appMode: AppMode
  layouts: { [name: string]: SizeModeLayoutJson }
  LayoutEntry?: any
  widgetManifestName: string
}

interface LayoutState {
}

export default class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  fixedLayoutRef: HTMLElement
  // this item is used to solve the flash issue when swith mulitimap
  cloneLayoutRef: HTMLElement | Node = null

  constructor (props) {
    super(props)

    this.state = {}

    this.fixedLayoutRef = document.createElement('div')
    this.fixedLayoutRef.className = 'w-100 h-100'
    this.fixedLayoutRef.style.position = 'absolute'
    this.fixedLayoutRef.style.zIndex = '0'
  }

  componentDidMount () {
    if ((this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container)) {
      this.insertFixedDom(this.props.jimuMapView.view.ui.container, this.fixedLayoutRef)
    }
  }

  componentDidUpdate (prevProps: LayoutProps, prevState: LayoutState) {
    if (!prevProps.jimuMapView || !this.props.jimuMapView) {
      return
    }

    if (prevProps.jimuMapView && prevProps.jimuMapView.view && prevProps.jimuMapView.view.ui) {
      const cloneDoms = prevProps.jimuMapView.view.ui.container.getElementsByClassName('layout-clone')
      if (cloneDoms && cloneDoms.length > 0) {
        for (let i = 0; i < cloneDoms.length; i++) {
          cloneDoms[i].remove()
        }
      }
    }

    if (prevProps.jimuMapView.id !== this.props.jimuMapView.id) {
      if (prevProps.jimuMapView && prevProps.jimuMapView.view && prevProps.jimuMapView.view.ui) {
        this.cloneLayoutRef = this.fixedLayoutRef.cloneNode(true);
        (this.cloneLayoutRef as HTMLElement).classList.add('layout-clone')
        this.insertFixedDom(prevProps.jimuMapView.view.ui.container, this.cloneLayoutRef)

        setTimeout(() => {
          if (this.cloneLayoutRef && this.cloneLayoutRef.parentNode) {
            this.cloneLayoutRef.parentNode.removeChild(this.cloneLayoutRef)
          }
          this.cloneLayoutRef = null
        }, 500)

        if (prevProps.jimuMapView.view.ui.container.contains(this.fixedLayoutRef)) {
          prevProps.jimuMapView.view.ui.container.removeChild(this.fixedLayoutRef)
        }
      }
      this.props.jimuMapView && this.props.jimuMapView.view && this.insertFixedDom(this.props.jimuMapView.view.ui.container, this.fixedLayoutRef)
    }
  }

  insertFixedDom = (container: HTMLElement, insertedDom) => {
    if (!container || !insertedDom) {
      return
    }

    const toolLayoutDoms = container.getElementsByClassName('exbmap-ui-layout')
    if (toolLayoutDoms && toolLayoutDoms[0]) {
      container.insertBefore(insertedDom, toolLayoutDoms[0])
    } else {
      container.appendChild(insertedDom)
    }
  }

  isItemAccepted = (item: LayoutItemConstructorProps, isReplacePlaceholder: boolean): boolean => {
    const itemType = item?.itemType
    const type = item?.manifest?.widgetType

    return itemType !== LayoutItemType.Section && type !== WidgetType.Layout && item?.manifest?.name !== this.props.widgetManifestName
  }

  getMapFixedLayout = () => {
    if (window.jimuConfig.isInBuilder) {
      const LayoutEntry = this.props.LayoutEntry
      const layout = this.props.layouts && this.props.layouts.MapFixedLayout
      return (
        <LayoutEntry
          layouts={layout || null} isInWidget className={classNames('w-100 h-100',
            { 'widget-map-usemask': !checkIsLive(this.props.appMode), 'map-is-live-mode': checkIsLive(this.props.appMode) })}
          isItemAccepted={this.isItemAccepted}
        />
      )
    } else {
      const layout = this.props.layouts && this.props.layouts.MapFixedLayout
      return <LayoutEntry layouts={layout ? Immutable(layout) : null} className='w-100 h-100 map-is-live-mode' />
    }
  }

  render () {
    if (this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container) {
      return (
        <div>
          {ReactDOM.createPortal(this.getMapFixedLayout(), this.fixedLayoutRef)}
        </div>
      )
    } else {
      return this.getMapFixedLayout()
    }
  }
}
