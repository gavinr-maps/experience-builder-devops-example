import { React, Immutable, classNames } from 'jimu-core';
import { IMSizeMap } from '../../config';
import { Popper, Placement } from 'jimu-ui';
import { useGetWidgetTitle } from '../common/utils';
import { WidgetRenderer } from './widget-renderer';
import { OpenedWidgetInfo } from './runtime';

const MIN_SIZE = { width: 150, height: 120 };
const DEFAULT_SIZE = { width: 300, height: 300 };

export interface SingleWidgetsLuncherProps {
  reference?: HTMLElement;
  placement?: Placement;
  sizes: IMSizeMap;
  widgetIds?: string[];
  openedWidgets: OpenedWidgetInfo[];
  onClose?: (id?: string) => any;
}

const getSizes = (widgetIds: string[], propSizes: IMSizeMap) => {
  let sizes = Immutable({}) as IMSizeMap;
  widgetIds.forEach(id => {
    sizes = sizes.set(id, propSizes[id] || DEFAULT_SIZE);
  });
  return sizes;
}

export const SingleWidgetsLuncher = (props: SingleWidgetsLuncherProps) => {
  const { reference, placement, sizes: propSizes, widgetIds, openedWidgets, onClose } = props;

  const [sizeMap, setSizeMap] = React.useState<IMSizeMap>(() => getSizes(widgetIds, propSizes));

  const onResizeing = (widgetId: string, _size) => {
    setSizeMap(sizeMap.set(widgetId, _size));
  }

  const sizes = React.useMemo(() => {
    const ids = openedWidgets?.map(e => e.id) ?? [];
    return ids.map(id => sizeMap[id]);
  }, [sizeMap, openedWidgets]);

  const getTitle = useGetWidgetTitle();

  const handleClose = (widgetId: string, evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    onClose?.(widgetId);
  }

  return <React.Fragment>
    {openedWidgets.map((info, idx) => {
      const { id, opening } = info;
      const size = sizes[idx];
      const title = getTitle(id);

      return <Popper
        key={id}
        className={classNames({ 'd-none': !opening }, 'rrw-controller__single-widget-launcher')}
        headerTitle={title}
        minSize={MIN_SIZE}
        dragBounds="body"
        defaultSize={size}
        onResize={(size) => onResizeing(id, size)}
        onHeaderClose={evt => handleClose(id, evt)}
        floating={true}
        open={true}
        reference={reference}
        placement={placement}>
        <WidgetRenderer widgetId={id}></WidgetRenderer>
      </Popper>
    })}
  </React.Fragment>
}