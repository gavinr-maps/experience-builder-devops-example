import { React, IMThemeVariables } from 'jimu-core'
import { JimuMapView } from 'jimu-arcgis'

export interface UIComponentProps {
  jimuMapView: JimuMapView
  theme: IMThemeVariables
}

export abstract class UIComponent<P extends UIComponentProps, S> extends React.PureComponent<P, S> {
}
