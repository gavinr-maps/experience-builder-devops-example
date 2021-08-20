/** @jsx jsx */
import { React, css, jsx, polished, classNames, ReactDOM, ErrorBoundary, ReactResizeDetector, IntlShape } from 'jimu-core'
import { Icon, Popper, MobilePanelManager, Modifiers } from 'jimu-ui'
import { UIComponent, UIComponentProps } from './ui-component'
import { ToolJson } from '../config'
import ScrollContainer from './scroll-container'
import PanelShell from './panel-shell'
import { MultiSourceMapContext } from '../../components/multisourcemap-context'

export interface ActiveToolInfo {
  activeToolName: string
  activeToolTitle: string
}

export interface BaseToolProps extends UIComponentProps {
  toolJson: ToolJson
  toolName: string
  isMobile?: boolean
  intl?: IntlShape

  activeToolInfo: ActiveToolInfo
  onActiveToolInfoChange: (activeToolInfo: ActiveToolInfo) => void
}

export interface IconType {
  icon: React.ComponentClass<React.SVGAttributes<SVGElement>>
  onIconClick?: (evt?: React.MouseEvent<any>) => void
}

const defaultIcon = require('jimu-ui/lib/icons/widgets.svg')
const closeIcon = require('../../assets/icons/close-12.svg')

export abstract class BaseTool<P extends BaseToolProps, S extends unknown> extends UIComponent<P, S> {
  iconContainer: HTMLElement
  toolName: string = null
  isContainedToMobilePanel = false
  // this param is used to update pop position when pc content has changed
  generation?: number = 0
  modifiers: Modifiers

  constructor (props) {
    super(props)

    const mapContainer = this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.container
    if (MobilePanelManager.getInstance().checkDomIsContained(mapContainer)) {
      this.isContainedToMobilePanel = true
    }
    this.modifiers = [{
      name: 'flip',
      options: {
        padding: 0
      }
    }, {
      name: 'preventOverflow',
      options: {
        boundary: mapContainer
      }
    }]
  }

  private _cssStyle () {
    return css`
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
      }

      /* pointer-events: auto;
      box-shadow: 0 1px 2px rgba(0,0,0,0.3);
      position: relative;

      .exbmap-ui-tool-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .exbmap-ui-expand-content {
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        min-width: 10px;
        padding-top: ${polished.rem(10)};
        padding-bottom: ${polished.rem(10)};
        padding-left: ${polished.rem(20)};
        padding-right: ${polished.rem(20)};

        .exbmap-ui-expand-content-header {
          margin-bottom: ${polished.rem(10)};
        }

        .panel-title {
          font-size: ${polished.rem(16)};
          color: #000000;
        }
      }

      .expand-placement-bottom {
        padding-top: 0.25rem !important;
      }

      .expand-placement-left {
        padding-right: 0.25rem !important;
      }

      .expand-placement-right {
        padding-left: 0.25rem !important;
      }

      .expand-placement-top {
        padding-bottom: 0.25rem !important;
      }

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
    `
  }

  abstract getTitle (): string

  abstract getIcon (): IconType

  abstract getExpandPanel (): JSX.Element

  onShowPanel () {}

  onClosePanel () {}

  destroy () {}

  static getIsNeedSetting () {
    return true
  }

  private _onIconClick (e: React.MouseEvent<any>) {
    const onIconClick = this.getIcon() && this.getIcon().onIconClick
    if (onIconClick) {
      onIconClick(e)
    }

    if (!this.getExpandPanel()) {
      return
    }

    if (this.props.activeToolInfo) {
      if (this.props.activeToolInfo.activeToolName === this.toolName) {
        this.props.onActiveToolInfoChange(null)
      } else {
        this.props.onActiveToolInfoChange({
          activeToolName: this.toolName,
          activeToolTitle: this.getTitle()
        })
        this.onShowPanel()
      }
    } else {
      this.props.onActiveToolInfoChange({
        activeToolName: this.toolName,
        activeToolTitle: this.getTitle()
      })
      this.onShowPanel()
    }
  }

  private readonly _getContent = () => {
    if (this.props.toolJson.isOnlyExpanded) {
      return (
        <div css={this._cssStyle()} className='exbmap-ui exbmap-ui-tool-panel'>
          <ErrorBoundary>
            {this.getExpandPanel()}
          </ErrorBoundary>
        </div>
      )
    } else {
      if (this.props.isMobile) {
        return this._renderMobileTool()
      } else {
        return this._renderPCTool()
      }
    }
  }

  private _initIconContainer (ref: HTMLElement) {
    if (ref && !this.iconContainer) {
      this.iconContainer = ref
      this.forceUpdate()
    }
  }

  private readonly onResize = (width, height) => {
    if (!width || !height) {
      return
    }

    this.generation = height
    this.forceUpdate()
  }

  private _renderPCTool () {
    let toolIcon = this.getIcon()
    if (!toolIcon) {
      toolIcon = {
        icon: defaultIcon,
        onIconClick: () => {}
      } as IconType
    }

    const expandPanel = this.getExpandPanel()
    const activeToolName = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName
    this.generation = this.generation + 1

    return (
      <div className='exbmap-ui exbmap-ui-tool' css={this._cssStyle()} style={{ width: '32px', height: '32px' }}>
        <div
          style={{}} ref={ref => { this._initIconContainer(ref) }} className={classNames('exbmap-ui-tool esri-widget--button', {
            'exbmap-ui-tool-icon-selected': this.toolName === activeToolName && expandPanel
          })}
          title={this.props.toolJson.isShowIconTitle ? this.getTitle() : ''} onClick={e => { this._onIconClick(e) }}
        >
          <Icon width={16} height={16} className='exbmap-ui-tool-icon' icon={toolIcon.icon} />
        </div>
        {this.iconContainer && (this.toolName === activeToolName && expandPanel) && <PanelShell onDestroyed={() => { this.onClosePanel() }}>
          <Popper
            className='exbmap-ui-popper' reference={this.iconContainer} open={!!(this.toolName === activeToolName && expandPanel)} placement={this.props.toolJson.panelPlacement}
            modifiers={this.modifiers} version={this.generation} offset={[0, 4]}
          >
            <MultiSourceMapContext.Consumer>
              {({ mapWidgetHeight }) => (<div css={this._cssStyle()} className={this.getExpandPanelPlacementClassName()}>
                <div className='exbmap-ui-expand-content'>
                  <div className='w-100 justify-content-between d-flex exbmap-ui-expand-content-header'>
                    <div className='panel-title text-truncate' style={{ maxWidth: '210px' }} title={this.getTitle()}>
                      {this.getTitle()}
                    </div>
                    <div onClick={() => { this.props.onActiveToolInfoChange(null) }} style={{ cursor: 'pointer' }}>
                      <Icon width={20} height={20} icon={closeIcon} />
                    </div>
                  </div>
                  <ErrorBoundary>
                    <div style={{ maxHeight: `${mapWidgetHeight - 55}px`, overflowY: this.toolName !== 'Search' ? 'auto' : 'inherit' }}>
                      {expandPanel}
                    </div>
                    <ReactResizeDetector handleHeight onResize={this.onResize} />
                  </ErrorBoundary>
                </div>
                                         </div>)}
            </MultiSourceMapContext.Consumer>
          </Popper>
                                                                                    </PanelShell>}
      </div>
    )
  }

  handleToggleMobilePanel = () => {
    this.props.onActiveToolInfoChange(null)
  }

  private _renderMobileTool () {
    let toolIcon = this.getIcon()
    if (!toolIcon) {
      toolIcon = {
        icon: defaultIcon,
        onIconClick: () => {}
      } as IconType
    }

    const expandPanel = this.getExpandPanel()
    const activeToolName = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName
    return (
      <MultiSourceMapContext.Consumer>
        {({ mobilePanelContainer }) => (
          <div className='exbmap-ui exbmap-ui-tool' css={this._cssStyle()}>
            <div
              style={{}} ref={ref => { this.iconContainer = ref }} className={classNames('exbmap-ui-tool esri-widget--button', {
                'exbmap-ui-tool-icon-selected': this.toolName === activeToolName && expandPanel
              })}
              title={this.props.toolJson.isShowIconTitle ? this.getTitle() : ''} onClick={e => { this._onIconClick(e) }}
            >
              <Icon width={16} height={16} className='exbmap-ui-tool-icon' icon={toolIcon.icon} />
            </div>
            {this.toolName === activeToolName && expandPanel &&
            ReactDOM.createPortal(<PanelShell onDestroyed={() => { this.onClosePanel() }}><div className='w-100 h-100 d-flex flex-column' css={this._cssStyle()}>
              <ScrollContainer className='w-100 h-100'>
                <ErrorBoundary>
                  {this.getExpandPanel()}
                </ErrorBoundary>
              </ScrollContainer>
                                                                                          </div>
                                  </PanelShell>, mobilePanelContainer)}
          </div>
        )}
      </MultiSourceMapContext.Consumer>
    )
  }

  private getExpandPanelPlacementClassName () {
    if (!this.props.toolJson.panelPlacement) {
      return null
    } else {
      return `expand-placement-${this.props.toolJson.panelPlacement.split('-')[0]}`
    }
  }

  render () {
    return this._getContent()
  }
}
