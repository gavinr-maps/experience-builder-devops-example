import { WidgetType, LayoutItemType, LayoutItemConstructorProps, IMLayoutJson, IMState, ReactRedux } from 'jimu-core';
import { utils } from 'jimu-layouts/layout-runtime';
import { getAppConfigAction } from 'jimu-for-builder';
import { addItemToLayout } from 'jimu-layouts/layout-builder';
import { useWidgetLayouts } from '../common/utils';
import { useWidgetLayout } from '../../common/utils';

export const isLayoutItemAcceptedForController = (item: LayoutItemConstructorProps): boolean => {
  const itemType = item?.itemType;
  const type = item?.manifest?.widgetType;
  const name = item?.manifest?.name;
  return itemType !== LayoutItemType.Section && type !== WidgetType.Layout && name !== 'controller' && !utils.isWidgetPlaceholder(utils.getAppConfig(), item);
}

export const calInsertPositionForColumn = (boundingRect: ClientRect,
  itemRect: Partial<ClientRect>,
  childRects: Array<ClientRect & { id: string }>): { insertY: number, refId: string } => {
  const centerY = itemRect.top + itemRect.height / 2;
  let result, refId;
  let found = false;
  childRects.some((rect, i) => {
    const rectY = rect.top + rect.height / 2;
    if (rectY > centerY) {
      if (i === 0) { // insert before the first item
        result = rect.top / 2;
      } else { // insert between this and previous one
        const previousItem = childRects[i - 1];
        result = (rect.top + previousItem.top + previousItem.height) / 2;
      }
      found = true;
      refId = rect.id;
    }
    return found;
  });
  if (!found) { // insert after the last one
    const lastItem = childRects[childRects.length - 1];
    result = (lastItem.top + lastItem.height + boundingRect.height) / 2;
  }
  return {
    insertY: result,
    refId
  };
}

export const calInsertPositionForRow = (boundingRect: ClientRect,
  itemRect: Partial<ClientRect>,
  childRects: Array<ClientRect & { id: string }>): { insertX: number, refId: string } => {
  const centerX = itemRect.left + itemRect.width / 2;
  let result, refId;
  let found = false;
  childRects.some((rect, i) => {
    const rectX = rect.left + rect.width / 2;
    if (rectX > centerX) {
      if (i === 0) { // insert before the first item
        result = rect.left / 2;
      } else { // insert between this and previous one
        const previousItem = childRects[i - 1];
        result = (rect.left + previousItem.left + previousItem.width) / 2;
      }
      found = true;
      refId = rect.id;
    }
    return found;
  });
  if (!found) { // insert after the last one
    const lastItem = childRects[childRects.length - 1];
    result = (lastItem.left + lastItem.width + boundingRect.width) / 2;
  }
  return {
    insertX: result,
    refId
  };
}

export const insertWidgetToLayout = (
  layout: IMLayoutJson,
  itemProps: LayoutItemConstructorProps,
  containerRect: ClientRect,
  itemRect: ClientRect,
  insertIndex: number,
  callback?: (appConfigAction) => void
) => {

  const layoutInfo = {
    layoutId: layout.id,
  };

  let appConfigAction = getAppConfigAction();
  addItemToLayout(appConfigAction.appConfig, itemProps, layoutInfo, containerRect, itemRect, insertIndex || 0)
    .then(((result) => {
      appConfigAction = getAppConfigAction(result.updatedAppConfig);
      callback?.(appConfigAction);
      appConfigAction.exec();
    }));
}

export const useSyncWidgetsToOtherSizeMode = (id: string, layoutName: string) => {
  const layouts = useWidgetLayouts(id, layoutName);
  const layout = useWidgetLayout(id, layoutName);
  const sizeMode = ReactRedux.useSelector((state: IMState) => state.browserSizeMode);

  return (appConfigAction) => {
    console.log('SyncWidgets');
    Object.keys(layouts).forEach(sm => {
      if (sizeMode !== sm) {
        appConfigAction.copyLayoutContent(layout.id, layouts[sm]);
      }
    })
  }
}

export const useInsertSyncWidgetToLayout = (widgetId: string, layoutName: string) => {
  const syncWidgetsToOtherSizeMode = useSyncWidgetsToOtherSizeMode(widgetId, layoutName);
  return (layout: IMLayoutJson, item: LayoutItemConstructorProps, container: ClientRect, itemRect: ClientRect, index: number) => {
    return  insertWidgetToLayout(layout, item, container, itemRect, index, syncWidgetsToOtherSizeMode);
  }
}

export const useDeleteSyncWidgetFromLayout = (widgetId: string, layoutName: string) => {
  const syncWidgetsToOtherSizeMode = useSyncWidgetsToOtherSizeMode(widgetId, layoutName);

  return (widgetId: string) =>  {
    const appConfigAction = getAppConfigAction();
    appConfigAction.removeWidget(widgetId);
    syncWidgetsToOtherSizeMode(appConfigAction);
    appConfigAction.exec();
  }
}



