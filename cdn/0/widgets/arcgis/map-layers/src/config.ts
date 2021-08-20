import { ImmutableObject } from 'jimu-core'

export interface Config{
  goto?: boolean
  opacity?: boolean
  information?: boolean
  setVisibility?: boolean
  useMapWidget?: boolean
}

export type IMConfig = ImmutableObject<Config>
