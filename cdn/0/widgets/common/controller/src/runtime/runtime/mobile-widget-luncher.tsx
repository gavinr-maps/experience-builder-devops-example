import { React, classNames } from 'jimu-core'
import { MobilePanel } from 'jimu-ui'
import { useWidgetTitle } from '../common/utils'
import { OpenedWidgetInfo } from './runtime'
import { WidgetRenderer } from './widget-renderer'

export interface MobileWidgetLuncherProps {
  widgetId: string
  containerMapId: string
  openedWidgets: OpenedWidgetInfo[]
  onClose?: (id?: string) => any
}

export const MobileWidgetLuncher = (props: MobileWidgetLuncherProps) => {
  const { widgetId, containerMapId, onClose, openedWidgets } = props
  const title = useWidgetTitle(widgetId)

  const handleClose = (evt?: React.MouseEvent<HTMLDivElement>) => {
    evt?.stopPropagation()
    evt?.nativeEvent.stopImmediatePropagation()
    onClose?.(widgetId)
  }

  return (
    <MobilePanel
      className={classNames({ 'd-none': !widgetId })}
      mapWidgetId={containerMapId}
      title={title}
      open={true}
      toggle={handleClose}
    >
      {openedWidgets.map((info) => {
        const { id, opening } = info
        return (
          <WidgetRenderer
            widgetId={id}
            key={id}
            className={classNames({ 'd-none': !opening })}
          ></WidgetRenderer>
        )
      })}
    </MobilePanel>
  )
}
