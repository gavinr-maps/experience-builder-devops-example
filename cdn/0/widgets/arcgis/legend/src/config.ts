import { ImmutableObject } from 'jimu-core'
import { BackgroundStyle } from 'jimu-ui'

export interface Style{
  useCustom: boolean
  background: BackgroundStyle
  fontColor: string
}

export interface Config{
  showBaseMap?: boolean
  cardStyle?: boolean
  cardLayout?: 'auto' | 'side-by-side' | 'stack'
  style: Style
}

export type IMConfig = ImmutableObject<Config>
