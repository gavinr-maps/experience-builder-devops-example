FROM ubuntu:18.04
COPY arcgis-experience-builder-1.5.zip .
RUN apt-get update
RUN apt-get install unzip -y
RUN apt-get install curl -y
RUN unzip -q arcgis-experience-builder-1.5.zip

COPY widgets/ ArcGISExperienceBuilder/client/your-extensions/widgets/

RUN ls ArcGISExperienceBuilder/client/your-extensions/widgets

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

RUN cd ArcGISExperienceBuilder/server && npm ci
RUN cd ArcGISExperienceBuilder/client && npm ci
RUN cd ArcGISExperienceBuilder/client && npm run build:dev

# Update file source
# RUN cd ArcGISExperienceBuilder/server/src/routes/apps && sed -i 's/utils_1.checkCookie\(d\)/true/' app-download.js
RUN cd ArcGISExperienceBuilder/server/src/middlewares/dev/apps && sed -i 's/utils_1.checkToken(j.query.token)/true/' app-download.js
RUN cd ArcGISExperienceBuilder/server/src/middlewares/dev/apps && more app-download.js

# make app
RUN cd ArcGISExperienceBuilder/server/ && mkdir public && cd public && mkdir apps && cd apps && mkdir 0
COPY apps/0/ ArcGISExperienceBuilder/server/public/apps/0/

RUN echo "{\"title\": \"Title\",\"snippet\": \"\"}" > ArcGISExperienceBuilder/server/public/apps/0/info.json

CMD cd ArcGISExperienceBuilder/server && npm start