# ArcGIS Experience Builder Devops Example

 Use Experience Builder within a devops workflow to automatically build the app on commit.

## How it works

1. First it [downloads the Experience Builder dev edition zip file](https://github.com/gavinr/experience-builder-devops-example/blob/701ecfd4b786dfe67ae4d78e0889586bdf53ac57/.github/workflows/build-app.yml#L13-L17) using [arcgis-lib-downloader](https://www.npmjs.com/package/arcgis-lib-downloader).
1. Then it runs a [Docker file](https://github.com/gavinr/experience-builder-devops-example/blob/master/Dockerfile) that unzips Experience Builder, does the NPM installs, copies the app directory into “server/public/apps/0”, and runs Experience Builder server.
1. Then once Experience Builder is running in the background, it makes a REST call to the `download/0` endpoint to download the deployable app.
1. Finally, it takes the deployable zip, [unzips it, and publishes it](https://github.com/gavinr/experience-builder-devops-example/blob/701ecfd4b786dfe67ae4d78e0889586bdf53ac57/.github/workflows/build-app.yml#L25-L34).
