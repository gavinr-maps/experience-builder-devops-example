import { ImmutableObject } from 'jimu-core'
import { IMJimuMapConfig } from 'jimu-ui/advanced/map'

export enum SceneQualityMode{
  auto = 'auto',
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export interface Config extends IMJimuMapConfig{
  isUseCustomMapState: boolean
  sceneQualityMode: SceneQualityMode
}

export type IMConfig = ImmutableObject<Config>

export interface ToolConfig { [key: string]: boolean }
