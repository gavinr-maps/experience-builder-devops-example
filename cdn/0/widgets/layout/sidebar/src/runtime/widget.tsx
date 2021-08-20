/** @jsx jsx */
import { React, AllWidgetProps, jsx, IMState } from 'jimu-core'
import { SidebarLayout } from '../layout/runtime/layout'
import { IMSidebarConfig } from '../config'

interface ExtraProps {
  sidebarVisible: boolean
}

export default class Widget extends React.PureComponent<AllWidgetProps<IMSidebarConfig> & ExtraProps> {
  static mapExtraStateProps = (state: IMState, props: AllWidgetProps<IMSidebarConfig>): ExtraProps => {
    return {
      sidebarVisible: state?.widgetsState?.[props.id]?.collapse ?? true
    }
  }

  render (): JSX.Element {
    const { layouts, theme, builderSupportModules } = this.props
    const LayoutComponent = !window.jimuConfig.isInBuilder
      ? SidebarLayout
      : builderSupportModules.widgetModules.SidebarLayoutBuilder

    if (LayoutComponent == null) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No layout component!</div>
      )
    }

    return (
      <div className='widget-sidebar-layout d-flex w-100 h-100'>
        <LayoutComponent
          theme={theme}
          widgetId={this.props.id}
          direction={this.props.config.direction}
          firstLayouts={layouts.FIRST}
          secondLayouts={layouts.SECOND}
          config={this.props.config}
          sidebarVisible={this.props.sidebarVisible}
        />
      </div>
    )
  }
}
