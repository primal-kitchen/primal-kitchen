FROM strapi/base:14-alpine

WORKDIR /srv/app

COPY ./package.json .
COPY ./yarn.lock .

RUN ["yarn", "install", "--immutable"]

COPY favicon.ico favicon.ico
COPY config config
COPY public public
COPY extensions extensions
COPY api api

# --no-optimization option fixes js heap running out of memory error.
#   was previously needing to fix this by allocationing docker more ram
RUN ["yarn", "build", "--no-optimization"]


# delete and use stage here maybe?

RUN ["echo", "$(ls -1)"]

ENV NODE_ENV production

CMD ["yarn", "start"]
