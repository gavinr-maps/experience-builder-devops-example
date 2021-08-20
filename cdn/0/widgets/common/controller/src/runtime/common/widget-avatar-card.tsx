import { React, IMState, ReactRedux } from 'jimu-core';
import { AvatarCard, AvatarCardProps } from './avatar-card';
import { Loading } from 'jimu-ui';
const MARK_ICON = require('jimu-ui/lib/icons/close-12.svg');

export interface WidgetAvatarCardProps extends Omit<AvatarCardProps, 'onClick'> {
  widgetid?: string;
  markerEnabled?: boolean;
  onMarkerClick?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const WidgetAvatarCard = (props: WidgetAvatarCardProps) => {
  const {
    markerEnabled,
    onMarkerClick,
    widgetid,
    showLabel,
    labelGrowth,
    avatar,
    onClick,
    active,
    editDraggable,
    className
  } = props;

  const widgetJson = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets?.[widgetid])

  const result = widgetJson ? (
    <AvatarCard
      className={`rw-controller__widget-avatar-card ${className}`}
      data-widgetid={widgetid}
      showLabel={showLabel}
      labelGrowth={labelGrowth}
      avatar={avatar}
      label={widgetJson.label}
      icon={widgetJson.icon as any}
      autoFlip={widgetJson?.manifest?.properties?.flipIcon}
      marker={markerEnabled ? MARK_ICON : ''}
      active={active}
      editDraggable={editDraggable}
      onMarkerClick={onMarkerClick}
      onClick={onClick}
    />
  ) : <Loading />;

  return result;
}



