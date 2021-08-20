import { ImmutableObject } from 'seamless-immutable';
import { AvatarCardProps } from './runtime/common';
import { ImmutableArray, ThemeButtonStylesByState, Size } from 'jimu-core';

export enum DisplayType {
  Stack = 'STACK',
  SideBySide = 'SIDEBYSIDE'
}

export type WidgetAvatarCard = Pick<AvatarCardProps, 'showLabel' | 'labelGrowth' | 'avatar'> & {
  variant?: ThemeButtonStylesByState;
}

export interface SizeMap {
  [x: string]: Size;
}

export type IMSizeMap = ImmutableObject<SizeMap>;

export interface Config {
  behavior: {
    onlyOpenOne: boolean;
    openStarts: ImmutableArray<string>;
    displayType: DisplayType;
    vertical: boolean;
    size: SizeMap;
  };
  appearance: {
    space: number;
    advanced: boolean;
    card: WidgetAvatarCard;
  }
}

export type IMConfig = ImmutableObject<Config>;