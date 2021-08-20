// import {MessageManager, ExtentChangeMessage, MessageType} from 'jimu-core';
import Action from './action'
import LayerList from '../widget'
import { zoomToUtils } from 'jimu-arcgis'

export default class Goto extends Action {
  constructor (widget: LayerList, title: string) {
    super()
    this.id = 'goto'
    this.title = title
    this.className = 'esri-icon-zoom-out-fixed'
    this.group = 0
    this.widget = widget
  }

  isValid = (layerItem): boolean => {
    if (layerItem.parent) {
      return false
    }
    if (this.useMapWidget() && this.widget.props.config.goto) {
      return true
    } else {
      return false
    }
  }

  execute = (layerItem): void => {
    // let extentMessage = new ExtentChangeMessage(this.widget.props.id, layerItem.layer.fullExtent);
    // MessageManager.getInstance().publishMessage(extentMessage);
    if (this.widget.viewFromMapWidget) {
      /// /this.widget.viewFromMapWidget.goTo(layerItem.layer.fullExtent);
      // layerItem.layer.queryFeatures().then( (result) => {
      //  //zoomToGraphics(this.widget.viewFromMapWidget, [result.features[0]]).then(() => {
      //  //  console.log("abc");
      //  //});
      //  zoomToUtils.zoomTo(this.widget.viewFromMapWidget, {
      //    layer: layerItem.layer,
      //    graphics: [result.features[0]]
      //  }, {
      //    scale: 23111621
      //  });
      // })
      zoomToUtils.zoomTo(this.widget.viewFromMapWidget, layerItem.layer, {
        // scale: null
      })
    }
  }
}
