# needs to live in this directory as medusa-admin subfolder is git submodule

FROM node:12 AS build-stage
WORKDIR /srv/app
# TODO: might need "ENV NODE_OPTIONS=--openssl-legacy-provider" (it's in medusa docker docs)
# install the dependencies
COPY medusa-admin/package.json .
COPY medusa-admin/yarn.lock .
RUN ["yarn", "install", "--immutable"]
# build the site
COPY medusa-admin .
RUN ["yarn", "build"]
RUN echo thing
RUN echo $GATSBY_MEDUSA_BACKEND_URL

# TODO: specificy nginx version
# TODO: see if need custom nginx default.conf
FROM nginx
# set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# remove default nginx static assets
RUN ["rm", "-rf", "./*"]
# copy static assets from builder stage. note that the path needs to match where we built it!
COPY --from=build-stage /srv/app/public .
RUN echo actuallll
RUN echo $GATSBY_MEDUSA_BACKEND_URL
# containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
