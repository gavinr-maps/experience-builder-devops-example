
import { React, Size, ReactRedux, IMState, appActions, getAppStore, WidgetState, IMSizeModeLayoutJson, LayoutItemType } from 'jimu-core';
import { ControlPosition, hooks } from 'jimu-ui';
import { DisplayType } from '../../config';
const { useState, useEffect, useMemo, useRef } = React;
const { useSelector } = ReactRedux;
import { searchUtils } from 'jimu-layouts/layout-runtime';
import { getItemLength, AvatarCardProps } from './avatar-card';
import { useWidgetIdsOfControllerLayout } from '../../common/utils';

const getBodyRect = (): ClientRect => {
  return document.body.getBoundingClientRect();
}

const isHorizontalIntersect = (rect: ClientRect, ref: ClientRect) => {
  return (rect.left < ref.left && rect.right > ref.left) ||
    (rect.left < ref.right && rect.right > ref.right) ||
    (rect.left > ref.left && rect.right < ref.right) ||
    (rect.left < ref.left && rect.right > ref.right);
}

const isVerticalIntersect = (rect: ClientRect, ref: ClientRect) => {
  return (rect.top < ref.top && rect.bottom > ref.top) ||
    (rect.top < ref.bottom && rect.bottom > ref.bottom) ||
    (rect.top > ref.top && rect.bottom < ref.bottom) ||
    (rect.top < ref.top && rect.bottom > ref.bottom);
}

/**
 * Check if two rect is intersect or not
 * @param rect
 * @param ref
 */
export const isIntersect = (rect: ClientRect, ref: ClientRect): boolean => {
  if (!rect || !ref) return false;
  return isHorizontalIntersect(rect, ref) && isVerticalIntersect(rect, ref);
}

const isHorizontalOutBoundary = (rect: ClientRect, boundary: ClientRect) => {
  return rect.right >= boundary.right ||
    rect.left <= boundary.left
}

const isVerticalOutBoundary = (rect: ClientRect, boundary: ClientRect) => {
  return rect.bottom >= boundary.bottom ||
    rect.top <= boundary.top;
}

/**
 * Check if a rect is out of boundary rect
 * @param rect
 * @param boundary
 */
const isOutBoundary = (rect: ClientRect, boundary: ClientRect) => {
  if (!rect || !boundary) return false;
  return isHorizontalOutBoundary(rect, boundary) || isVerticalOutBoundary(rect, boundary);
}

//The maximum number to recursively prevent intersect or cross boundary
const MaxNumberOfCallbacks = 7;

/**
 * Layout multiple floating panels
 * @param mode
 * @param sizes
 * @param start
 * @param spaceX
 * @param spaceY
 * @param forbidden
 */
export const useFigureOutLayouts = (mode: DisplayType, sizes: Size[], start: ControlPosition, spaceX: number, spaceY: number, forbidden?: ClientRect): ControlPosition[] => {
  const [boundary, setBoundary] = useState<ClientRect>(() => getBodyRect());
  const [anchors, setAnchors] = useState<ControlPosition[]>([start]);
  const callbackNumRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const rect = getBodyRect();
      setBoundary(rect);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  //prevent intersect or cross boundary
  const determineRect = hooks.useEventCallback((undetermine: ClientRect): ClientRect => {
    callbackNumRef.current++;
    if (callbackNumRef.current > MaxNumberOfCallbacks) {
      console.warn(`Number of cycles: ${callbackNumRef.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`);
      return undetermine;
    }
    // const intersect = isIntersect(undetermine, forbidden);
    const outBoundary = isOutBoundary(undetermine, boundary);
    if (!outBoundary) {
      return undetermine;
    }
    const { width, height } = undetermine;
    let { left, top, right, bottom } = undetermine;
    // if (intersect) {
    //   left = forbidden.right + spaceX;
    //   right = left + width;
    // }
    if (outBoundary) {
      const horOutBoundary = isHorizontalOutBoundary({ left, top, right, bottom, width, height }, boundary);
      const verOutBoundary = isVerticalOutBoundary({ left, top, right, bottom, width, height }, boundary);
      if (horOutBoundary) {
        left = mode === DisplayType.SideBySide ? start.x : boundary.right - width;
      }
      if (!verOutBoundary && mode === DisplayType.SideBySide) {
        top += spaceY;
      }
      right = left + width;
      bottom = top + height;
    }
    return determineRect({ left, top, right, bottom, width, height });
  });


  useEffect(() => {
    const anchors = [];
    let prevSize: Size = { width: 0, height: 0 };

    sizes.forEach((size, idx) => {
      const anchor = idx !== 0 ? anchors[idx - 1] : start;
      let { x, y } = anchor;
      if (mode === DisplayType.SideBySide) {
        const { width } = prevSize;
        x += width;
        x += idx !== 0 ? spaceX : 0;
      } else if (mode === DisplayType.Stack) {
        x += idx !== 0 ? spaceX : 0;
        y += idx !== 0 ? spaceY : 0;
      }

      const rect = { left: x, top: y, right: x + size.width, bottom: y + size.height, width: size.width, height: size.height };
      const { left, top } = determineRect(rect);
      if (callbackNumRef.current > MaxNumberOfCallbacks) {
        x = anchor.x;
        y = anchor.y;
      } else {
        x = left;
        y = top;
      }
      callbackNumRef.current = 0;
      anchors.push({ x, y });
      prevSize = size;
    });

    setAnchors(anchors);

  }, [mode, start, spaceX, spaceY, boundary.width, boundary.height, determineRect, sizes])


  return anchors;
}
/**
 * Check whether controller widget or controlled widgets by controller widget is selected
 * @param controllerId
 */
export const useControlledWidgetsSelected = (controllerId: string): boolean => {
  return ReactRedux.useSelector((state: IMState) => {
    const selection = state.appRuntimeInfo.selection;
    const appConfig = state.appConfig;
    let selected = false;
    if (selection && appConfig.layouts[selection.layoutId]) {
      const layoutItem = appConfig.layouts[selection.layoutId].content[selection.layoutItemId];
      const widgetId = layoutItem && layoutItem.widgetId;
      let controlledWidgets = [];
      if (widgetId) {
        controlledWidgets = searchUtils.getChildrenContents(appConfig, widgetId, LayoutItemType.Widget, false);
      }
      let widgetIds = [widgetId, controllerId];
      if (controlledWidgets) {
        widgetIds = widgetIds.concat(controlledWidgets);
      }
      selected = widgetIds.includes(widgetId);
    }
    return selected;
  })
}

/**
 * Return a function to get widget label by widgetId
 */
export const useGetWidgetTitle = () => {
  const widgetJsons = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets);
  return (widgetId) => widgetJsons?.[widgetId]?.label;
}

/**
 * Return widget label by widgetId
 */
export const useWidgetTitle = (widegtId: string) => {
  return ReactRedux.useSelector((state: IMState) => state.appConfig.widgets?.[widegtId]?.label);
}

/**
 * Get size mode layout json info by  passing widegtId and widget layout name as params
 * @param widgetId The id of a exb widget
 * @param layoutName The layout name of a widget layout
 */
export const useWidgetLayouts = (widgetId: string, layoutName: string): IMSizeModeLayoutJson => {
  return useSelector((state: IMState) => state.appConfig.widgets?.[widgetId]?.layouts?.[layoutName]);
}

/**
 * Gep opening widegts in a widegt(e.g. widget controller) by passing widegtId and widget layout name as params
 *
 * Note: React custom hook
 * @param widgetId The id of a exb widget
 * @param layoutName  The layout name of a widget layout
 */
export const useOpeningWidgets = (widgetId: string, layoutName: string): string[] => {
  const widgetsRuntimeInfo = ReactRedux.useSelector((state: IMState) => state.widgetsRuntimeInfo);
  const widgetIds = useWidgetIdsOfControllerLayout(widgetId, layoutName);

  const openingWidgets = useMemo(() => Object.keys(widgetsRuntimeInfo).filter(widgetId => {
    const state = widgetsRuntimeInfo[widgetId]?.state;
    return !!(state === WidgetState.Opened || state === WidgetState.Active);
  }), [widgetsRuntimeInfo]);


  return useMemo(() => widgetIds.filter(widgetId => {
    return openingWidgets.includes(widgetId);
  }), [widgetIds, openingWidgets])
}

/**
 * Dispatch a action to close a group of widegts
 * @param widgetIds The id array of a exb widget
 */
export const dispatchCloseWidgets = (widgetIds: string[]) => {
  const action = appActions.closeWidgets(widgetIds);
  getAppStore().dispatch(action);
}

/**
 * Dispatch a action to close a widget
 * @param widgetId The id of a exb widget
 */
export const dispatchCloseWidget = (widgetId: string) => {
  const action = appActions.closeWidget(widgetId);
  getAppStore().dispatch(action);
}

/**
 * Return a function to Close opening widegts in a widegt(e.g. widget controller)
 *
 * Note: React custom hook
 * @param widgetId The id of a exb widget
 * @param layoutName  The layout name of a widget layout
 */
export const useDispatchCloseOpeningWidgets = (widgetId: string, layoutName: string) => {
  const openingWidgets = useOpeningWidgets(widgetId, layoutName);

  return hooks.useEventCallback(() => dispatchCloseWidgets(openingWidgets));
}

/**
 * Dispatch a action to open a group of widegts
 * @param widgetIds The id array of a exb widget
 */
export const dispatchOpenWidgets = (widgetIds: string[]) => {
  const action = appActions.openWidgets(widgetIds);
  getAppStore().dispatch(action);
}

/**
 * Dispatch a action to open a widget
 * @param widgetId The id of a exb widget
 */
export const dispatchOpenWidget = (widgetId: string) => {
  const action = appActions.openWidget(widgetId);
  getAppStore().dispatch(action);
}

/**
 * Dispatch a action to active a widget
 * @param widgetId The id of a exb widget
 */
export const dispatchActiveWidget = (widgetId: string) => {
  const action = appActions.activateWidget(widgetId);
  getAppStore().dispatch(action);
}

/**
 * Get AvatarCard element length by AvatarCard props and space
 * @param props The props of AvatarCard
 * @param space Spacing between each AvatarCard element
 */
export const getListItemLength = (props: AvatarCardProps, space: number) => {
  const showLabel = props?.showLabel;
  const labelGrowth = props?.labelGrowth;
  const size = props?.avatar.size;
  const shape = props?.avatar.shape;

  const baseLength = getItemLength(size, showLabel, shape);
  return baseLength + space + labelGrowth;
}