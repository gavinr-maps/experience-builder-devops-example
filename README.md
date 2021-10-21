# ArcGIS Experience Builder Devops Example

 Use Experience Builder within a devops workflow to automatically build the app on commit.

## How it works

1. First it downloads the Experience Builder developer edition zip file using [arcgis-lib-downloader](https://www.npmjs.com/package/arcgis-lib-downloader).
1. Then it unzips Experience Builder, does the NPM installs, copies the app directory into “server/public/apps/0”, copies the custom widgets.
1. Then it runs `app-download.js` (new in Experience Builder v1.6), which generates the export (deployable) zip.
1. Finally, it takes the deployable zip, unzips it, and publishes it

The built app is deployed to GitHub Pages: https://gavinr.github.io/experience-builder-devops-example/
