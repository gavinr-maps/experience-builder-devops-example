/** @jsx jsx */
import {
  React,
  jsx,
  css,
  classNames
} from 'jimu-core'
import {
  SettingChangeFunction
} from 'jimu-for-builder'
import {
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { utils } from 'jimu-layouts/layout-runtime'
import { BorderSetting, BackgroundSetting, InputUnit } from 'jimu-ui/advanced/style-setting-components'
import { Switch, Select, UnitTypes, LinearUnit, Icon, NumericInput, utils as uiUtils } from 'jimu-ui'
import { IMSidebarConfig, SidebarType, CollapseSides } from '../config'
import { PREDEFINED_TOGGLE_STYLE } from './toggle-button-config'

const availableUnits = [UnitTypes.PIXEL]

const STYLE_NAMES = ['default', 'rect']

const iconTop = require('jimu-ui/lib/icons/sidebar-top.svg')
const iconBottom = require('jimu-ui/lib/icons/sidebar-bottom.svg')
const iconLeft = require('jimu-ui/lib/icons/sidebar-left.svg')
const iconRight = require('jimu-ui/lib/icons/sidebar-right.svg')

const inputStyle = { width: '7.5rem' }

interface Props {
  widgetId: string
  // direction: SidebarType;
  config: IMSidebarConfig
  onSettingChange: SettingChangeFunction
  formatMessage: (id: string) => string
}

function findToggleBtnStyle (direction: SidebarType, side: CollapseSides) {
  if (direction === SidebarType.Horizontal) {
    return side === CollapseSides.First ? PREDEFINED_TOGGLE_STYLE.left : PREDEFINED_TOGGLE_STYLE.right
  }
  return side === CollapseSides.First ? PREDEFINED_TOGGLE_STYLE.top : PREDEFINED_TOGGLE_STYLE.bottom
}

export default class Setting extends React.PureComponent<Props> {
  selectedToggleBtnStyle: string

  constructor (props) {
    super(props)
    this.selectedToggleBtnStyle = 'default'
  }

  dockHorizontalLeft = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Horizontal || side !== CollapseSides.First) {
      this.updateDockside(SidebarType.Horizontal, CollapseSides.First)
    }
  }

  dockHorizontalRight = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Horizontal || side !== CollapseSides.Second) {
      this.updateDockside(SidebarType.Horizontal, CollapseSides.Second)
    }
  }

  dockVerticalTop = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Vertical || side !== CollapseSides.First) {
      this.updateDockside(SidebarType.Vertical, CollapseSides.First)
    }
  }

  dockVerticalBottom = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Vertical || side !== CollapseSides.Second) {
      this.updateDockside(SidebarType.Vertical, CollapseSides.Second)
    }
  }

  updateDockside (direction: SidebarType, side: CollapseSides) {
    const { config } = this.props
    const toggleBtnTemplate = config.toggleBtn.template || STYLE_NAMES[0]
    const toggleStyle = findToggleBtnStyle(direction, side)[toggleBtnTemplate]
    let newConfig = this.updateToggleBtnStyles(toggleStyle)
    newConfig = newConfig.set('direction', direction).set('collapseSide', side)
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: newConfig
    })
  }

  updateToggleBtnStyles (style) {
    const { config } = this.props
    let newConfig = config;
    [
      'offsetX',
      'offsetY',
      'position',
      'iconSize',
      'width',
      'height',
      'icon',
      'color',
      'expandStyle',
      'collapseStyle'
    ].forEach((prop) => {
      newConfig = newConfig.setIn(['toggleBtn', prop], style[prop])
    })
    return newConfig
  }

  updateDefaultState = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('defaultState', +e.target.value)
    })
  }

  updateOverlay = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('overlay', e.target.checked)
    })
  }

  updateResizable = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('resizable', e.target.checked)
    })
  }

  updateSize = (value: LinearUnit) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('size', `${value.distance}${value.unit}`)
    })
  }

  updateToggleBtn (prop: string, value: any) {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', prop], value)
    })
  }

  updateControllerPos = (e) => {
    this.updateToggleBtn('position', e.target.value)
  }

  updateControllerOffsetX = (value: number) => {
    this.updateToggleBtn('offsetX', value)
  }

  updateControllerOffsetY = (value: number) => {
    this.updateToggleBtn('offsetY', value)
  }

  updateControllerWidth = (value: number) => {
    this.updateToggleBtn('width', value)
  }

  updateControllerHeight = (value: number) => {
    this.updateToggleBtn('height', value)
  }

  updateControllerIconSize = (value: number) => {
    this.updateToggleBtn('iconSize', value)
  }

  updateFirstPanelBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['firstPanelStyle', 'background'], bg)
    })
  }

  updateSecondPanelBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['secondPanelStyle', 'background'], bg)
    })
  }

  updateDividerStyle = (borderStyle) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['divider', 'lineStyle'], borderStyle)
    })
  }

  updateDividerVisible = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['divider', 'visible'], e.target.checked)
    })
  }

  updateToggleBtnVisible = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', 'visible'], e.target.checked)
    })
  }

  getStyle () {
    return css`
      .toggle-btn-style {
        background: var(--white);
        width: 108px;
        height: 30px;
        cursor: pointer;

        &.selected {
          border: 2px solid var(--primary-600);
        }
      }
    `
  }

  useDefaultToggleStyle = () => {
    const { config } = this.props
    if (config.toggleBtn.template !== STYLE_NAMES[0]) {
      const toggleStyle = findToggleBtnStyle(config.direction, config.collapseSide)[STYLE_NAMES[0]]
      let newConfig = this.updateToggleBtnStyles(toggleStyle)
      newConfig = newConfig.setIn(['toggleBtn', 'template'], STYLE_NAMES[0])
      this.props.onSettingChange({
        id: this.props.widgetId,
        config: newConfig
      })
    }
  }

  useRectToggleStyle = () => {
    const { config } = this.props
    if (config.toggleBtn.template !== STYLE_NAMES[1]) {
      const toggleStyle = findToggleBtnStyle(config.direction, config.collapseSide)[STYLE_NAMES[1]]
      let newConfig = this.updateToggleBtnStyles(toggleStyle)
      newConfig = newConfig.setIn(['toggleBtn', 'template'], STYLE_NAMES[1])
      this.props.onSettingChange({
        id: this.props.widgetId,
        config: newConfig
      })
    }
  }

  getDocksideStyle () {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 30px;
      cursor: pointer;
      background: var(--white);

      &.selected {
        outline: 2px solid var(--primary-600);
      }
    `
  }

  render () {
    const { config, formatMessage } = this.props
    // this.findPanelLayouts();
    const builderTheme = utils.getBuilderThemeVariables()
    const toggleBtnTemplate = config.toggleBtn.template || STYLE_NAMES[0]
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First
    const isHorizontal = direction === SidebarType.Horizontal

    return (
      <div className='hsidebar-layout-setting' css={this.getStyle()}>
        <SettingSection title={formatMessage('panel')}>
          <SettingRow label={formatMessage('dockSide')} flow='wrap'>
            <div className='d-flex justify-content-between w-100'>
              <div
                css={this.getDocksideStyle()}
                className={classNames({ selected: isHorizontal && side === CollapseSides.First })}
                onClick={this.dockHorizontalLeft}
              >
                <Icon icon={iconLeft} width={30} height={18} options={{ currentColor: false }} autoFlip />
              </div>
              <div
                css={this.getDocksideStyle()}
                className={classNames({ selected: isHorizontal && side === CollapseSides.Second })}
                onClick={this.dockHorizontalRight}
              >
                <Icon icon={iconRight} width={30} height={18} options={{ currentColor: false }} autoFlip />
              </div>
              <div
                css={this.getDocksideStyle()}
                className={classNames({ selected: !isHorizontal && side === CollapseSides.First })}
                onClick={this.dockVerticalTop}
              >
                <Icon icon={iconTop} width={22} height={20} options={{ currentColor: false }} />
              </div>
              <div
                css={this.getDocksideStyle()}
                className={classNames({ selected: !isHorizontal && side === CollapseSides.Second })}
                onClick={this.dockVerticalBottom}
              >
                <Icon icon={iconBottom} width={22} height={20} options={{ currentColor: false }} />
              </div>
            </div>
          </SettingRow>
          <SettingRow label={formatMessage('size')}>
            <InputUnit units={availableUnits} value={uiUtils.stringOfLinearUnit(config.size)} style={inputStyle} onChange={this.updateSize} />
          </SettingRow>
          <SettingRow label={formatMessage('overlay')}>
            <Switch checked={config.overlay} onChange={this.updateOverlay} />
          </SettingRow>
          <SettingRow label={formatMessage('resizable')}>
            <Switch checked={config.resizable} onChange={this.updateResizable} />
          </SettingRow>
          <SettingRow label={formatMessage('defaultState')}>
            <Select value={config.defaultState} onChange={this.updateDefaultState} style={inputStyle}>
              <option value='1'>{formatMessage('expanded')}</option>
              <option value='0'>{formatMessage('collapsed')}</option>
            </Select>
          </SettingRow>
        </SettingSection>
        <SettingSection title={formatMessage('toggleBtn')}>
          <SettingRow label={formatMessage('visible')}>
            <Switch checked={config.toggleBtn.visible} onChange={this.updateToggleBtnVisible} />
          </SettingRow>
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('style')} flow='wrap'>
              <div className='d-flex w-100 justify-content-between'>
                <div
                  className={classNames('toggle-btn-style d-flex justify-content-center align-items-center', {
                    selected: toggleBtnTemplate === STYLE_NAMES[0]
                  })}
                  onClick={this.useDefaultToggleStyle}
                >
                  <div
                    css={css`
                      width: 60px;
                      height: 15px;
                      background: ${builderTheme.colors.secondary};
                      border-radius: 100px 100px 0 0;
                    `}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <Icon className='icon' icon={require('jimu-ui/lib/icons/arrow-down-14.svg')} size={14} />
                  </div>
                </div>
                <div
                  className={classNames('toggle-btn-style d-flex justify-content-center align-items-center ml-1', {
                    selected: toggleBtnTemplate === STYLE_NAMES[1]
                  })}
                  onClick={this.useRectToggleStyle}
                >
                  <div
                    css={css`
                      width: 40px;
                      height: 15px;
                      background: ${builderTheme.colors.secondary};
                      border-radius: 4px 4px 0 0;
                    `}
                    className='toggle-btn d-flex justify-content-center align-items-center'
                  >
                    <Icon className='icon' icon={require('jimu-ui/lib/icons/arrow-down-14.svg')} size={14} />
                  </div>
                </div>
              </div>
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('width')}>
              <NumericInput size='sm' style={inputStyle} value={config.toggleBtn.width} onChange={this.updateControllerWidth} />
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('height')}>
              <NumericInput size='sm' style={inputStyle} value={config.toggleBtn.height} onChange={this.updateControllerHeight} />
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('position')}>
              <Select value={config.toggleBtn.position} onChange={this.updateControllerPos} style={inputStyle}>
                <option value='START'>{isHorizontal ? formatMessage('T') : formatMessage('L')}</option>
                <option value='CENTER'>{formatMessage('center')}</option>
                <option value='END'>{isHorizontal ? formatMessage('B') : formatMessage('R')}</option>
              </Select>
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('offsetX')}>
              <NumericInput size='sm' style={inputStyle} value={config.toggleBtn.offsetX} onChange={this.updateControllerOffsetX} />
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('offsetY')}>
              <NumericInput size='sm' style={inputStyle} value={config.toggleBtn.offsetY} onChange={this.updateControllerOffsetY} />
            </SettingRow>
          )}
          {config.toggleBtn.visible && (
            <SettingRow label={formatMessage('iconSize')}>
              <NumericInput size='sm' style={inputStyle} value={config.toggleBtn.iconSize} onChange={this.updateControllerIconSize} />
            </SettingRow>
          )}
        </SettingSection>
        <SettingSection title={formatMessage('divider')}>
          <SettingRow label={formatMessage('visible')}>
            <Switch checked={config.divider.visible} onChange={this.updateDividerVisible} />
          </SettingRow>
          {config.divider.visible && (
            <SettingRow label={formatMessage('style')} flow='wrap'>
              <BorderSetting value={config.divider.lineStyle} onChange={this.updateDividerStyle} />
            </SettingRow>
          )}
        </SettingSection>
        <SettingSection title={isHorizontal ? formatMessage('leftPanel') : formatMessage('topPanel')}>
          <SettingRow>
            <BackgroundSetting
              background={config.firstPanelStyle?.background}
              onChange={this.updateFirstPanelBg}
            />
          </SettingRow>
        </SettingSection>
        <SettingSection title={isHorizontal ? formatMessage('rightPanel') : formatMessage('bottomPanel')}>
          <SettingRow>
            <BackgroundSetting
              background={config.secondPanelStyle?.background}
              onChange={this.updateSecondPanelBg}
            />
          </SettingRow>
        </SettingSection>
      </div>
    )
  }
}
