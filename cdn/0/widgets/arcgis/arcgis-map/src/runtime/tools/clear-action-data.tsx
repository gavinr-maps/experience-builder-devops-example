/** @jsx jsx */
import { css, jsx, MutableStoreManager, getAppStore, ImmutableObject, IMJimuMapViewInfo } from 'jimu-core'
import { ShowOnMapDatas, ShowOnMapDataType } from 'jimu-arcgis'
import { Icon, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'jimu-ui'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { MultiSourceMapContext } from '../components/multisourcemap-context'
import { defaultMessages } from 'jimu-ui'

interface State {
  isOpen: boolean
}

export default class ClearActionData extends BaseTool<BaseToolProps, State> {
  toolName = 'ClearActionData'

  constructor (props) {
    super(props)
    this.state = { isOpen: false }
  }

  static getIsNeedSetting () {
    return false
  }

  getStyle () {
    return css`
      .jimu-dropdown {
        margin-top: 10px;
        display: flex;
      }
    `
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'clearResults', defaultMessage: defaultMessages.clearResults})
  }

  getIcon (): IconType {
    return {
      icon: require('../assets/icons/clear-data.svg'),
      onIconClick: () => {
        this.onIconClick()
      }
    }
  }

  createActionDataItem (actionDataId: string, actionDataTitle: string, mapWidgetId: string, key: number) {
    return (
      <DropdownItem
        key={key}
        header={false}
        onClick={e => this.onActionItemClick(e, actionDataId, mapWidgetId)}
      >
        {actionDataTitle}
      </DropdownItem>
    )
  }

  getShowOnMapDatas (mapWidgetId: string) {
    const showOnMapDatas: ShowOnMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.showOnMapDatas || {}
    return Object.entries(showOnMapDatas).filter(entry => {
      // There is no jimuMapViewId while generating the action data if the map widget hasn't been loaded in the another page/view,
      // use a default jimuMapViewId to show data.
      let jimuMapViewId = entry[1].jimuMapViewId
      if (!jimuMapViewId && entry[1].mapWidgetId === mapWidgetId) {
        const jimuMapViewsInfo: ImmutableObject<{[jimuMapViewId: string]: IMJimuMapViewInfo}> = getAppStore().getState().jimuMapViewsInfo
        jimuMapViewId = Object.keys(jimuMapViewsInfo || {}).find(viewId => jimuMapViewsInfo[viewId].mapWidgetId === mapWidgetId)
      }

      return (jimuMapViewId === this.props.jimuMapView.id && entry[1].type === ShowOnMapDataType.DataAction)
    })
  }

  onIconClick = () => {}

  onDropDownToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onActionItemClick = (evt, actionDataId: string, mapWidgetId: string) => {
    this.setState({ isOpen: false })
    const showOnMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.showOnMapDatas
    if (showOnMapDatas) {
      delete showOnMapDatas[actionDataId]
      MutableStoreManager.getInstance().updateStateValue(mapWidgetId, 'showOnMapDatas', showOnMapDatas)
    }
  }

  getExpandPanel (): JSX.Element {
    // return (
    //  <div className='exbmap-ui-tool esri-widget--button'>
    //    <Icon width={16} height={16} className='exbmap-ui-tool-icon' icon={this.getIcon().icon} />
    //  </div>
    // )
    return (
      <MultiSourceMapContext.Consumer>
        {({ isShowClearShowOnMapDataBtn, mapWidgetId }) => (
          this.getContent(isShowClearShowOnMapDataBtn, mapWidgetId)
        )}
      </MultiSourceMapContext.Consumer>

    )
  }

  getContent = (isShowClearShowOnMapDataBtn: boolean, mapWidgetId: string) => {
    if (isShowClearShowOnMapDataBtn) {
      return (
        <div css={this.getStyle()} title={this.getTitle()}>
          <Dropdown
            direction='down'
            size='sm'
            toggle={this.onDropDownToggle}
            isOpen={this.state.isOpen}
          >
            <DropdownToggle icon size='sm' type='default'>
              <Icon size={16} className='exbmap-ui-tool-icon' icon={this.getIcon().icon} />
            </DropdownToggle>
            <DropdownMenu>
              {this.getShowOnMapDatas(mapWidgetId).map((entry, index) => this.createActionDataItem(entry[0], entry[1].title, mapWidgetId, index))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )
    } else {
      return null
    }
  }
}
