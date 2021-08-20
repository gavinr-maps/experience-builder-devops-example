import { React, ReactRedux, IMLayoutJson, IMState } from 'jimu-core';
import { searchUtils } from 'jimu-layouts/layout-runtime';
const { useMemo } = React;
const { useSelector } = ReactRedux;
/**
 *  Get widget ids from `layout`
 * @param layout
 */
export const getWidgetIdsFromLayout = (layout: IMLayoutJson): string[] => {
  const order = getVisibleOrderFromLayout(layout)
  return order.map(itemId => layout.content?.[itemId]?.widgetId);
}

/**
 *  Get visible orders from `layout`
 * @param layout
 */
export const getVisibleOrderFromLayout = (layout: IMLayoutJson): string[] => {
  const order = layout.order && layout.order.asMutable() || [];
  let layoutItems = order.map(itemId => layout.content?.[itemId]);
  layoutItems = layoutItems.filter(layoutItem => (layoutItem && !layoutItem.isPending));
  return layoutItems.map(layoutItem => layoutItem?.id)
}

/**
 * Get widget ids from `layout` by passing widegtId and widget layout name as params
 * @param widgetId The id of a exb widget
 * @param layoutName The layout name of a widget layout
 */
export const useWidgetIdsOfControllerLayout = (widgetId: string, layoutName: string): string[] => {
  const layout = useWidgetLayout(widgetId, layoutName);
  return useMemo(() => getWidgetIdsFromLayout(layout), [layout]);
}

/**
 * Get layout json info by passing widegtId and widget layout name as params
 * @param widgetId The id of a exb widget
 * @param layoutName The layout name of a widget layout
 */
export const useWidgetLayout = (widgetId: string, layoutName: string): IMLayoutJson => {
  return useSelector((state: IMState) => {
    const isBuilder = state.appContext.isBuilder;
    state = isBuilder ? state.appStateInBuilder : state;
    const layouts = state.appConfig.widgets?.[widgetId]?.layouts;
    const layoutId = searchUtils.findLayoutId(layouts[layoutName], state.browserSizeMode, state.appConfig.mainSizeMode);
    return state.appConfig.layouts?.[layoutId]
  });
}
