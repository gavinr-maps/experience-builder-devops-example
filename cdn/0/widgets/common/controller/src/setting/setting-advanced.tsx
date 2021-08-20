/** @jsx jsx */
import { jsx } from 'jimu-core';
import { SettingRow } from 'jimu-ui/advanced/setting-components';
import { Tabs, Tab } from 'jimu-ui';
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker';
import { FontStyle } from 'jimu-ui/advanced/style-setting-components';

export const SettingAdvanced = ({ variant, appTheme, onSettingConfigChange, themeBoxDataItems, getI18nMessage }) => {
  return (
    <SettingRow className="sw-controller__advanced-setting" flow="wrap">
      <Tabs type='pills' className="flex-grow-1 w-100 h-100" fill defaultValue={themeBoxDataItems[0]?.themeKey}>
        {
          themeBoxDataItems.map((themeBoxDataItem, x) => {
            const themeBoxStyles = variant?.[themeBoxDataItem.themeKey];
            const renderThemeColorPicker = (propertyKey) => (
              <ThemeColorPicker
                specificTheme={appTheme}
                value={themeBoxStyles?.[propertyKey]}
                onChange={(value) => onSettingConfigChange(['appearance', 'card', 'variant', themeBoxDataItem.themeKey, propertyKey], value)}
              />
            );
            return (
              <Tab key={x} id={themeBoxDataItem.themeKey} className="tab-title-item" title={themeBoxDataItem.title}>
                <SettingRow className="mt-2" label={getI18nMessage('textFormatOverride')} flow="no-wrap">
                  <div className="font-setting-row">
                    <FontStyle
                      bold={themeBoxStyles?.bold}
                      italic={themeBoxStyles?.italic}
                      underline={themeBoxStyles?.underline}
                      strike={themeBoxStyles?.strike}
                      onChange={(key, value) => onSettingConfigChange(['appearance', 'card', 'variant', themeBoxDataItem.themeKey, key], value)}
                    />
                    {renderThemeColorPicker('color')}
                  </div>
                </SettingRow>
                <SettingRow className="mt-2" label={getI18nMessage('iconBackgroundOverride')} flow="no-wrap">
                  {renderThemeColorPicker('bg')}
                </SettingRow>
              </Tab>
            )
          })
        }
      </Tabs>
    </SettingRow>
  )
}
