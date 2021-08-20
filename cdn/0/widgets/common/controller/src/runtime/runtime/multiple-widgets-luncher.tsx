import { React, Immutable, classNames } from 'jimu-core';
import { IMSizeMap, DisplayType } from '../../config';
import { ControlPosition, FloatingPanel } from 'jimu-ui';
import { useFigureOutLayouts, useGetWidgetTitle } from '../common/utils';
import { WidgetRenderer } from './widget-renderer';
import { OpenedWidgetInfo } from './runtime';
const { useState, useMemo } = React;

export const defaultSize = { width: 300, height: 300 };

export interface MultipleWidgetsLuncherProps {
  mode: DisplayType;
  start: ControlPosition;
  spaceX: number;
  spaceY: number;
  sizes: IMSizeMap;
  widgetIds?: string[];
  openedWidgets: OpenedWidgetInfo[];
  onClose?: (id?: string) => any;
  forbidden?: ClientRect;
}

const getSizes = (widgetIds: string[], propSizes: IMSizeMap) => {
  let sizes = Immutable({}) as IMSizeMap;
  widgetIds.forEach(id => {
    sizes = sizes.set(id, propSizes[id] || defaultSize);
  });
  return sizes;
}

export const MultipleWidgetsLuncher = (props: MultipleWidgetsLuncherProps) => {
  const { mode, start, spaceX, spaceY, sizes: propSizes, widgetIds, openedWidgets, onClose, forbidden } = props;

  const [sizeMap, setSizeMap] = useState<IMSizeMap>(() => getSizes(widgetIds, propSizes));

  const getTitle = useGetWidgetTitle();

  const handleClose = (widgetId: string, evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    onClose?.(widgetId);
  }

  const onResizeing = (widgetId: string, _size) => {
    setSizeMap(sizeMap.set(widgetId, _size));
  }

  const sizes = useMemo(() => {
    const ids = openedWidgets?.map(e => e.id) ?? [];
    return ids.map(id => sizeMap[id]);
  }, [sizeMap, openedWidgets]);

  const anchors = useFigureOutLayouts(mode, sizes, start, spaceX, spaceY, forbidden);

  return <React.Fragment>
    {openedWidgets.map((info, idx) => {
      const { id, opening } = info;
      const anchor = anchors[idx];
      if (!anchor) return;
      const size = sizes[idx];
      const title = getTitle(id);

      return <FloatingPanel
        key={id}
        headerTitle={title}
        defaultPosition={anchor}
        defaultSize={size}
        className={classNames({ 'd-none': !opening }, 'rrw-controller__multiple-widget-launcher')}
        showHeaderClose={true}
        dragBounds="body"
        onResize={(size) => onResizeing(id, size)}
        onHeaderClose={(evt) => handleClose(id, evt)}>
        <WidgetRenderer widgetId={id}></WidgetRenderer>
      </FloatingPanel>
    })}
  </React.Fragment>
}
