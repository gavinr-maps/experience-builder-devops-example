/** @jsx jsx */
import { jsx } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../../layout/base/base-tool'
import { defaultMessages } from 'jimu-ui'
import { SelectPCTool } from './select-pc'
import { SelectMobileTool } from './select-mobile'

interface SelectState {}

export default class Select extends BaseTool<BaseToolProps, SelectState> {
  toolName = 'Select'

  constructor (props) {
    super(props)

    this.state = {}
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'SelectLabel', defaultMessage: defaultMessages.SelectLabel })
  }

  getIcon (): IconType {
    return {
      icon: require('../../assets/icons/select-tool/select-rectangle.svg')
    }
  }

  getExpandPanel (): JSX.Element {
    if (this.props.isMobile) {
      return (
        <SelectMobileTool
          isActive={this.toolName === (this.props.activeToolInfo && this.props.activeToolInfo.activeToolName)}
          activeToolInfo={this.props.activeToolInfo} toolName={this.toolName}
          onActiveToolInfoChange={this.props.onActiveToolInfoChange} _onIconClick={() => { (this as any)._onIconClick() }}
          theme={this.props.theme} intl={this.props.intl} jimuMapView={this.props.jimuMapView}
        />
      )
    } else {
      return <SelectPCTool theme={this.props.theme} intl={this.props.intl} jimuMapView={this.props.jimuMapView} />
    }
  }
}
