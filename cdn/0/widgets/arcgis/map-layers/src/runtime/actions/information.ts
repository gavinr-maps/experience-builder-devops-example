import Action from './action'
import LayerList from '../widget'

export default class Information extends Action {
  constructor (widget: LayerList, title: string) {
    super()
    this.id = 'information'
    this.title = title
    this.className = 'esri-icon-description'
    this.group = 3
    this.widget = widget
  }

  isValid = (layerItem): boolean => {
    if (layerItem.layer.url && this.widget.props.config.information) {
      return true
    } else {
      return false
    }
  }

  execute = (layerItem): void => {
    window.open(layerItem.layer.url)
  }
}
