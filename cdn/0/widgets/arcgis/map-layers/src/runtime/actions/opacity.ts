import Action from './action'
import LayerList from '../widget'

export default class Opacity extends Action {
  private readonly isIncreaseOpacity: boolean
  constructor (widget: LayerList, title: string, isIncreaseOpacity: boolean) {
    super()
    isIncreaseOpacity ? this.id = 'increaseOpacity' : this.id = 'decreaseOpacity'
    this.title = title
    isIncreaseOpacity ? this.className = 'esri-icon-up' : this.className = 'esri-icon-down'
    this.group = 1
    this.widget = widget
    this.isIncreaseOpacity = isIncreaseOpacity
  }

  isValid = (layerItem): boolean => {
    if (layerItem.parent) {
      return false
    }
    if (this.useMapWidget() && this.widget.props.config.opacity) {
      return true
    } else {
      return false
    }
  }

  execute = (layerItem): void => {
    if (this.isIncreaseOpacity) {
      if (layerItem.layer.opacity < 1) {
        layerItem.layer.opacity += 0.25
      }
    } else {
      if (layerItem.layer.opacity > 0) {
        layerItem.layer.opacity -= 0.25
      }
    }
  }
}
