import { BaseVersionManager, ThemeButtonType, IMThemeButtonStylesByState, IMThemeButtonVariants } from 'jimu-core';
import { IMConfig } from './config';

export const DEFAULT_CONFIG = {
  behavior: {
    onlyOpenOne: true,
    openStarts: [],
    displayType: 'STACK',
    vertical: false,
    size: {}
  },
  appearance: {
    space: 0,
    advanced: false,
    card: {
      showLabel: false,
      labelGrowth: 10,
      avatar: {
        type: 'primary',
        size: 'default',
        shape: 'circle'
      }
    }
  }
}

const mapOldConfigSize = (oldSize: string) => {
  if (oldSize === 'SMALL') return 'sm';
  if (oldSize === 'MEDIUM') return 'default';
  if (oldSize === 'LARGE') return 'lg';
  return oldSize;
}

const getThemeButtonVariant = (variants: IMThemeButtonVariants, type: ThemeButtonType = 'primary'): IMThemeButtonStylesByState => {
  return variants?.[type];
}

class VersionManager extends BaseVersionManager {
  versions = [{
    version: '1.0.0',
    description: 'Version manager for release 1.0.0',
    upgrader: (oldConfig) => {
      if (!oldConfig) return DEFAULT_CONFIG;

      if (!oldConfig.behavior || !oldConfig.appearance) {
        let newConfig: IMConfig = oldConfig;

        if (!oldConfig.behavior) {
          newConfig = newConfig.setIn(['behavior', 'openStarts'], []);
          newConfig = newConfig.setIn(['behavior', 'onlyOpenOne'], oldConfig.onlyOpenOne);
          newConfig = newConfig.setIn(['behavior', 'displayType'], oldConfig.displayType);
          newConfig = newConfig.setIn(['behavior', 'vertical'], oldConfig.vertical);
          newConfig = newConfig.setIn(['behavior', 'size'], oldConfig.size);
          newConfig = (newConfig as any).without(['onlyOpenOne', 'displayType', 'size']);
        }
        if (!oldConfig.appearance) {
          newConfig = newConfig.setIn(['appearance', 'advanced'], false);

          if (!oldConfig.vertical) {
            newConfig = newConfig.setIn(['appearance', 'space'], 0);
            newConfig = newConfig.setIn(['appearance', 'card', 'labelGrowth'], oldConfig.space);
          } else {
            newConfig = newConfig.setIn(['appearance', 'space'], oldConfig.space);
          }

          newConfig = newConfig.setIn(['appearance', 'card', 'showLabel'], oldConfig.showLabel);
          newConfig = newConfig.setIn(['appearance', 'card', 'avatar', 'size'], mapOldConfigSize(oldConfig.iconSize));
          newConfig = newConfig.setIn(['appearance', 'card', 'avatar', 'shape'], oldConfig.iconStyle);
          newConfig = newConfig.setIn(['appearance', 'card', 'avatar', 'type'], 'primary');
          newConfig = (newConfig as any).without(['space', 'showLabel', 'iconSize', 'iconStyle', 'vertical']);
        }
        return newConfig;
      } else {
        return oldConfig;
      }
    }
  }, {
    version: '1.1.0',
    description: 'Version manager for release 1.1.0',
    upgrader: (oldConfig) => {
      if (!oldConfig) return DEFAULT_CONFIG;
      let card = oldConfig?.appearance?.card;
      const variants = card?.variants;
      const type = card?.avatar?.type;
      let newConfig: IMConfig = oldConfig;
      if(variants) {
        const variant = getThemeButtonVariant(variants, type);
        card = card?.set('variant', variant).without('variants');
        newConfig = newConfig.setIn(['appearance', 'card'], card);
      }
      return newConfig;
    }
  }]
}

export const versionManager = new VersionManager();