import { React, ReactRedux, IMState, appActions, getAppStore, Size, Immutable } from 'jimu-core';
import { IMConfig, IMSizeMap } from '../../config';
const { useSelector } = ReactRedux;
const { useEffect, useRef, useState } = React;
import { LayoutList } from './layout/layout-list';
import { Placement } from 'jimu-ui';
import { ScrollListRefProps } from '../common/scroll-list';
import { DummyLayout } from './layout/dummy-layout';
import { BASE_LAYOUT_NAME } from '../../common/consts';
import { useOpeningWidgets, useDispatchCloseOpeningWidgets, dispatchOpenWidget, useControlledWidgetsSelected } from '../common/utils';
import { getAppConfigAction } from 'jimu-for-builder';

export interface BuilderProps {
  id: string;
  config: IMConfig;
  version?: number;
}

export const Builder = (props: BuilderProps) => {
  const { id, config, version } = props;
  const vertical = config?.behavior?.vertical;
  const size = config.behavior?.size;
  const placement: Placement = !vertical ? 'bottom' : 'right-start';

  const widgetsState = useSelector((state: IMState) => state.widgetsState[id]);
  const layoutAbility = widgetsState?.layoutAbility;
  const widgetsStateVersion = widgetsState?.version;
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<ScrollListRefProps>({ hideArrow: true, disablePrevious: true, disableNext: false, scroll: () => { } });
  const { hideArrow, disablePrevious, disableNext, scroll } = scrollRef.current
  //DOM node used to locate the floating panel in the controller(Only for `onlyOpenOne`)
  const [reference, setReference] = useState(null);
  //Get all open state widgets in controller
  const openingWidgets = useOpeningWidgets(id, BASE_LAYOUT_NAME);
  const closeOpeningWidgets = useDispatchCloseOpeningWidgets(id, BASE_LAYOUT_NAME);
  const firstOpeningWidget = openingWidgets?.[0];
  const firstOpeningSize = size?.[firstOpeningWidget];
  //When you click on an area other than the widegt Icon, turn off edit mode
  const handleLayoutListClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (!layoutAbility) return;
    const target = evt.target as HTMLElement;
    const isDroparea = !!(target.classList && target.classList.contains('scroll-list-root'));
    const outBoundary = !rootRef.current?.contains(target);
    if (isDroparea || outBoundary) {
      getAppStore().dispatch(appActions.widgetStatePropChange(id, 'layoutAbility', false));
    }
  }

  useEffect(() => {
    closeOpeningWidgets();
  }, [version, closeOpeningWidgets])

  //When controller or controlled widgets by it is not selected, turn off edit mode
  const selected = useControlledWidgetsSelected(id);
  useEffect(() => {
    if (!selected) {
      getAppStore().dispatch(appActions.widgetStatePropChange(id, 'layoutAbility', false));
    }
  }, [selected, id]);

  //Synchronize the state and method of scroll-list component to toolbar
  useEffect(() => {
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'hideArrow', hideArrow));
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'disablePrevious', disablePrevious));
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'disableNext', disableNext));
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'onArrowClick', scroll));

  }, [hideArrow, disablePrevious, disableNext, scroll, widgetsStateVersion, id]);

  const updateWidgetConfig = (config: IMConfig) => {
    getAppConfigAction().editWidgetConfig(id, config).exec();
  }

  const onWidgetSizeChanged = (widgetId: string, _size: Size) => {
    if (!widgetId) {
      return
    }
    let size = config?.behavior.size || Immutable({}) as IMSizeMap;
    size = size.set(widgetId, _size);
    updateWidgetConfig(config.setIn(['behavior', 'size'], size));
  }

  const handleItemClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    const reference = evt.currentTarget;
    const widgetId = reference.dataset?.widgetid;
    setReference(reference);
    closeOpeningWidgets();
    dispatchOpenWidget(widgetId);
  }

  return <>
    {firstOpeningWidget && <DummyLayout
      reference={reference}
      version={version}
      widgetId={firstOpeningWidget}
      controllerId={id}
      size={firstOpeningSize}
      onClose={closeOpeningWidgets}
      onSizeChange={onWidgetSizeChanged}
      placement={placement} />}
    <LayoutList
      ref={rootRef}
      scrollListRef={scrollRef}
      onClick={handleLayoutListClick}
      vertical={config?.behavior?.vertical}
      widgetId={id}
      onItemClick={handleItemClick}
      itemStyle={config.appearance.card as any}
      draggable={widgetsState?.layoutAbility}
      space={config?.appearance?.space} />
  </>
}