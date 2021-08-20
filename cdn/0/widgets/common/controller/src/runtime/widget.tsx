/** @jsx jsx */
import { React, jsx, css, AllWidgetProps, IMState, AppMode, polished, ReactRedux, IMThemeButtonStylesByState } from 'jimu-core';
import { IMConfig } from '../config';
import { Runtime } from './runtime/runtime';
import { MIN_WIDGET_WIDTH, MIN_WIDGET_HEIGHT } from '../common/consts';
import { styleUtils, hooks } from 'jimu-ui';
import { versionManager } from '../version-manager';
const { useSelector } = ReactRedux;
const { useState, useMemo, useRef } = React;

export type ControllerWidgetProps = AllWidgetProps<IMConfig>;

const useStyle = (vertical) => {
  return useMemo(() => {
    return css`
      overflow: hidden;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        min-width: ${!vertical ? polished.rem(MIN_WIDGET_WIDTH) : polished.rem(MIN_WIDGET_HEIGHT)};
        min-height: ${vertical ? polished.rem(MIN_WIDGET_WIDTH) : polished.rem(MIN_WIDGET_HEIGHT)};
      }
      ${vertical && css`
      .roll-list {
        .content {
          width: 100%;
        }
      }
      .layout-item-list {
        &.icon-list {
          width: 100%;
        }
      }
        .layout-item {
          width: 100%;
        }
        .avatar-card {
            width: 100% !important;
          }
      `};
    `;
  }, [vertical]);
}

const useAdvancedStyle = (variant: IMThemeButtonStylesByState, advanced: boolean) => {
  const regular = variant?.default;
  const active = variant?.active;
  const hover = variant?.hover;

  return useMemo(() => {
    if (!advanced) return css``;
    return css`
      .avatar-card:not(.add-widget-btn) {
        ${regular && css`
          > .avatar {
            > .avatar-button {
              background-color: ${regular.bg};
              border-color: ${regular.bg};
            }
          }
          > .avatar-label {
            color: ${regular.color};
            font-style: ${ regular?.italic ? 'italic' : 'normal'};
            font-weight: ${ regular?.bold ? 'bold' : 'normal'};
            text-decoration: ${styleUtils.toCSSTextUnderLine({ underline: regular.underline, strike: regular.strike })};
          }
        `}
        ${hover && css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${hover.bg};
                border-color: ${hover.bg};
              }
            }
            > .avatar-label {
              color: ${hover.color};
              font-style: ${ hover?.italic ? 'italic' : 'normal'};
              font-weight: ${ hover?.bold ? 'bold' : 'normal'};
              text-decoration: ${styleUtils.toCSSTextUnderLine({ underline: hover.underline, strike: hover.strike })};
            }
          }
        `}
        ${active && css`
            > .avatar {
              > .avatar-button {
                &:not(:disabled):not(.disabled):active,
                &:not(:disabled):not(.disabled).active,
                &[aria-expanded="true"] {
                  background-color: ${active.bg};
                  border-color: ${active.bg};
                }
              }
            }
            > .avatar-label {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active {
                color: ${active.color};
                font-style: ${ active?.italic ? 'italic' : 'normal'};
                font-weight: ${ active?.bold ? 'bold' : 'normal'};
                text-decoration: ${styleUtils.toCSSTextUnderLine({ underline: active.underline, strike: active.strike })};
              }
            }
        `}
      }
    `;
  }, [advanced, regular, active, hover])
}

const ControllerWidget = (props: ControllerWidgetProps) => {
  const { builderSupportModules, id, config, layoutId, layoutItemId } = props;
  const onlyOpenOne = config.behavior?.onlyOpenOne;
  const displayType = config.behavior?.displayType;
  const vertical = config?.behavior?.vertical;
  const advanced = config?.appearance.advanced;
  const variant = config?.appearance?.card.variant;

  const isInBuilder = useSelector((state: IMState) => state.appContext.isInBuilder);
  const appMode = useSelector((state: IMState) => state.appRuntimeInfo.appMode);
  const browserSizeMode = useSelector((state: IMState) => state.browserSizeMode);

  const bbox = useSelector((state: IMState) => {
    let bbox = null;
    if (isInBuilder) {
      bbox = state.appConfig.layouts?.[layoutId]?.content?.[layoutItemId]?.bbox;
    }
    return bbox;
  });

  const isBuilder = isInBuilder && appMode !== AppMode.Run;
  const Builder = isBuilder && builderSupportModules.widgetModules.Builder;
  const [version, setVersion] = useState(0);
  const [box, setBox] = useState(null);
  const ref = useRef<HTMLDivElement>(null);

  hooks.useUpdateEffect(() => {
    const node = ref.current
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setBox(rect);
  }, [bbox]);

  hooks.useUpdateEffect(() => {
    setVersion(v => v + 1);
  }, [onlyOpenOne, displayType, appMode, browserSizeMode, bbox]);

  const style = useStyle(vertical);
  const advanStyle = useAdvancedStyle(variant, advanced);
  return <div className="widget-controller jimu-widget shadow rw-controller" css={[style, advanStyle]} ref={ref}>
    <div className="controller-container">
      {!isBuilder && <Runtime id={id} version={version} config={config} forbidden={box}></Runtime>}
      {isBuilder && Builder && <Builder id={id} version={version} config={config}></Builder>}
    </div>
  </div>
}

ControllerWidget.versionManager = versionManager;

export default ControllerWidget;