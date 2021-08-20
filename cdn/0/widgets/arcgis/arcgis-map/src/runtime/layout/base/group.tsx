/** @jsx jsx */
import { css, jsx, classNames, ReactResizeDetector, IntlShape } from 'jimu-core'
import { UIComponent, UIComponentProps } from './ui-component'
import { ToolConfig } from '../../../config'
import { LayoutJson, GroupJson, HiddenElementNames, ToolJson } from '../config'
import BaseToolShell from './base-tool-shell'
import { ActiveToolInfo } from './base-tool'
import ToolModules from '../tool-modules'
import { MobilePanel } from 'jimu-ui'
import { MultiSourceMapContext } from '../../components/multisourcemap-context'

interface GroupProps extends UIComponentProps {
  mapWidgetId: string
  layoutConfig: LayoutJson
  toolConfig: ToolConfig
  groupName: string
  className: string
  style: React.CSSProperties
  isResponsive?: boolean
  isMobile?: boolean
  isMainGroup?: boolean
  hiddenElementNames?: HiddenElementNames
  isHidden?: boolean
  isThumbMap?: boolean
  intl?: IntlShape

  activeToolInfo: ActiveToolInfo
  onActiveToolInfoChange: (activeToolInfo: ActiveToolInfo) => void
  onSetHiddenElementNames?: (hiddenElementNames: HiddenElementNames) => void
}

interface GroupStates {
  bottomPanelHeight?: number
  widgetWidth?: number
  widgetHeight?: number
  isThumbMap?: boolean
}

export default class Group extends UIComponent<GroupProps, GroupStates> {
  moveY = 0
  startY = 0
  sliding = false
  startDrag = false
  currentBottomPanelHeight = 0
  bottomPanelContainer: HTMLDivElement
  thumbMapElementNames = ['FullScreen', 'Zoom', 'MapSwitch']

  getStyle () {
    const position = this.props.layoutConfig.layout[this.props.groupName] && this.props.layoutConfig.layout[this.props.groupName].position
    const direction = (this.props.layoutConfig.elements[this.props.groupName] as GroupJson).direction

    return css`
      position: ${position ? 'absolute' : 'relative'};
      top: ${position ? position.top : null}px;
      bottom: ${position ? position.bottom : null}px;
      left: ${position ? position.left : null}px;
      right: ${position ? position.right : null}px;
      display: flex;
      flex-flow: ${direction === 'vertical' ? 'column' : 'row'};
      align-items: flex-start;

      > .exbmap-ui + .exbmap-ui {
        margin-top: ${direction === 'vertical' ? '10px' : 0};
        margin-left: ${direction === 'horizontal' ? '10px' : 0};
      }

      .exbmap-ui-group-expand-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .expand-mobile-panel {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
        border-radius: 10px 10px 0px 0px;
      }

      .expand-mobile-panel-transition {
        transition: height 0.3s;
      }

      .expand-mobile-panel-touch-container {
        top: 0;
        position: absolute;
        width: 100%;
        height: 31px;
      }

      .expand-mobile-panel-bar {
        width: 36px;
        height: 4px;
        background-color: #434343;
        border-radius: 2px;
      }
      `
  }

  constructor (props) {
    super(props)

    this.state = {
      bottomPanelHeight: 0,
      isThumbMap: !!this.props.isMobile
    }
  }

  componentDidUpdate (prevProps: GroupProps, prevState: GroupStates) {
    if (this.props.activeToolInfo !== prevProps.activeToolInfo) {
      if (this.props.activeToolInfo && prevProps.activeToolInfo) {
        return
      }

      if (this.props.activeToolInfo && !prevProps.activeToolInfo && this.props.isMobile && this.props.isMainGroup) {
        this.setState({
          bottomPanelHeight: 150
        }, () => {
          this.checkResponsive()
        })

        this.currentBottomPanelHeight = 150
      }

      if (!this.props.activeToolInfo && prevProps.activeToolInfo && this.props.isMobile && this.props.isMainGroup) {
        this.setState({
          bottomPanelHeight: 0
        }, () => {
          this.checkResponsive()
        })

        this.currentBottomPanelHeight = 0
      }
    }
  }

  checkIsHiddenElement = (elementName) => {
    if (this.props.hiddenElementNames) {
      if (this.props.hiddenElementNames.includes(elementName)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  start = (event, type) => {
    this.startDrag = true

    if (type === 'touch') {
      this.moveY = 0

      const touch = event.touches[0]
      this.startY = touch.clientY
    }

    if (type === 'mouse') {
      this.moveY = 0
      this.startY = event.clientY
    }

    document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).classList.remove('expand-mobile-panel-transition')
  }

  move = (event, type) => {
    if (type === 'touch') {
      this.sliding = true
      const touch = event.touches[0]
      this.moveY = (touch.clientY - this.startY) * -1
    }

    if (type === 'mouse' && this.startDrag) {
      this.sliding = true
      this.moveY = (event.clientY - this.startY) * -1
    }

    if (type === 'mouse' && !this.startDrag) {
      return
    }

    let expectHeight = 150
    if (this.state.bottomPanelHeight + this.moveY > expectHeight) {
      expectHeight = this.state.bottomPanelHeight + this.moveY
    }

    document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).style.height = `${expectHeight}px`
    this.currentBottomPanelHeight = expectHeight

    const aboveHeight = this.state.widgetHeight - (expectHeight)
    if (aboveHeight > 360) {
      this.props.onSetHiddenElementNames([])
    }

    if (aboveHeight > 200 && aboveHeight <= 360) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage1)
    }

    if (aboveHeight > 54 && aboveHeight <= 200) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage2)
    }

    if (aboveHeight < 54) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage3)
    }
  }

  end = (event, type) => {
    if (type === 'mouse' && !this.startDrag) {
      return
    }
    this.startDrag = false

    this.sliding = false
    document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).classList.add('expand-mobile-panel-transition')

    if (type === 'touch') {
      if (Math.abs(this.moveY) < 10) {
        document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).style.height = `${this.state.bottomPanelHeight}px`
        this.currentBottomPanelHeight = this.state.bottomPanelHeight
        return
      }
    }

    if (this.moveY >= 0) {
      // up slider
      let targetBottomPanelHeight = 0

      if (this.currentBottomPanelHeight >= 150 && this.currentBottomPanelHeight < this.state.widgetHeight * 0.6) {
        targetBottomPanelHeight = this.state.widgetHeight * 0.6
      } else if (this.currentBottomPanelHeight >= this.state.widgetHeight * 0.6 && this.currentBottomPanelHeight < this.state.widgetHeight) {
        targetBottomPanelHeight = this.state.widgetHeight - 20
      } else {
        targetBottomPanelHeight = 150
      }

      this.setState({
        bottomPanelHeight: targetBottomPanelHeight
      }, () => {
        this.checkResponsive()
      })

      this.currentBottomPanelHeight = targetBottomPanelHeight
    } else {
      // down slider
      let targetBottomPanelHeight = 0

      if (this.currentBottomPanelHeight > 150 && this.currentBottomPanelHeight < this.state.widgetHeight * 0.6) {
        targetBottomPanelHeight = 150
      } else if (this.currentBottomPanelHeight >= this.state.widgetHeight * 0.6 && this.currentBottomPanelHeight < this.state.widgetHeight) {
        targetBottomPanelHeight = this.state.widgetHeight * 0.6
      } else {
        targetBottomPanelHeight = 150
      }

      this.setState({
        bottomPanelHeight: targetBottomPanelHeight
      }, () => {
        this.checkResponsive()
      })

      this.currentBottomPanelHeight = targetBottomPanelHeight
    }
  }

  checkResponsive = () => {
    if (this.state.isThumbMap) {
      this.props.onSetHiddenElementNames([])
      return
    }

    if (this.state.bottomPanelHeight === 0) {
      this.props.onSetHiddenElementNames([])
      return
    }

    const aboveHeight = this.state.widgetHeight - (this.state.bottomPanelHeight)
    if (aboveHeight > 360) {
      this.props.onSetHiddenElementNames([])
    }

    if (aboveHeight > 200 && aboveHeight <= 360) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage1)
    }

    if (aboveHeight > 54 && aboveHeight <= 200) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage2)
    }

    if (aboveHeight < 54) {
      this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage3)
    }
  }

  onResize = (width, height) => {
    if (!width || !height) {
      return
    }

    this.setState({
      widgetWidth: width,
      widgetHeight: height,
      isThumbMap: false
    }, () => {
      this.checkResponsive()
    })
  }

  returnNullNode = (key?) => {
    if (this.props.isMobile) {
      return <span key={key} />
    } else {
      return null
    }
  }

  checkIsLastElement = (parentGroupJson: GroupJson, toolJson: ToolJson) => {
    const toolName = toolJson.toolName
    const layoutJson = this.props.layoutConfig
    const children = layoutJson.layout[parentGroupJson.groupName].children
    const index = children.indexOf(toolName)
    if (index === children.length - 1) {
      return true
    }

    if (index < children.length - 1) {
      let isLastElement: boolean = true
      for (let i = (index + 1); i < children.length; i++) {
        const elementName = children[i]
        if (layoutJson.elements[children[i]].type === 'GROUP') {
          continue
        } else if ((!ToolModules[elementName].getIsNeedSetting() || (this.props.toolConfig && this.props.toolConfig[`can${elementName}`]) ||
          (layoutJson.lockToolNames && layoutJson.lockToolNames.includes(elementName)))) {
          isLastElement = false
          break
        } else {
          continue
        }
      }
      return isLastElement
    }
  }

  handleToggleMobilePanel = () => {
    this.props.onActiveToolInfoChange(null)
  }

  handlePanelHeightChange = (panelWidth, panelHeight) => {
    this.setState({ bottomPanelHeight: panelHeight }, () => {
      this.checkResponsive()
    })
  }

  getMobilePanelInContext = () => {
    return (
      <MultiSourceMapContext.Consumer>
        {({ mobilePanelContainer, mapWidgetId }) => (
          <MobilePanel
            mapWidgetId={mapWidgetId} title={this.props.activeToolInfo && this.props.activeToolInfo.activeToolTitle}
            open={!!this.props.activeToolInfo} toggle={() => { this.handleToggleMobilePanel() }}
          >
            <div className='w-100 h-100' ref={(container) => { if (mobilePanelContainer && container) { container.appendChild(mobilePanelContainer) } }} />
          </MobilePanel>
        )}
      </MultiSourceMapContext.Consumer>
    )
  }

  getGroupContent = (layoutJson: LayoutJson) => {
    if (!layoutJson) {
      return this.returnNullNode()
    } else {
      const children = layoutJson.layout[this.props.groupName] && layoutJson.layout[this.props.groupName].children
      if (this.checkIsShowGroup(layoutJson, children)) {
        return (
          <div
            id={(this.props.isMainGroup ? this.props.mapWidgetId : undefined)}
            css={this.getStyle()} className={classNames('exbmap-ui exbmap-ui-group', this.props.className,
              { 'exbmap-ui-hidden-element': this.props.isHidden })} style={this.props.style}
          >
            {children.map((key, index) => {
              if (!layoutJson.elements[key]) {
                return this.returnNullNode(index)
              }

              if (layoutJson.elements[key].type === 'GROUP') {
                return (
                  <Group
                    mapWidgetId={this.props.mapWidgetId} isHidden={this.checkIsHiddenElement(key)} className={(layoutJson.elements[key] as GroupJson).className}
                    style={(layoutJson.elements[key] as GroupJson).style}
                    key={index} layoutConfig={layoutJson} toolConfig={this.props.toolConfig} isMobile={this.props.isMobile} intl={this.props.intl}
                    jimuMapView={this.props.jimuMapView} groupName={key} activeToolInfo={this.props.activeToolInfo}
                    hiddenElementNames={this.props.hiddenElementNames}
                    onActiveToolInfoChange={this.props.onActiveToolInfoChange} theme={this.props.theme}
                    isThumbMap={this.props.isMainGroup ? this.state.isThumbMap : this.props.isThumbMap}
                  />
                )
              } else if (layoutJson.elements[key].type === 'TOOL') {
                if ((layoutJson.elements[key] as ToolJson).toolName === 'Navigation' && this.props.jimuMapView && this.props.jimuMapView.view &&
                this.props.jimuMapView.view.type === '2d') {
                  return this.returnNullNode(index)
                }

                if (!ToolModules[key].getIsNeedSetting() || (this.props.toolConfig && this.props.toolConfig[`can${key}`]) || (layoutJson.lockToolNames && layoutJson.lockToolNames.includes(key))) {
                  return (
                    <BaseToolShell
                      isHidden={this.checkIsHiddenElement(key)} key={index} layoutConfig={layoutJson}
                      activeToolInfo={this.props.activeToolInfo} toolConfig={this.props.toolConfig}
                      jimuMapView={this.props.jimuMapView} toolName={key} theme={this.props.theme}
                      onActiveToolInfoChange={this.props.onActiveToolInfoChange} intl={this.props.intl}
                      isMobile={this.props.isMobile} isLastElement={this.checkIsLastElement(layoutJson.elements[this.props.groupName] as GroupJson, layoutJson.elements[key] as ToolJson)}
                    />
                  )
                } else {
                  return this.returnNullNode(index)
                }
              } else {
                return this.returnNullNode(index)
              }
            })}
            {this.props.isMobile && this.props.isMainGroup && <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />}
            {this.props.isMainGroup && this.props.isMobile && this.props.activeToolInfo && this.props.activeToolInfo.activeToolName !== 'Select' && this.getMobilePanelInContext()}
            {this.props.isMainGroup && <div
              className='exbmap-ui w-100'
              style={{
                position: 'relative',
                pointerEvents: 'auto',
                overflow: 'hidden',
                touchAction: 'none',
                display: this.props.isMobile && !(this.state.isThumbMap || this.props.isThumbMap) ? 'block' : 'none'
              }}
            >
              <div
                className={`${this.props.mapWidgetId}-bottom-panel exbmap-ui w-100 expand-mobile-panel`}
                style={{ overflow: 'hidden', pointerEvents: 'auto', position: 'relative', touchAction: 'none' }}
              >
                <div className='w-100 h-100'>
                  <ReactResizeDetector handleHeight onResize={this.handlePanelHeightChange} />
                </div>
              </div>
            </div>}
          </div>
        )
      } else {
        return this.returnNullNode()
      }
    }
  }

  checkIsShowGroup = (layoutJson: LayoutJson, children: string[]) => {
    if (!children || children.length === 0) {
      return false
    } else {
      const toolNames = []
      this.findAllToolNames(layoutJson, children, toolNames)
      let isShowGroup = false
      for (let i = 0; i < toolNames.length; i++) {
        if (this.props.toolConfig[`can${toolNames[i]}`] || !ToolModules[toolNames[i]].getIsNeedSetting() ||
          (layoutJson.lockToolNames && layoutJson.lockToolNames.includes(toolNames[i]))) {
          isShowGroup = true
          break
        }
      }
      return isShowGroup
    }
  }

  findAllToolNames = (layoutJson: LayoutJson, children: string[], toolNames: string[]) => {
    if (!children || children.length === 0) {
      return
    }
    for (let i = 0; i < children.length; i++) {
      if (layoutJson.elements[children[i]].type === 'GROUP') {
        const groupName = (layoutJson.elements[children[i]] as GroupJson).groupName
        this.findAllToolNames(layoutJson, layoutJson.layout[groupName] && layoutJson.layout[groupName].children, toolNames)
      } else {
        toolNames.push(children[i])
      }
    }
  }

  render () {
    if (this.props.isMainGroup && this.props.isMobile && this.props.toolConfig && this.props.toolConfig.canSelect) {
      return (
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
          <div id={`${this.props.mapWidgetId}-with-select-container`} style={{ position: 'absolute', top: 0, left: 0, bottom: 40, right: 0 }}>
            <div className='w-100 h-100' style={{ position: 'relative' }}>
              {this.getGroupContent(this.props.layoutConfig)}
            </div>
          </div>
          <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: 40 }}>
            <div className='w-100 h-100' style={{ position: 'relative' }}>
              <BaseToolShell
                isHidden={false} layoutConfig={this.props.layoutConfig}
                activeToolInfo={this.props.activeToolInfo} toolConfig={this.props.toolConfig}
                jimuMapView={this.props.jimuMapView} toolName='SelectState' theme={this.props.theme}
                onActiveToolInfoChange={this.props.onActiveToolInfoChange} intl={this.props.intl}
                isMobile={this.props.isMobile} isLastElement
              />
            </div>
          </div>
        </div>
      )
    } else {
      return this.getGroupContent(this.props.layoutConfig)
    }
  }
}
