/** @jsx jsx */
import { React, css, jsx, WidgetManager, ErrorBoundary, WidgetState, classNames, getAppStore, ReactRedux, IMState } from 'jimu-core';
import { Loading } from 'jimu-ui';
import { dispatchActiveWidget } from '../common/utils';
const { useEffect } = React;

export interface WidgetRendererProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  widgetId?: string;
  canCrossLayoutBoundary?: boolean;
}

const useStyle = (canCrossLayoutBoundary?: boolean) => {

  return React.useMemo(() => {
    return css`
      overflow: ${canCrossLayoutBoundary ? 'visible' : 'hidden'};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
  `;
  }, [canCrossLayoutBoundary])
}

export function WidgetRenderer (props: WidgetRendererProps)  {
  const { widgetId, canCrossLayoutBoundary, className, ...others } = props;

  const isClassLoaded = ReactRedux.useSelector((state: IMState) => state.widgetsRuntimeInfo?.[widgetId]?.isClassLoaded)

  useEffect(() => {
    const isClassLoaded = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded
    if (widgetId && !isClassLoaded) {
      WidgetManager.getInstance().loadWidgetClass(widgetId);
    }
  }, [widgetId]);

  const WidgetClass = React.useMemo(() => {
    if(!isClassLoaded) return
    return  WidgetManager.getInstance().getWidgetClass(widgetId)
  }, [widgetId, isClassLoaded])

  const handleMouseDown = React.useCallback(() => {
    if (window.jimuConfig.isBuilder) {
      return;
    }
    const isActive = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.state === WidgetState.Active

    if (isActive) {
      return;
    }
    dispatchActiveWidget(widgetId);
  }, [widgetId])

  const classes = classNames('widget-renderer  w-100 h-100', className)
  const style = useStyle(canCrossLayoutBoundary);

  return <div
    css={style}
    className={classes}
    onMouseDownCapture={handleMouseDown}
    {...others}>
    <div className="widget-content p-1">
      {WidgetClass &&
        <ErrorBoundary>
          <WidgetClass widgetId={widgetId} />
        </ErrorBoundary>}
      {!WidgetClass && <Loading />}
    </div>
  </div>
}