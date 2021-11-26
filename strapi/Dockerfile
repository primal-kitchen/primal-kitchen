FROM strapi/base

WORKDIR /srv/app

COPY ./package.json .
COPY ./yarn.lock .

RUN ["yarn", "install", "--immutable"]

COPY favicon.ico favicon.ico
COPY config config
COPY public public
COPY extensions extensions
COPY api api

RUN ["yarn", "build"]

# delete and use stage here maybe?

RUN ["echo", "$(ls -1)"]

ENV NODE_ENV production

EXPOSE 1337

CMD ["yarn", "start"]
