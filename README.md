# ArcGIS Experience Builder Devops Example

 Use Experience Builder within a devops workflow to automatically build the app on commit.

## How it works

1. First it downloads the Experience Builder developer edition zip file using `curl`.
1. Then it unzips Experience Builder, does the NPM installs, copies the app directory into “server/public/apps/0”, copies the custom widgets.
1. Then it runs `app-download.js` (new in Experience Builder v1.6), which generates the export (deployable) zip.
1. Finally, it takes the deployable zip, unzips it, and publishes it

The built app is deployed to GitHub Pages: https://gavinr-maps.github.io/experience-builder-devops-example/

More information on how the GitHub Action script generates the Experience Builder app export can be found [here](https://community.esri.com/t5/arcgis-experience-builder-blog/experience-builder-devops-generating-the-app/ba-p/1112247).

[![](https://gavinr.github.io/experience-builder-devops-example/screenshot.png)](https://gavinr.github.io/experience-builder-devops-example/)
