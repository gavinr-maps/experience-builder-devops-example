import * as React from 'react';
import { mockTheme, getInitState, widgetRender } from 'jimu-for-test';
import { SettingAdvanced } from './setting-advanced';
import { getAppStore, appActions } from 'jimu-core';

const themeBoxDataItems = [{
  themeKey: 'dummyActive',
  title: 'dummyActiveTitle',
  defaultActive: true,
}, {
  themeKey: 'dummyHover',
  title: 'dummyHoverTitle',
  defaultActive: false,
}];

const themeBoxStyle = {
  dummyActive: { color: '#fff', bg: '#ff0' },
  dummyHover: { color: '#000', bg: '#00f' },
};

const initState = getInitState().merge({ appConfig: { dialogs: {} } });
getAppStore().dispatch(appActions.updateStoreState(initState));

describe('<SettingAdvanced />', () => {
  const mockOnSettingConfigChange = jest.fn();
  const mockGetI18nMessage = jest.fn();
  describe('given empty themeBoxDataItems prop', () => {
    const renderContent = (
      <SettingAdvanced
        appTheme={{}}
        variant={themeBoxStyle}
        themeBoxDataItems={[]}
        onSettingConfigChange={mockOnSettingConfigChange}
        getI18nMessage={mockGetI18nMessage}
      />
    );
    it('ThemeColorPicker is not rendered', () => {
      const { container } = widgetRender(getAppStore(), mockTheme as any)(renderContent);
      const ThemeColorPickers = container.querySelectorAll('.color-picker-block')
      expect(ThemeColorPickers.length).toBe(0);
    })
    it('Tab is not rendered', () => {
      const { container } = widgetRender(getAppStore(), mockTheme as any)(renderContent);
      const Tabs = container.querySelectorAll('.tab-pane');
      expect(Tabs.length).toBe(0);
    })
  })
  describe('given themeBoxDataItems prop', () => {
    const renderContent = (
      <SettingAdvanced
        appTheme={{}}
        variant={themeBoxStyle}
        themeBoxDataItems={themeBoxDataItems}
        onSettingConfigChange={mockOnSettingConfigChange}
        getI18nMessage={mockGetI18nMessage}
      />
    );

    it('Tab has defaultActive prop properly provided', () => {
      const { container } = widgetRender(getAppStore(), mockTheme as any)(renderContent);
      const itemX1 = themeBoxDataItems.findIndex(x => !!x.defaultActive);
      const itemX2 = themeBoxDataItems.findIndex(x => !x.defaultActive);
      const Tabs = container.querySelectorAll('.tab-title-item > a');
      expect(Tabs[itemX1]).toHaveClass('active');
      expect(Tabs[itemX2]).not.toHaveClass('active');
    })

    it('ThemeColorPicker has value prop properly provided', () => {
      const { container } = widgetRender(getAppStore(), mockTheme as any)(renderContent);
      const themeKey = Object.keys(themeBoxStyle)[0];
      const itemX = themeBoxDataItems.findIndex(x => x.themeKey === themeKey);
      const Tabs = container.querySelectorAll('.tab-pane');
      const ThemeColorPickers = Tabs[itemX].querySelectorAll('.color-picker-block [data-color]');
      expect(ThemeColorPickers[0]).toHaveAttribute('data-color', themeBoxStyle[themeKey].color);
      expect(ThemeColorPickers[1]).toHaveAttribute('data-color', themeBoxStyle[themeKey].bg);
    })
  })

});
