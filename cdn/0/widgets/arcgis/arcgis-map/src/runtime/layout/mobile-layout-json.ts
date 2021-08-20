import { LayoutJson } from './config'

/* tslint:disable */
const mobileLayoutJson = {
  elements: {
    mainGroup: {
      type: 'GROUP',
      groupName: 'mainGroup',
      direction: 'vertical',
      style: {
        position: 'absolute'
      },
      className: 'd-flex flex-column'
    },
    topGroup: {
      type: 'GROUP',
      groupName: 'topGroup',
      direction: 'horizontal',
      className: 'd-flex w-100 align-items-center justify-content-between',
      style: {
        padding: '10px'
      }
    },
    midGroup: {
      type: 'GROUP',
      groupName: 'midGroup',
      direction: 'horizontal',
      className: 'flex-grow-1 d-flex w-100 justify-content-between',
      style: {
        position: 'relative'
      }
    },
    'midGroup-left': {
      type: 'GROUP',
      groupName: 'midGroup-left',
      direction: 'vertical',
      className: 'h-100 d-flex flex-column-reverse',
      style: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0
      }
    },
    'midGroup-left-content': {
      type: 'GROUP',
      groupName: 'midGroup-left-content',
      direction: 'vertical'
    },
    'midGroup-right': {
      type: 'GROUP',
      groupName: 'midGroup-right',
      direction: 'vertical',
      className: 'h-100 d-flex flex-column justify-content-between',
      style: {
        paddingRight: '10px',
        paddingLeft: '10px',
        paddingBottom: '10px',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0
      }
    },
    'midGroup-right-content-top': {
      type: 'GROUP',
      groupName: 'midGroup-right-content-top',
      direction: 'vertical'
    },
    'midGroup-right-content-bottom': {
      type: 'GROUP',
      groupName: 'midGroup-right-content-bottom',
      direction: 'vertical'
    },
    bottomGroup: {
      type: 'GROUP',
      groupName: 'bottomGroup',
      direction: 'vertical'
    },
    Search: {
      type: 'TOOL',
      toolName: 'Search',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'flex-grow-1'
    },
    FullScreen: {
      type: 'TOOL',
      toolName: 'FullScreen',
      isOnlyExpanded: false,
      isShowIconTitle: true
    },
    Locate: {
      type: 'TOOL',
      toolName: 'Locate',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    ClearActionData: {
      type: 'TOOL',
      toolName: 'ClearActionData',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Compass: {
      type: 'TOOL',
      toolName: 'Compass',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'mb-0'
    },
    MapSwitch: {
      type: 'TOOL',
      toolName: 'MapSwitch',
      isOnlyExpanded: true,
      isShowIconTitle: true
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
      isShowIconTitle: false
    },
    SelectState: {
      type: 'TOOL',
      toolName: 'SelectState',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Measure: {
      type: 'TOOL',
      toolName: 'Measure',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    }
  },
  layout: {
    mainGroup: {
      children: ['topGroup', 'midGroup', 'bottomGroup'],
      position: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
    },
    topGroup: {
      children: ['Search', 'FullScreen']
    },
    midGroup: {
      children: ['midGroup-left', 'midGroup-right']
    },
    'midGroup-left': {
      children: ['midGroup-left-content']
    },
    'midGroup-left-content': {
      children: ['Compass', 'MapSwitch']
    },
    'midGroup-right': {
      children: ['midGroup-right-content-top', 'midGroup-right-content-bottom']
    },
    'midGroup-right-content-top': {
      children: ['Layers', 'BaseMap', 'Measure', 'Select']
    },
    'midGroup-right-content-bottom': {
      children: ['Zoom', 'Home', 'Locate', 'ClearActionData']
    }
  },
  mobileResponsiveStrategy: {
    stage1: ['midGroup-left-content', 'midGroup-right-content-bottom'],
    stage2: ['midGroup-left-content', 'midGroup-right-content-bottom', 'midGroup-right-content-top'],
    stage3: ['topGroup', 'midGroup-left-content', 'midGroup-right-content-bottom', 'midGroup-right-content-top']
  },
  lockToolNames: []
} as LayoutJson
/* tslint:enable */

const mobileLayoutJsons: LayoutJson[] = [mobileLayoutJson]

export default mobileLayoutJsons
