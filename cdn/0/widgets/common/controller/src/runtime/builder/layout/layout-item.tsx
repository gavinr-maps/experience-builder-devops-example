import { React, IMLayoutItemJson, classNames } from 'jimu-core';
import { withRnd } from 'jimu-layouts/layout-builder';
import { WidgetAvatarCardProps, WidgetAvatarCard } from '../../common';

const WidgetRndAvatarCard = withRnd(false)(WidgetAvatarCard as any);

export interface ControllerLayoutItemProps extends Omit<WidgetAvatarCardProps, 'onDragStart' | 'onDragEnd' | 'onMarkerClick'> {
  draggable?: boolean;
  layoutId: string;
  layoutItem: IMLayoutItemJson;
  layoutItemId: string;
  removeWidget: (widgetId: string) => void;
}

export const LayoutItem = (props: ControllerLayoutItemProps) => {
  const {
    className,
    draggable,
    layoutId,
    layoutItem,
    onClick,
    label,
    showLabel,
    labelGrowth,
    markerEnabled,
    avatar,
    active,
    removeWidget
  } = props;

  return (
    <WidgetRndAvatarCard
      className={classNames(className, 'brw-controller__layout-item')}
      layoutId={layoutId}
      layoutItem={layoutItem}
      widgetid={layoutItem.widgetId}
      layoutItemId={layoutItem.id}
      label={label}
      markerEnabled={markerEnabled}
      showLabel={showLabel}
      labelGrowth={labelGrowth}
      avatar={avatar}
      active={active}
      editDraggable={draggable}
      useDragHandler={true}
      onClick={onClick as any}
      onMarkerClick={() => removeWidget(layoutItem.widgetId)}
    />
  );
}