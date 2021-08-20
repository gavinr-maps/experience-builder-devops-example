import { extensionSpec, React, getAppStore, LayoutContextToolProps, appActions, i18n } from 'jimu-core';
import defaultMessage from '../../src/runtime/translations/default';

export default class Next implements extensionSpec.ContextToolExtension {
  index = 3;
  id = 'controller-roll-list-next';
  widgetId: string;

  classes: { [widgetId: string]: React.ComponentClass<unknown> } = {};

  visible(props: LayoutContextToolProps) {
    return true;
  }

  checked(props: LayoutContextToolProps) {
    const widgetId = props.layoutItem.widgetId;
    const widgetState = getAppStore().getState().widgetsState[widgetId];
    return widgetState?.layoutAbility;
  }

  getGroupId() {
    return null;
  }

  getTitle() {
    const widgetId = this.widgetId;
    const intl = i18n.getIntl(widgetId);
    return intl ? intl.formatMessage({ id: 'moveOrRemoveWidget', defaultMessage: defaultMessage['moveOrRemoveWidget'] }) : 'Layout editing';
  }

  getIcon() {
    return require('jimu-ui/lib/icons/tool-edit.svg');
  }

  onClick(props: LayoutContextToolProps) {
    const widgetId = props.layoutItem.widgetId;
    const widgetState = getAppStore().getState().widgetsState[widgetId];
    getAppStore().dispatch(appActions.widgetStatePropChange(widgetId, 'layoutAbility', !widgetState?.layoutAbility));
  }

  getSettingPanel(props: LayoutContextToolProps): React.ComponentClass<unknown> {
    return null;
  }
}




