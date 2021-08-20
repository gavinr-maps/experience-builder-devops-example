import { React, ReactRedux, IMState, LayoutItemType, ContainerType, getAppStore } from 'jimu-core';
import { hooks, ControlPosition } from 'jimu-ui';
import { useOpeningWidgets, dispatchOpenWidget, dispatchCloseWidget, useDispatchCloseOpeningWidgets, dispatchOpenWidgets, getListItemLength } from '../common/utils';
import { IMConfig } from '../../config';
import { searchUtils } from 'jimu-layouts/layout-runtime';
import { MobileWidgetLuncher } from './mobile-widget-luncher';
import { SingleWidgetsLuncher } from './single-widget-luncher';
import { MultipleWidgetsLuncher, defaultSize as defaultSizeMultipleWidgets } from './multiple-widgets-luncher';
import { ScrollList, ScrollListRefProps } from '../common/scroll-list';
import { WidgetAvatarCard } from '../common';
import { BASE_LAYOUT_NAME } from '../../common/consts';
import { useWidgetIdsOfControllerLayout } from '../../common/utils';
const { useSelector } = ReactRedux;
const { useEffect, useState, useCallback, useMemo, useRef } = React;

export interface OpenedWidgetInfo {
  opening?: boolean;
  id: string;
}

const defaultWidgetStart: ControlPosition = {
  x: 70,
  y: 70
}

const defaultWidgetSpace = { x: 30, y: 30 };

export interface RuntimeProps {
  id: string;
  config: IMConfig;
  version?: number;
  forbidden?: ClientRect;
}

const getWidgetCardNode = (widgetId: string) => {
  return document && document.querySelector(`.widget-controller .avatar-card[data-widgetid='${widgetId}']`);
}

//If current widget place in map widget, the id of map widget will be passed to the mobile panel
const useContainerMapId = (id: string): string => {
  return useSelector((state: IMState) => {
    const appConfig = state.appConfig;
    const browserSizeMode = state.browserSizeMode;
    const containerId = searchUtils.getParentWidgetIdOfContent(appConfig, id, LayoutItemType.Widget, browserSizeMode);
    const container = appConfig.widgets[containerId];
    return container?.manifest?.name === 'arcgis-map' ? container.id : '';
  });
}
//Check whether current widget is hidden in section view
export const getWhetherWidgetVisible = (state: IMState, id: string) => {
  const appConfig = state.appConfig;
  const info = searchUtils.getContentContainerInfo(appConfig, id, LayoutItemType.Widget, state.browserSizeMode);
  const activeViews = Object.values(state.appRuntimeInfo.sectionNavInfos || appConfig.sections || {}).map(i => i.currentViewId || (i.views || [])[0]);
  const visible = (info || {}).type === ContainerType.View ? activeViews.includes(info.id) : true;
  return visible;
};
const useWhetherWidgetVisible = (id: string): boolean => {
  return useSelector((state: IMState) => getWhetherWidgetVisible(state, id));
}

export const Runtime = (props: RuntimeProps) => {
  const { id, config, version, forbidden } = props;

  const onlyOpenOne = config.behavior?.onlyOpenOne;
  const openStarts = config.behavior?.openStarts as any;
  const size = config.behavior?.size;
  const vertical = config.behavior?.vertical;
  const displayType = config.behavior?.displayType;
  const card = config?.appearance?.card;

  const visible = useWhetherWidgetVisible(id);
  const containerMapId = useContainerMapId(id);
  const isInBuilder = useSelector((state: IMState) => state.appContext.isInBuilder);
  const mobile = hooks.useCheckSmallBrowserSzieMode();
  const currentPageId = useSelector((state: IMState) => state.appRuntimeInfo.currentPageId);
  const isRTL = getAppStore()?.getState()?.appContext?.isRTL;

  const scrollListRef = useRef<ScrollListRefProps>();
  // Get all the widgets contained in the controller
  const widgetIds = useWidgetIdsOfControllerLayout(id, BASE_LAYOUT_NAME);
  //Get all open state widgets in controller
  const openingWidgets = useOpeningWidgets(id, BASE_LAYOUT_NAME);
  //The method to close all the opening widegts in controller
  const dispatchCloseOpeningWidgets = useDispatchCloseOpeningWidgets(id, BASE_LAYOUT_NAME);
  //DOM node used to locate the floating panel in the controller(Only for `onlyOpenOne`)
  const [reference, setReference] = useState<HTMLDivElement>(null);
  //Store all opened widgets (Include what is being opened and what has been opened)
  //For a widget that has been opened, when it is opened again, it will use its position when it is closed
  const [openedWidgets, setOpenedWidgets] = useState<string[]>(openStarts || []);
  const openedWidgetsInfo = useMemo(() => {
    return openedWidgets.map(openedWidget => {
      const opening = openingWidgets.includes(openedWidget);
      return {
        id: openedWidget,
        opening
      }
    });
  }, [openedWidgets, openingWidgets])

  const firstOpeningWidget = openingWidgets?.[0];

  const placement = !vertical ? 'bottom' : 'right-start';

  const openWidget = useCallback((evt: React.MouseEvent<HTMLDivElement>) => {
    const reference = evt.currentTarget;
    const widgetId = evt.currentTarget.dataset?.widgetid;
    if (!widgetId || !reference) return;
    setReference(reference);
    let widgets = openedWidgets;
    if (!openedWidgets.includes(widgetId)) {
      widgets = [...widgets, widgetId];
      setOpenedWidgets(widgets);
    }

    const keepOneOpened = mobile ? true : onlyOpenOne;
    if (keepOneOpened) {
      dispatchCloseOpeningWidgets();
      if (!openingWidgets.includes(widgetId)) {
        dispatchOpenWidget(widgetId);
      }
    } else {
      if (!openingWidgets.includes(widgetId)) {
        dispatchOpenWidget(widgetId);
      } else {
        dispatchCloseWidget(widgetId);
      }
    }
  }, [openedWidgets, openingWidgets, mobile, onlyOpenOne, dispatchCloseOpeningWidgets])

  const closeWidget = (id: string) => {
    if (!id) return;
    dispatchCloseWidget(id);
  }

  const handleOpenAtStartWidgets = hooks.useEventCallback(() => {
    if (isInBuilder || !openStarts?.length) return;
    if (onlyOpenOne) {
      setTimeout(() => {
        const widgetId = openStarts[0];
        const reference = getWidgetCardNode(widgetId) as HTMLDivElement;
        //if the widget dom of openStarts is not render to dom, use the scrollList dom as reference node
        setReference(reference || scrollListRef.current?.ref.current);
        dispatchOpenWidgets(openStarts);
      }, 1000);
    } else {
      dispatchOpenWidgets(openStarts);
    }
  })

  //When widget mounted, trigger open at start widgets
  useEffect(() => {
    handleOpenAtStartWidgets();
  }, [handleOpenAtStartWidgets]);

  //When version changed (it means in builder and related config changed), close opening widgets
  hooks.useUpdateEffect(() => {
    dispatchCloseOpeningWidgets();
    setOpenedWidgets([]);
  }, [version, dispatchCloseOpeningWidgets]);
  //When currentPageId changed, close opening widgets
  hooks.useUpdateEffect(() => {
    dispatchCloseOpeningWidgets();
    setOpenedWidgets([]);
  }, [currentPageId, dispatchCloseOpeningWidgets]);
  //When visible changed, close opening widgets
  hooks.useUpdateEffect(() => {
    if (!visible) {
      dispatchCloseOpeningWidgets();
      setOpenedWidgets([]);
    }
  }, [visible, dispatchCloseOpeningWidgets]);

  //The function to create widget card
  const createItem = useCallback((id: string, className: string) => {
    const active = openingWidgets.includes(id);
    return (
      <WidgetAvatarCard
        {...card as any}
        key={id}
        className={`${className} rrw-controller__layout-item`}
        widgetid={id}
        markerEnabled={false}
        active={active}
        onClick={openWidget}
      />
    );
  }, [card, openingWidgets, openWidget]);

  const itemLength = getListItemLength(config?.appearance?.card as any, config?.appearance?.space);
  const resultMobileLauncher = mobile && (
    <MobileWidgetLuncher
      widgetId={firstOpeningWidget}
      containerMapId={containerMapId}
      openedWidgets={openedWidgetsInfo}
      onClose={closeWidget}
    />
  ) || null;
  const resultSingleLauncher = !mobile && onlyOpenOne && (
    <SingleWidgetsLuncher
      widgetIds={widgetIds}
      sizes={size}
      reference={reference}
      placement={placement}
      openedWidgets={openedWidgetsInfo}
      onClose={closeWidget}
    />
  ) || null;

  const widgetStart = isRTL ? { ...defaultWidgetStart, x: document.body.clientWidth - defaultSizeMultipleWidgets.width - defaultWidgetStart.x } : defaultWidgetStart;
  const widgetSpace = isRTL ? { ...defaultWidgetSpace, x: -defaultWidgetSpace.x } : defaultWidgetSpace;

  const resultMultipleLauncher = !mobile && !onlyOpenOne && (
    <MultipleWidgetsLuncher
      widgetIds={widgetIds}
      sizes={size}
      mode={displayType}
      start={widgetStart}
      spaceX={widgetSpace.x}
      spaceY={widgetSpace.y}
      forbidden={forbidden}
      openedWidgets={openedWidgetsInfo}
      onClose={closeWidget}
    />
  ) || null;

  return (
    <>
      {resultMobileLauncher}
      {resultSingleLauncher}
      {resultMultipleLauncher}
      <ScrollList
        ref={scrollListRef}
        className={'rrw-controller__runtime--scroll-list'}
        vertical={vertical}
        itemLength={itemLength}
        space={config.appearance?.space}
        autoHideArrow
        lists={widgetIds}
        createItem={createItem}
      />
    </>
  );
}
