/** @jsx jsx */
import { jsx, classNames, IntlShape } from 'jimu-core'
import { UIComponent, UIComponentProps } from './ui-component'
import { ToolConfig } from '../../../config'
import { BaseTool, BaseToolProps, ActiveToolInfo } from './base-tool'
import { LayoutJson, ToolJson } from '../config'
import ToolModules from '../tool-modules'

interface ToolShellProps extends UIComponentProps {
  layoutConfig: LayoutJson
  toolConfig: ToolConfig
  toolName: string
  isMobile?: boolean
  isHidden?: boolean
  intl?: IntlShape
  isLastElement?: boolean

  className?: string
  activeToolInfo: ActiveToolInfo
  onActiveToolInfoChange: (activeToolInfo: ActiveToolInfo) => void
}

export default class BaseToolShell extends UIComponent<ToolShellProps, unknown> {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const baseToolInstance = this.refs.baseToolInstance as BaseTool<BaseToolProps, unknown>

    if (!ToolModules[this.props.toolName].getIsNeedSetting() || (this.props.toolConfig && this.props.toolConfig[`can${this.props.toolName}`])) {
      (this.props.jimuMapView.view.ui as any).exbMapTools[this.props.toolName] = baseToolInstance
    }
  }

  componentWillUnmount () {
    if (ToolModules[this.props.toolName].getIsNeedSetting()) {
      const tempInstance = this.props.jimuMapView && this.props.jimuMapView.view &&
        this.props.jimuMapView.view.ui && (this.props.jimuMapView.view.ui as any).exbMapTools[this.props.toolName]
      if (tempInstance && tempInstance.destroy) {
        tempInstance.destroy()
        delete (this.props.jimuMapView.view.ui as any).exbMapTools[this.props.toolName]
      }
    }
  }

  render () {
    const ToolClass = ToolModules[this.props.toolName]
    if (ToolClass) {
      return (
        <div
          className={classNames(this.props.className, 'exbmap-ui exbmap-ui-tool-shell divitem', (this.props.layoutConfig.elements[this.props.toolName] as ToolJson).className,
            {
              'exbmap-ui-hidden-element': this.props.isHidden,
              'mb-0 mr-0': this.props.isLastElement,
              'rounded-pill': ['Compass'].includes(this.props.toolName)
            })} style={(this.props.layoutConfig.elements[this.props.toolName] as ToolJson).style}
        >
          <ToolClass
            ref='baseToolInstance' toolJson={this.props.layoutConfig.elements[this.props.toolName]} toolName={this.props.toolName} isMobile={this.props.isMobile}
            jimuMapView={this.props.jimuMapView} activeToolInfo={this.props.activeToolInfo} onActiveToolInfoChange={this.props.onActiveToolInfoChange}
            intl={this.props.intl} theme={this.props.theme}
          />
        </div>
      )
    } else {
      if (this.props.isMobile) {
        return <span />
      } else {
        return null
      }
    }
  }
}
