export default {
  // concurrency-table
  measureAndRouteName: '({measure}) {routeName}',
  fromToMeasuresAndRouteName: '({fromMeasure} to {toMeasure}) {routeName}',
  selectedRouteName: 'Selected Route Name',
  selectedRouteMeasure: 'Selected Route Measure ({units})',
  selectedRouteFromMeasure: 'Selected Route From Measure ({units})',
  selectedRouteToMeasure: 'Selected Route To Measure ({units})',
  concurrencyTable: 'Concurrency Table',

  // inline editable-dropdown
  editLabel: 'Edit {label}',
  cancelLabel: 'Cancel editing {label}',

  // required fields
  eventRequiredLabel: 'Event *',
  networkRequiredLabel: 'Network *',
  routeIdRequiredLabel: 'Route ID *',
  routeNameRequiredLabel: 'Route Name *',
  fromRouteNameRequiredLabel: 'From Route Name *',
  fromRouteIdRequiredLabel: 'From Route ID *',
  toRouteNameRequiredLabel: 'To Route Name *',
  toRouteIdRequiredLabel: 'To Route ID *',
  startDateRequiredLabel: 'Start Date *',

  // attribute-table
  nullLabel: 'null',
  fieldInfo: 'Name: {name}\nAlias: {alias}\nType: {type}\nNullable: {nullable}\nDefault Value: {default}\nEditable: {editable}',
  fieldInfoWithError:
    'Name: {name}\nAlias: {alias}\nType: {type}\nNullable: {nullable}\nDefault Value: {default}\nEditable: {editable}\nError: {error}',
  fieldTypeWithLength: '{fieldType} ({length})',
  attributeError: '{fieldValue}: {message}',

  // attribute-table-field
  nonNullable: 'Value cannot be null.',
  invalidShort: 'Invalid value for short data type.',
  invalidInteger: 'Invalid value for long data type.',
  invalidSingle: 'Invalid value for float data type.',
  invalidDouble: 'Invalid value for double data type.',
  invalidString: 'Value exceeds maximum length of field',
  invalidDate: 'Invalid date.',
  invalidRange: 'Value exceeds min or max values of range.',
  contingentValueError: 'Invalid contingent value in the field',

  // route-picker
  selectRouteOnMap: 'Select route on map',
  selectMeasureOnMap: 'Select measure on map',
  selectToRouteOnMap: 'Select to route on map',
  selectToMeasureOnMap: 'Select to measure on map',

  // referent-picker
  selectReferentOnMap: 'Select referent on map',

  // route-picker-popup
  selectRouteLabel: 'Select Route',
  routePicker: 'Route Picker',
  routeNameLabel: 'Route Name',
  routeIdLabel: 'Route ID',
  fromRouteNameLabel: 'From Route Name',
  fromRouteIdLabel: 'From Route ID',
  toRouteNameLabel: 'To Route Name',
  toRouteIdLabel: 'To Route ID',
  fromDateLabel: 'From Date',
  toDateLabel: 'To Date',
  measureLabel: 'Measure',
  fromMeasureLabel: 'From Measure',
  toMeasureLabel: 'To Measure',

  // event-picker-popup
  selectEventLabel: 'Select Event',
  eventPicker: 'Event Picker',
  objectIdLabel: 'Object ID',
  eventIdLabel: 'Event ID',
  intersectionNameLabel: 'Intersection Name',

  // intellisense
  noResult: 'No Results',

  // copy attributes
  copyAttributes: 'Copy Attributes',

  // settings
  noLrsLayersTips:
    'No LRS layers are present in the selected map. Select a map with LRS Network and Event layers present in the webmap.',
  multipleServicesTips:
    'Map contains layers from more than one feature service. Select a map with LRS Network and Event layers coming from a single feature service.',
  noNetworkLayersTips:
    'No LRS Network layers are present in the selected map. Select a map with at least one LRS network layer present in the web map.',
  noMapSelectedTips: 'Select a map.',
  concurrencySettings: 'Concurrency Settings',
  hideAddToDominantRouteOption: 'Hide Add to Dominant Route Option',
  enableAddToDominantRouteOption: 'Enable Add to Dominant Route Option',
  notAllowOverrideEventReplacement: 'Don\'t allow override of event placement on dominant routes',
  displaySettings: 'Display Settings',
  hideNetwork: 'Hide Network',
  hideEvent: 'Hide Event',
  hideMethod: 'Hide Method',
  hideRoute: 'Hide Route in Search by Line',
  hideType: 'Hide Type',
  hideAttributeSet: 'Hide Attribute Set',
  hideMeasures: 'Hide Measures',
  hideDates: 'Hide Dates',
  useRoutesStartEndDates: 'Use Routes Start and End Dates',
  useRoutesStartEndDatesTooltip:
    'Routes start/end dates will be used for new events. If disabled, the current date will be used.',
  selectMap: 'Select Map',
  loadLayers: 'Load layers',
  clearLayers: 'Clear layers',
  removeLayer: 'Remove',
  missingParentNetwork: 'Parent network is missing',
  searchMethods: 'Search Methods',
  radiusWithUnits: 'Radius ({units})',
  spatialReference: 'Spatial Reference',
  lrs: 'LRS',

  // add events, split event, merge events
  inches: 'Inches (US Survey)',
  feet: 'Feet (US Survey)',
  yards: 'Yards (US Survey)',
  miles: 'Miles (US Survey)',
  nauticalMiles: 'Nautical miles (US Survey)',
  points: 'Points',
  millimeters: 'Millimeters',
  centimeters: 'Centimeters',
  meters: 'Meters',
  kilometers: 'Kilometers',
  decimalDegrees: 'Decimal degrees',
  decimeters: 'Decimeters',
  intFeet: 'Feet (International)',
  intMiles: 'Statute miles',
  esriUnknownUnits: 'esriUnknownUnits',

  // intellisense text input
  invalidRouteField: 'Route could not be found with provided value',

  // lock manager
  CannotAcquireLockUserAndVersion: 'Cannot acquire lock because {user} has the lock in version {version}.',
  UnavailableLockOnLine: 'Line {nameOrId} ({networkName}) is already locked by {lockUser} in version {version}.',
  UnavailableLockOnRoute: 'Route {nameOrId} ({networkName}) is already locked by {lockUser} in version {version}.',
  UnavailableLockOnLineWithoutVersion: 'Line {nameOrId} ({networkName}) is already locked by {lockUser} in a different service.',
  UnavailableLockOnRouteWithoutVersion:
    'Route {nameOrId} ({networkName}) is already locked by {lockUser} in a different service.',
  YouAcquiredLockOnLine: 'You have acquired a lock on line {nameOrId} ({networkName}) in version {version}.',
  YouAcquiredLockOnRoute: 'You have acquired a lock on route {nameOrId} ({networkName}) in version {version}.',
  ReconcileRequired:
    'The default version has changed. Reconcile this version with the default version in order to acquire locks.',

  selectLayers: 'Select Layers',
  layerConfig: 'Layer Configuration',
  selectMapToEditSettings: 'Select map to edit default settings',
  lrsChangeModeConfirmTitle: 'Are you sure you want to switch the mode?',
  lrsChangeModeConfirmTips: 'You will lose the settings configured.',
  noMapSelected: 'Select a map for further configurations.',
  importLayersTips: 'Select a map to import LRS networks and events',

  noLayersInMap: 'No layers are present in the selected map.',
  noLrsLayersInMap: 'No LRS layers are present in the selected map. Select a map with LRS layers present in the map.',
  noNetworkLayersInMap:
    'No LRS Network layers are present in the selected map. Select a map with at least one LRS network layer present in the web map.',
  noLineEventLayersInMap:
    'No LRS Line Event layers are present in the selected map. Select a map with at least one LRS line event layer present in the web map.',
  noPointEventLayersInMap:
    'No LRS Point Event layers are present in the selected map. Select a map with at least one LRS point event layer present in the web map.',
  noIntersectionLayersInMap:
    'No LRS Intersection layers are present in the selected map. Select a map with at least one LRS intersection layer present in the web map.',
  multipleLrsInWebMap: 'Multiple LRS\'s are present in the selected map. Select a web map with only one LRS in the map.',
  noNetworkConfig: 'No LRS Network layers are configured with the widget. Configure the widget with at least one LRS Network layer.',
  noLineEventConfig: 'No LRS Line Event layers are configured with the widget. Configure the widget with at least one LRS Line Event layer.',
  noPointEventConfig: 'No LRS Point Event layers are configured with the widget. Configure the widget with at least one LRS Point Event layer.',
  noIntersectionConfig: 'No LRS Intersection layers are configured with the widget. Configure the widget with at least one LRS Intersection layer.',

  // Map View Selector
  lrsMinimumSchema: 'LRS Minimum Schema',
  lrsNetwork: 'LRS Network',
  lrsEvent: 'LRS Event',
  lrsIntersection: 'LRS Intersection',
  nonLrsLayer: 'Non-LRS Layers',

  // VMS
  vmsError: 'Version Management Service is not available.',
  vmsChangeVersionError: 'Failed to change version to {versionName}.',
  vmsCreateVersionError: 'Failed to create version {versionName}.',
  vmsDeleteVersionError: 'Failed to delete version {versionName}.',
  vmsFailedToStartEditSession: 'Failed to start edit session.',
  vmsFailedToStopEditSession: 'Failed to stop edit session.',
  vmsReconcileError: 'Failed to reconcile changes.',
  vmsPostError: 'Failed to post changes.',
  vmsVersionNotFound: 'Version {versionName} not found.',
  vmsVersionGuidMissing: 'Version GUID is missing.',
  vmsFailedToStartReading: 'Failed to start reading version {versionName}.',

  // Search By Referent
  offsetLabel: 'Offset ({unit})',
  invalidOffset: 'Invalid Offset',
  invalidReferent: 'Location is invalid or is not on the selected route.',
  referentDisplayName: '{displayName} *',
  referentRequired: 'Referent *',
  locationOffsetLabel: 'Location Offset',
  measureOutOfRange: 'Measure out of range.',
  referentNotOnRoute: 'Location is not on the selected route.',
  calibrationPointNetworkMismatch: 'Calibration point network does not belong to selected network.',
  fromMeasureGreaterThanToMeasureError: 'From measure is greater than to measure',

  // Referent Picker
  selectReferentLabel: 'Select Referent',
  referentPicker: 'Referent Picker'
}
