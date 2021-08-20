/** @jsx jsx */
import {
  extensionSpec, React, ReactRedux, moduleLoader, LayoutContextToolProps, IMState, getAppStore,
  IMAppConfig, IMUrlParameters, ThemeVariables, css, jsx, themeUtils, Immutable, classNames, i18n
} from 'jimu-core'
import { Icon, Tooltip } from 'jimu-ui'
import { Config, DynamicUrlType } from '../config'
import defaultMessage from '../../src/runtime/translations/default'
import settingDefaultMessage from '../setting/translations/default'

interface Props {
  id: string
  appConfig: IMAppConfig
  queryObject?: IMUrlParameters
  theme: ThemeVariables
  widgetConfig: Config
}

class _ChooseShape extends React.PureComponent<Props> {
  cropShapeList = ['rectangle', 'circle', 'hexagon', 'pentagon', 'rhombus', 'triangle']

  getStyle () {
    const theme = this.props.theme

    return css`
      .widget-image-chooseshape-item {
        background-color: ${theme.colors.palette.light[300]};
      }

      .widget-image-chooseshape-item:hover {
        cursor: 'pointer';
        background-color: ${theme.colors.palette.light[500]};
      }

      .chooseshape-item-selected {
        background-color: ${theme.colors.palette.light[500]};
      }
      `
  }

  getTooltipStyle () {
    const theme = this.props.theme
    return css`
      border: none;

      .tooltip {
        color: ${theme.colors.black};
        background-color: ${theme.colors.palette.light[600]};
        border-color: ${theme.colors.palette.light[300]};
      }
    `
  }

  shapeClick = (e, index) => {
    if (this.props.widgetConfig.functionConfig.imageParam && this.props.widgetConfig.functionConfig.imageParam.cropParam &&
       this.props.widgetConfig.functionConfig.imageParam.cropParam.cropShape === this.cropShapeList[index]) {
      return
    }

    const svgItem = e.currentTarget.getElementsByTagName('svg') && e.currentTarget.getElementsByTagName('svg')[0]
    if (svgItem) {
      const appConfigAction = moduleLoader.getJimuForBuilderModules().getAppConfigAction()
      let widgetConfig = Immutable(this.props.widgetConfig)
      let cropParam = Immutable(widgetConfig.functionConfig.imageParam ? widgetConfig.functionConfig.imageParam.cropParam : null)
      if (!cropParam) {
        cropParam = Immutable({})
      }
      cropParam = cropParam.set('svgViewBox', svgItem.getAttribute('viewBox'))
      cropParam = cropParam.set('svgPath', svgItem.getElementsByTagName('path')[0].getAttribute('d'))
      cropParam = cropParam.set('cropShape', this.cropShapeList[index])
      widgetConfig = widgetConfig.setIn(['functionConfig', 'imageParam', 'cropParam'], cropParam)
      appConfigAction.editWidgetConfig(this.props.id, widgetConfig).exec()
    }
  }

  render () {
    const { id, appConfig, theme, widgetConfig } = this.props
    const widgetJson = appConfig.widgets[id]
    // get widgetSettingManager from the parent of the app frame
    const widgetSettingManager = window.parent._widgetSettingManager
    const messages = widgetSettingManager.getSettingI18nMessagesByUri(widgetJson.uri)
    return (
      <div style={{ width: '50px' }} css={this.getStyle()}>
        {this.cropShapeList.map((item, index) => {
          const iconComponent = require(`jimu-ui/lib/icons/imagecrops/${item}.svg`)
          const imageNlsId = `image${item}`
          const tooltip = messages[imageNlsId] ?? settingDefaultMessage[imageNlsId]
          const selected = (item === 'rectangle' && !widgetConfig.functionConfig.imageParam?.cropParam) || widgetConfig.functionConfig.imageParam?.cropParam?.cropShape === item

          return (
            <Tooltip key={index} title={tooltip} placement='right-start' css={this.getTooltipStyle()}>
              <div
                className={classNames('w-100 d-flex justify-content-center align-items-center widget-image-chooseshape-item',
                  {
                    'chooseshape-item-selected': selected
                  })}
                style={{ height: '40px' }} onClick={(e) => this.shapeClick(e, index)}
              ><Icon icon={iconComponent} color={theme.colors.black} />
              </div>
            </Tooltip>
          )
        })}
      </div>
    )
  }
}

const ChooseShape = themeUtils.withBuilderTheme(_ChooseShape)

export default class CropTool implements extensionSpec.ContextToolExtension {
  index = 0
  id = 'choose-shape'
  widgetId: string

  classes: { [widgetId: string]: React.ComponentClass<unknown> } = {}

  getGroupId () {
    return null
  }

  getTitle () {
    const widgetId = this.widgetId
    const intl = i18n.getIntl(widgetId)
    return intl ? intl.formatMessage({ id: 'imageChooseShape', defaultMessage: defaultMessage.imageChooseShape }) : 'Shape'
  }

  getIcon () {
    return require('jimu-ui/lib/icons/choose-shape.svg')
  }

  onClick (props: LayoutContextToolProps) {
    return null
  }

  isEmptySource = (config: Config): boolean => {
    if ((!config.functionConfig.imageParam || !config.functionConfig.imageParam.url) && !config.functionConfig.srcExpression &&
      (config.functionConfig.dynamicUrlType !== DynamicUrlType.Attachment)) {
      return true
    } else {
      return false
    }
  }

  visible (props: LayoutContextToolProps) {
    const widgetInfo = getAppStore().getState().appConfig.widgets[props.layoutItem.widgetId]
    if (widgetInfo) {
      const widgetConfig = widgetInfo.config as Config
      if (this.isEmptySource(widgetConfig)) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }

  getSettingPanel (props: LayoutContextToolProps): React.ComponentClass<unknown> {
    const widgetId = props.layoutItem.widgetId
    if (this.classes[widgetId]) {
      return this.classes[widgetId]
    }

    const mapStateToProps = (state: IMState) => {
      const widgetConfig = Immutable(state.appConfig.widgets[widgetId].config)

      return {
        id: widgetId,
        appConfig: state.appConfig,
        queryObject: state.queryObject,
        widgetConfig: widgetConfig
      } as Props
    }
    this.classes[widgetId] = ReactRedux.connect(mapStateToProps)(ChooseShape) as any
    return this.classes[widgetId]
  }
}
