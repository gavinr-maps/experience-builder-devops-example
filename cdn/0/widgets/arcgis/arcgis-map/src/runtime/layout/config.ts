import { React } from 'jimu-core'

export interface LayoutJson {
  elements: { [name: string]: (GroupJson | ToolJson) }
  layout: {[name: string]: LayoutItemJson}
  mobileResponsiveStrategy?: {
    [stage: string]: HiddenElementNames
  }
  lockToolNames?: string[]
}

export type HiddenElementNames = string[]

export interface LayoutItemJson {
  children: string[]
  position?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}

export interface GroupJson {
  type: 'GROUP'
  groupName?: string
  direction: 'vertical' | 'horizontal'
  isResponsive?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface ToolJson {
  type: 'TOOL'
  toolName: string
  isOnlyExpanded: boolean
  isShowIconTitle: boolean
  panelPlacement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  className?: string
  style?: React.CSSProperties
}
