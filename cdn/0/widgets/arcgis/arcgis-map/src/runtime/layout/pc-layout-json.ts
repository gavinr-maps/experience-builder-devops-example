import { LayoutJson } from './config'

/* tslint:disable */
const layoutJson1 = {
  elements: {
    leftTopContainer: {
      type: 'GROUP',
      groupName: 'leftTopContainer',
      direction: 'horizontal'
    },
    navigator: {
      type: 'GROUP',
      groupName: 'navigator',
      direction: 'vertical'
    },
    interact: {
      type: 'GROUP',
      groupName: 'interact',
      direction: 'vertical',
      isResponsive: true
    },
    bottom: {
      type: 'GROUP',
      groupName: 'bottom',
      direction: 'vertical',
      className: 'w-100'
    },
    'bottom-line1': {
      type: 'GROUP',
      groupName: 'bottom-line1',
      direction: 'horizontal',
      className: 'd-flex align-items-center justify-content-between w-100 scale-attribution-xy-group',
      style: {
        marginBottom: 0,
        marginTop: 0
      }
    },
    'bottom-line2': {
      type: 'GROUP',
      groupName: 'bottom-line2',
      direction: 'horizontal',
      className: 'd-flex align-items-end justify-content-between w-100',
      style: {
        paddingLeft: '15px',
        paddingRight: '15px',
        marginBottom: '10px'
      }
    },
    'SelectState-FullScreen-Container': {
      type: 'GROUP',
      groupName: 'SelectState-FullScreen-Container',
      direction: 'vertical',
      className: 'align-items-end'
    },
    attributionGroup: {
      type: 'GROUP',
      groupName: 'attributionGroup',
      direction: 'horizontal',
      style: {
        maxWidth: '60%'
      }
    },
    Zoom: {
      type: 'TOOL',
      toolName: 'Zoom',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Home: {
      type: 'TOOL',
      toolName: 'Home',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Compass: {
      type: 'TOOL',
      toolName: 'Compass',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Navigation: {
      type: 'TOOL',
      toolName: 'Navigation',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Locate: {
      type: 'TOOL',
      toolName: 'Locate',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Layers: {
      type: 'TOOL',
      toolName: 'Layers',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    },
    BaseMap: {
      type: 'TOOL',
      toolName: 'BaseMap',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    },
    Select: {
      type: 'TOOL',
      toolName: 'Select',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    SelectState: {
      type: 'TOOL',
      toolName: 'SelectState',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0)'
      }
    },
    Measure: {
      type: 'TOOL',
      toolName: 'Measure',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    },
    MapSwitch: {
      type: 'TOOL',
      toolName: 'MapSwitch',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    FullScreen: {
      type: 'TOOL',
      toolName: 'FullScreen',
      isOnlyExpanded: false,
      isShowIconTitle: true
    },
    ClearActionData: {
      type: 'TOOL',
      toolName: 'ClearActionData',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    ScaleBar: {
      type: 'TOOL',
      toolName: 'ScaleBar',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Attribution: {
      type: 'TOOL',
      toolName: 'Attribution',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'w-100'
    },
    Search: {
      type: 'TOOL',
      toolName: 'Search',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    }
  },
  layout: {
    leftTopContainer: {
      children: ['navigator', 'Select'],
      position: {
        top: 15,
        left: 15
      }
    },
    navigator: {
      children: ['Zoom', 'Home', 'Navigation', 'Locate', 'Compass']
    },
    interact: {
      children: ['Search', 'Layers', 'BaseMap', 'Measure'],
      position: {
        top: 15,
        right: 15
      }
    },
    'bottom-line1': {
      children: ['ScaleBar', 'attributionGroup']
    },
    'bottom-line2': {
      children: ['MapSwitch', 'SelectState-FullScreen-Container']
    },
    'SelectState-FullScreen-Container': {
      children: ['FullScreen', 'ClearActionData', 'SelectState']
    },
    bottom: {
      children: ['bottom-line2', 'bottom-line1'],
      position: {
        bottom: 0,
        left: 0
      }
    },
    attributionGroup: {
      children: ['Attribution']
    }
  }
} as LayoutJson

const layoutJson2 = {
  elements: {
    navigator: {
      type: 'GROUP',
      groupName: 'navigator',
      direction: 'vertical',
      className: 'align-items-end'
    },
    interact: {
      type: 'GROUP',
      groupName: 'interact',
      direction: 'horizontal',
      isResponsive: true
    },
    fullScreenGroup: {
      type: 'GROUP',
      groupName: 'fullScreenGroup',
      direction: 'horizontal'
    },
    bottom: {
      type: 'GROUP',
      groupName: 'bottom',
      direction: 'vertical',
      className: 'w-100'
    },
    'bottom-line1': {
      type: 'GROUP',
      groupName: 'bottom-line1',
      direction: 'horizontal',
      className: 'd-flex align-items-center justify-content-between w-100 scale-attribution-xy-group',
      style: {
        marginBottom: 0,
        marginTop: 0
      }
    },
    'bottom-line2': {
      type: 'GROUP',
      groupName: 'bottom-line2',
      direction: 'horizontal',
      className: 'd-flex align-items-end justify-content-between w-100',
      style: {
        paddingLeft: '15px',
        paddingRight: '15px',
        marginBottom: '10px'
      }
    },
    attributionGroup: {
      type: 'GROUP',
      groupName: 'attributionGroup',
      direction: 'horizontal',
      style: {
        maxWidth: '60%'
      },
      className: 'attibute-group'
    },
    Zoom: {
      type: 'TOOL',
      toolName: 'Zoom',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Home: {
      type: 'TOOL',
      toolName: 'Home',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Compass: {
      type: 'TOOL',
      toolName: 'Compass',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Navigation: {
      type: 'TOOL',
      toolName: 'Navigation',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Locate: {
      type: 'TOOL',
      toolName: 'Locate',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Layers: {
      type: 'TOOL',
      toolName: 'Layers',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom'
    },
    BaseMap: {
      type: 'TOOL',
      toolName: 'BaseMap',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom'
    },
    Select: {
      type: 'TOOL',
      toolName: 'Select',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    SelectState: {
      type: 'TOOL',
      toolName: 'SelectState',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0)'
      }
    },
    Measure: {
      type: 'TOOL',
      toolName: 'Measure',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom'
    },
    MapSwitch: {
      type: 'TOOL',
      toolName: 'MapSwitch',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    FullScreen: {
      type: 'TOOL',
      toolName: 'FullScreen',
      isOnlyExpanded: false,
      isShowIconTitle: true
    },
    ClearActionData: {
      type: 'TOOL',
      toolName: 'ClearActionData',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    ScaleBar: {
      type: 'TOOL',
      toolName: 'ScaleBar',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Attribution: {
      type: 'TOOL',
      toolName: 'Attribution',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'w-100'
    },
    Search: {
      type: 'TOOL',
      toolName: 'Search',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom'
    }
  },
  layout: {
    navigator: {
      children: ['Compass', 'Locate', 'Navigation', 'Zoom', 'Home', 'SelectState']
    },
    interact: {
      children: ['Search', 'Layers', 'BaseMap', 'Measure', 'Select'],
      position: {
        top: 15,
        left: 15
      }
    },
    fullScreenGroup: {
      children: ['FullScreen', 'ClearActionData'],
      position: {
        top: 15,
        right: 15
      }
    },
    'bottom-line1': {
      children: ['ScaleBar', 'attributionGroup']
    },
    'bottom-line2': {
      children: ['MapSwitch', 'navigator']
    },
    bottom: {
      children: ['bottom-line2', 'bottom-line1'],
      position: {
        bottom: 0,
        left: 0
      }
    },
    attributionGroup: {
      children: ['Attribution']
    }
  }
} as LayoutJson
/* tslint:enable */

const layoutJsons: LayoutJson[] = [layoutJson1, layoutJson2]

export default layoutJsons
