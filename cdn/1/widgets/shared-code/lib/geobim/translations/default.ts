/* NOTE: This file is for translations that are shared across multiple widgets. Specifically:
 *       1. Translations used inside shared-code (ex. in a shared component).
 *       2. Translations used in multiple widgets in order to keep the widget translation
 *          files DRY.
 *
 *       If you need to add translations that are specific to a single widget, add them to
 *       the widget's own translation file.
 */
export default {
  geobim_logInLink: 'Log in',
  geobim_logInTip: '(All widgets requiring Autodesk authentication will also be logged in.)',
  geobim_noFeatureServiceSettingsWarning:
    'One or more sources do not contain feature layers from a GeoBIM project.',
  geobim_multipleFeatureServicesSettingsWarning:
    'One or more sources contain feature layers from multiple GeoBIM projects.',
  geobim_featureServicesSettingsTip:
    'Please use a source containing feature layers from a single GeoBIM project.',
  geobim_bimCloudConnectionSettingsTip:
    'Sources containing elements from BIM Cloud Connection will still be supported.',
  geobim_itemInaccessible: 'Item cannot be accessed.',
  noGeoBIMFeatureServiceError:
    'No GeoBIM Feature Service found in this View. Please use a Web Map or Web Scene that contains layers from only one GeoBIM Feature Service.',
  multipleGeoBIMFeatureServicesError:
    'Multiple GeoBIM Feature Services were found in this View. Please use a Web Map or Web Scene that contains layers from only one GeoBIM Feature Service.',
  selectMapSetting: 'Select a Map Widget.',
  geobimNoneSetting: '(None)',
  geobim_userTypeNote:
    'A Contributor or higher ArcGIS user type is needed to use the {widget_name} widget. Reach out to your GIS administrator to confirm your license or request an upgrade.',
  geobim_userTypeLink: 'Learn more about user types.'
}
