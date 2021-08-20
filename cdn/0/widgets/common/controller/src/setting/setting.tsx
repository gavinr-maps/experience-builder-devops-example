/** @jsx jsx */
import { React, css, jsx, polished, ThemeVariables, IMState, Immutable, ImmutableArray, ReactRedux, IMThemeButtonStylesByState } from 'jimu-core';
import { AllWidgetSettingProps, getAppConfigAction } from 'jimu-for-builder';
import { SettingSection, SettingRow, DirectionSelector } from 'jimu-ui/advanced/setting-components';
import { defaultMessages as jimuLayoutMessages } from 'jimu-layouts/layout-runtime';
import { IMConfig, DisplayType } from '../config';
import { Switch, Radio, Select, Label, defaultMessages as jimuUiDefaultMessages, MultiSelect, hooks, UnitTypes } from 'jimu-ui';
import defaultMessages from './translations/default';
import { Shapes, ShapeType } from './shapes';
import { InputUnit } from 'jimu-ui/advanced/style-setting-components';
import { useWidgetIdsOfControllerLayout } from '../common/utils';
import { BASE_LAYOUT_NAME } from '../common/consts';
import { SettingAdvanced } from './setting-advanced';
const { useSelector } = ReactRedux;

const DEFAULT_COLOR = '#080808';

const DEFAULT_OPEN_START = 'none';

type ControlledWidgets = ImmutableArray<{
  label: string,
  value: string
}>;

const style = css`
    font-size: 13px;
    font-weight: lighter;
    .setting-row-item {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      > span.jimu-radio {
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
      > label {
        margin-bottom: 0;
      }
    }
    .font-setting-row {
      display: flex;
      align-items: center;
    }
    .jimu-multi-select {
      width: 100%;
      > .jimu-dropdown {
        width: 100%;
      }
      > .jimu-menu-item {
        width: 100%;
        height: ${polished.rem(26)};
      }
    }
  `;

export type ControllerSettingProps = AllWidgetSettingProps<IMConfig>;

const useControlledWidgets = (id: string, layoutName: string): ControlledWidgets => {
  const controlledWidgets = useWidgetIdsOfControllerLayout(id, layoutName);
  const widgets = useSelector((state: IMState) => state.appStateInBuilder.appConfig.widgets);
  const imControlledWidgets = Immutable(controlledWidgets || []);
  return imControlledWidgets.map((widgetId) => ({
    label: widgets[widgetId]?.label,
    value: widgetId
  })) as any
}

const getButtonVariant = (theme: ThemeVariables, config: IMConfig): IMThemeButtonStylesByState => {
  const type = config?.appearance?.card.avatar?.type || 'primary';
  let variant = theme?.components?.button?.variants?.[type];
  variant = variant.setIn(['default', 'color'], DEFAULT_COLOR);
  variant = variant.setIn(['active', 'color'], DEFAULT_COLOR);
  return variant;
}

const getThemeBoxDataItems = ({ getI18nMessage }) => [{
  themeKey: 'default',
  title: getI18nMessage('regular'),
}, {
  themeKey: 'active',
  title: getI18nMessage('selected'),
}, {
  themeKey: 'hover',
  title: getI18nMessage('hover'),
}];

const Setting = (props: ControllerSettingProps) => {
  const { id, config, theme, onSettingChange } = props;
  const onlyOpenOne = config?.behavior?.onlyOpenOne;
  const displayType = config?.behavior?.displayType;
  const vertical = config?.behavior?.vertical;
  const openStarts = config?.behavior?.openStarts;
  const space = config?.appearance?.space;
  const advanced = config?.appearance?.advanced;
  const showLabel = config?.appearance.card?.showLabel;
  const labelGrowth = config?.appearance.card?.labelGrowth ?? 0;
  const size = config?.appearance.card?.avatar?.size;
  const shape = config?.appearance.card?.avatar?.shape;

  const openStart = openStarts?.[0] ?? DEFAULT_OPEN_START;
  const iconInterval = vertical ? space : labelGrowth;

  const appTheme = useSelector((state: IMState) => state.appStateInBuilder.theme);
  const controlledWidgets = useControlledWidgets(id, BASE_LAYOUT_NAME);

  const translate = hooks.useTranslate(jimuUiDefaultMessages, jimuLayoutMessages, defaultMessages);

  const variant = advanced ? config?.appearance?.card.variant : getButtonVariant(appTheme, config);

  const onSettingConfigChange = (key: string | string[], value: any) => {
    let newConfig = null;
    if (Array.isArray(key)) {
      newConfig = config.setIn(key, value);
    } else {
      newConfig = config.set(key, value);
    }
    onSettingChange({
      id: id,
      config: newConfig
    });
  }

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, value: any) => {
    const checked = e.currentTarget.checked;
    if (!checked) {
      return;
    }
    let newConfig = null;
    if (key === 'onlyOpenOne') {
      newConfig = config.setIn(['behavior', 'openStarts'], Immutable([])).setIn(['behavior', key], value)
    } else if (key === 'displayType') {
      value = value ? DisplayType.Stack : DisplayType.SideBySide;
      newConfig = config.setIn(['behavior', key], value);
    }
    onSettingChange({
      id,
      config: newConfig
    });
  }

  const handleOpenStartMultipleClick = (_, value: string, selectedValues: string[]) => {
    const values = onlyOpenOne ? (selectedValues.length ? [value] : []) : selectedValues;
    onSettingConfigChange(['behavior', 'openStarts'], values);
  }

  const handleOpenStartSingleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value;
    let openStarts = [];
    if (value !== DEFAULT_OPEN_START) {
      openStarts = [value];
    }
    onSettingConfigChange(['behavior', 'openStarts'], openStarts);
  }

  const renderMultiSelectText = (values: string[]) => {
    if (onlyOpenOne && values.length) {
      const widget = controlledWidgets.find(w => w.value === values[0]);
      return widget?.label;
    } else {
      const widgetNumber = values?.length || 0;
      return translate('widgetsSelected', { widgetNumber });
    }
  }

  const onIconIntervalChanged = (value: number) => {
    value = +value;
    if (isNaN(value)) {
      value = 0;
    }

    let newConfig = config;
    if (newConfig.behavior.vertical) {
      newConfig = newConfig.setIn(['appearance', 'space'], value).setIn(['appearance', 'card', 'labelGrowth'], 0);
    } else {
      newConfig = newConfig.setIn(['appearance', 'card', 'labelGrowth'], value).setIn(['appearance', 'space'], 0);
    }
    onSettingChange({
      id,
      config: newConfig
    });
  }

  const onAdvancedChange = () => {
    const advanced = !config?.appearance?.advanced;
    let newConfig = config.setIn(['appearance', 'advanced'], advanced);
    if (advanced) {
      const variant = getButtonVariant(appTheme, config);
      newConfig = newConfig.setIn(['appearance', 'card', 'variant'], variant);
    } else {
      newConfig = newConfig.setIn(['appearance', 'card', 'variant'], undefined);
    }

    onSettingChange({
      id,
      config: newConfig
    });
  }

  const onDirectionChanged = (vertical: boolean) => {
    const newConfig = config.setIn(['behavior', 'vertical'], vertical).setIn(['appearance', 'card', 'labelGrowth'], 0).setIn(['appearance', 'space'], 0);
    onSettingChange({
      id,
      config: newConfig
    });
    getAppConfigAction().exchangeWidthAndHeight().exec();
  }

  return <div className="widget-setting-controller jimu-widget-setting" css={style}>
    <SettingSection>
      <SettingRow flow="no-wrap" label={translate('direction')}>
        <DirectionSelector vertical={vertical} onChange={onDirectionChanged}></DirectionSelector>
      </SettingRow>
    </SettingSection>
    <SettingSection title={translate('behavior')}>
      <SettingRow flow="wrap" label={translate('openWidget')}>
        <div className="setting-row-item">
          <Radio id="only-open-one" style={{ cursor: 'pointer' }}
            name="only-open-one" onChange={e => onRadioChange(e, 'onlyOpenOne', true)} checked={onlyOpenOne} />
          <Label style={{ cursor: 'pointer' }} for="only-open-one" className="ml-2">{translate('single')}</Label>
        </div>
        <div className="setting-row-item">
          <Radio id="open-multiple" style={{ cursor: 'pointer' }}
            name="only-open-one" onChange={e => onRadioChange(e, 'onlyOpenOne', false)} checked={!onlyOpenOne} />
          <Label style={{ cursor: 'pointer' }} for="open-multiple" className="ml-2">{translate('multiple')}</Label>
        </div>
      </SettingRow>

      <SettingRow flow="wrap" label={translate('openStart')}>
        {!onlyOpenOne && <MultiSelect
          values={openStarts}
          items={controlledWidgets}
          onClickItem={handleOpenStartMultipleClick}
          displayByValues={renderMultiSelectText} />}
        {
          onlyOpenOne && <Select value={openStart} onChange={handleOpenStartSingleChange} className="w-100">
            <option value={DEFAULT_OPEN_START}>{translate('none')}</option>
            {
              controlledWidgets?.map(item => {
                return <option key={item.value} value={item.value}>{item.label}</option>
              })
            }
          </Select>
        }
      </SettingRow>
      {!onlyOpenOne && <SettingRow flow="wrap" label={translate('displayType')}>
        <div className="setting-row-item">
          <Radio id="display-stack" style={{ cursor: 'pointer' }}
            name="display-type" onChange={e => onRadioChange(e, 'displayType', true)}
            checked={displayType === DisplayType.Stack} />
          <Label style={{ cursor: 'pointer' }} for="display-stack" className="ml-2">{translate('stack')}</Label>
        </div>
        <div className="setting-row-item">
          <Radio id="display-side-by-side" style={{ cursor: 'pointer' }}
            name="display-type" onChange={e => onRadioChange(e, 'displayType', false)}
            checked={displayType === DisplayType.SideBySide} />
          <Label style={{ cursor: 'pointer' }} for="display-side-by-side" className="ml-2">{translate('sideBySide')}</Label>
        </div>
      </SettingRow>}

    </SettingSection>

    <SettingSection title={translate('appearance', true)}>
      <SettingRow flow="wrap" label={translate('iconStyle')}>
        <Shapes type={ShapeType.Circle} title={translate('circle', true)} className="mr-2" active={shape === 'circle'} theme={theme}
          onClick={() => onSettingConfigChange(['appearance', 'card', 'avatar', 'shape'], 'circle')}></Shapes>
        <Shapes type={ShapeType.Rectangle} title={translate('rectangle')} active={shape === 'rectangle'} theme={theme}
          onClick={() => onSettingConfigChange(['appearance', 'card', 'avatar', 'shape'], 'rectangle')}></Shapes>
      </SettingRow>
      <SettingRow label={translate('showIconLabel')}>
        <Switch checked={showLabel} onChange={(evt) => onSettingConfigChange(['appearance', 'card', 'showLabel'], evt.target.checked)}></Switch>
      </SettingRow>
      <SettingRow flow="no-wrap" label={translate('iconSizeOverride')}>
        <Select value={size} onChange={(e) => onSettingConfigChange(['appearance', 'card', 'avatar', 'size'], e.target.value)} className="w-50">
          <option value="sm">{translate('small')}</option>
          <option value="default">{translate('medium')}</option>
          <option value="lg">{translate('large')}</option>
        </Select>
      </SettingRow>
      <SettingRow flow="no-wrap" label={translate('iconInterval')}>
        <InputUnit className="w-50" min={0} max={999} value={{ distance: iconInterval, unit: UnitTypes.PIXEL }} onChange={({ distance }) => onIconIntervalChanged(distance)} />
      </SettingRow>
    </SettingSection>

    <SettingSection>
      <SettingRow flow="no-wrap" label={translate('advance')}>
        <Switch checked={advanced} onChange={onAdvancedChange}></Switch>
      </SettingRow>
      {
        advanced &&
        <SettingAdvanced
          themeBoxDataItems={getThemeBoxDataItems({ getI18nMessage: translate })}
          variant={variant}
          appTheme={appTheme}
          onSettingConfigChange={onSettingConfigChange}
          getI18nMessage={translate}
        />
      }
    </SettingSection>
  </div>
}

export default Setting;