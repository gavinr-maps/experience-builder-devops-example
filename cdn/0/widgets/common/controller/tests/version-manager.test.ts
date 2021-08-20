import { Immutable } from 'jimu-core';
import { versionManager, DEFAULT_CONFIG } from '../src/version-manager';

let upgrader = null;

describe('Test controller version-manager for version 1.0.0', () => {
  beforeAll(() => {
    upgrader = versionManager.versions?.filter(function (version) {
      return version.version === '1.0.0';
    })[0]?.upgrader;
  });

  it('should return default config if oldConfig is undefined', () => {
    const newConfig = upgrader(null);
    expect(newConfig).toEqual(DEFAULT_CONFIG);
  });

  it('should return current config when vertical of old config is false ', () => {
    const oldConfig = Immutable({
      onlyOpenOne: false,
      displayType: 'SIDEBYSIDE',
      vertical: false,
      iconStyle: 'rectangle',
      showLabel: true,
      space: 20,
      iconSize: 'MEDIUM',
      size: {
        widget: {
          width: 100,
          height: 100
        }
      }
    })
    const newConfig = upgrader(oldConfig);
    expect(newConfig).toEqual(Immutable({
      behavior: {
        onlyOpenOne: false,
        openStarts: [],
        displayType: 'SIDEBYSIDE',
        vertical: false,
        size: {
          widget: {
            width: 100,
            height: 100
          }
        }
      },
      appearance: {
        space: 0,
        advanced: false,
        card: {
          showLabel: true,
          labelGrowth: 20,
          avatar: {
            type: 'primary',
            size: 'default',
            shape: 'rectangle'
          }
        }
      }
    }));
  });

  it('should return current config when vertical of old config is true ', () => {
    const oldConfig = Immutable({
      onlyOpenOne: false,
      displayType: 'SIDEBYSIDE',
      vertical: true,
      iconStyle: 'rectangle',
      showLabel: true,
      space: 20,
      iconSize: 'MEDIUM',
      size: {
        widget: {
          width: 100,
          height: 100
        }
      }
    })
    const newConfig = upgrader(oldConfig);
    expect(newConfig).toEqual(Immutable({
      behavior: {
        onlyOpenOne: false,
        openStarts: [],
        displayType: 'SIDEBYSIDE',
        vertical: true,
        size: {
          widget: {
            width: 100,
            height: 100
          }
        }
      },
      appearance: {
        space: 20,
        advanced: false,
        card: {
          showLabel: true,
          avatar: {
            type: 'primary',
            size: 'default',
            shape: 'rectangle'
          }
        }
      }
    }));
  });

});