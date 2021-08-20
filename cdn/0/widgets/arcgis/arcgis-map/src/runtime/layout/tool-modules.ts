import Zoom from '../tools/zoom'
import Home from '../tools/home'
import Compass from '../tools/compass'
import Locate from '../tools/locate'
import ClearActionData from '../tools/clear-action-data'
import Navigation from '../tools/navigation'
import Search from '../tools/search'
import Layers from '../tools/layers'
import BaseMap from '../tools/basemap'
import MapSwitch from '../tools/mapswitch'
import FullScreen from '../tools/fullscreen'
import ScaleBar from '../tools/scalebar'
import Attribution from '../tools/attribution'
import Measure from '../tools/measure'
import Select from '../tools/select'
import SelectState from '../tools/selectstate'

const ToolModules: {[ModuleName: string]: any} = {
  Zoom: Zoom,
  Home: Home,
  Navigation: Navigation,
  Locate: Locate,
  ClearActionData: ClearActionData,
  Compass: Compass,
  Search: Search,
  Layers: Layers,
  BaseMap: BaseMap,
  Measure: Measure,
  MapSwitch: MapSwitch,
  FullScreen: FullScreen,
  ScaleBar: ScaleBar,
  Attribution: Attribution,
  Select: Select,
  SelectState: SelectState
}

export default ToolModules
