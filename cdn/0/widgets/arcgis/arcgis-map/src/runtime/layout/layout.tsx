/** @jsx jsx */
import { React, ReactDOM, css, jsx, AppMode, SizeModeLayoutJson, IntlShape, IMThemeVariables } from 'jimu-core'
import { ToolConfig } from '../../config'
import { LayoutJson, GroupJson, HiddenElementNames } from './config'
import Group from './base/group'
import type { ActiveToolInfo } from './base/base-tool'
import { JimuMapView } from 'jimu-arcgis'

interface LayoutProps {
  mapWidgetId: string
  layoutConfig: LayoutJson
  toolConfig: ToolConfig

  jimuMapView: JimuMapView
  isMobile: boolean
  theme: IMThemeVariables

  appMode: AppMode
  layouts: { [name: string]: SizeModeLayoutJson }
  LayoutEntry?: any
  widgetManifestName: string

  widgetHeight?: number
  intl?: IntlShape

  activeToolInfo: ActiveToolInfo
  onActiveToolInfoChange: (activeToolInfo: ActiveToolInfo) => void
}

interface LayoutState {

  toolsContentInMobileExpandPanel?: JSX.Element
  hiddenElementNames: HiddenElementNames
}

export { ActiveToolInfo }

export default class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  contentRef: HTMLElement
  // this item is used to solve the flash issue when swith mulitimap
  cloneLayoutRef: HTMLElement | Node = null

  constructor (props) {
    super(props)

    this.state = {
      toolsContentInMobileExpandPanel: null,
      hiddenElementNames: []
    }

    this.contentRef = document.createElement('div')
    this.contentRef.className = 'exbmap-ui esri-ui-inner-container exbmap-ui-layout'
  }

  getStyle () {
    return css`
      z-index: 0;

      .expand-panel-transition {
        transition: opacity 0.3s, right 0.3s;
      }

      .scale-attribution-xy-group {
        > div:first-of-type:nth-last-of-type(1) {
          width: 100%;
          max-width: 100% !important;
        }
      }

      .exbmap-ui-hidden-element {
        display: none !important;
      }
/* 
      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
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

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      } */

      .exbmap-ui-pc-expand-maxheight {
        max-height: ${this.getMaxHeightForPcExpand(this.props.widgetHeight)}px;
        overflow: auto
      }
      `
  }

  getMaxHeightForPcExpand = (widgetHeight: number): number => {
    if (!widgetHeight) {
      return null
    } else {
      if (widgetHeight < 65) {
        return null
      } else {
        const resultHeight = widgetHeight - 65
        if (resultHeight < 300) {
          return resultHeight
        } else {
          return 300
        }
      }
    }
  }

  handSetHiddenElementNames = (elementNames: HiddenElementNames) => {
    this.setState({
      hiddenElementNames: elementNames
    })
  }

  getLayoutContent = (layoutJson: LayoutJson) => {
    if (!layoutJson || !this.props.toolConfig) {
      return null
    } else {
      return (
        <div css={this.getStyle()}>
          {Object.keys(layoutJson.layout).map((key, index) => {
            if (!layoutJson.elements[key] || layoutJson.elements[key].type !== 'GROUP' || !layoutJson.layout[key].position) {
              return null
            }

            return (
              <Group
                mapWidgetId={this.props.mapWidgetId} className={(layoutJson.elements[key] as GroupJson).className} style={(layoutJson.elements[key] as GroupJson).style}
                isResponsive={(layoutJson.elements[key] as GroupJson).isResponsive} isMobile={this.props.isMobile} isMainGroup
                key={index} layoutConfig={layoutJson} toolConfig={this.props.toolConfig} activeToolInfo={this.props.activeToolInfo}
                jimuMapView={this.props.jimuMapView} groupName={key} onActiveToolInfoChange={this.props.onActiveToolInfoChange}
                hiddenElementNames={layoutJson.mobileResponsiveStrategy && this.state.hiddenElementNames} intl={this.props.intl}
                onSetHiddenElementNames={this.handSetHiddenElementNames} theme={this.props.theme}
              />
            )
          })}
        </div>
      )
    }
  }

  componentDidMount () {
    if ((this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container)) {
      this.props.jimuMapView.view.ui.container.appendChild(this.contentRef)
    }
  }

  componentDidUpdate (prevProps: LayoutProps) {
    if (prevProps.appMode !== this.props.appMode && this.props.appMode === AppMode.Design) {
      this.props.onActiveToolInfoChange(null)
    }

    if (prevProps.jimuMapView && prevProps.jimuMapView.view && prevProps.jimuMapView.view.ui) {
      const cloneDoms = prevProps.jimuMapView.view.ui.container.getElementsByClassName('tool-layout-clone')
      if (cloneDoms && cloneDoms.length > 0) {
        for (let i = 0; i < cloneDoms.length; i++) {
          cloneDoms[i].remove()
        }
      }
    }

    if (prevProps.jimuMapView?.id !== this.props.jimuMapView?.id) {
      this.cloneLayoutRef = this.contentRef.cloneNode(true);
      (this.cloneLayoutRef as HTMLElement).classList.add('tool-layout-clone')

      setTimeout(() => {
        if (this.cloneLayoutRef && this.cloneLayoutRef.parentNode) {
          this.cloneLayoutRef.parentNode.removeChild(this.cloneLayoutRef)
        }
        this.cloneLayoutRef = null
      }, 500)

      if (prevProps.jimuMapView.view && prevProps.jimuMapView.view.ui && prevProps.jimuMapView.view.ui.container) {
        prevProps.jimuMapView.view.ui.container.appendChild(this.cloneLayoutRef)
        prevProps.jimuMapView.view.ui.container.removeChild(this.contentRef)
      }

      if (this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container) {
        this.props.jimuMapView.view.ui.container.appendChild(this.contentRef)
      }
    }
  }

  render () {
    if (this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container) {
      return (
        <div>
          {ReactDOM.createPortal(this.getLayoutContent(this.props.layoutConfig), this.contentRef)}
        </div>
      )
    } else {
      return null
    }
  }
}
