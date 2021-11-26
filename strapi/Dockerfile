FROM strapi/base

WORKDIR /srv/app

COPY ./package.json .
COPY ./yarn.lock .

RUN ["yarn", "install", "--immutable"]

COPY config config
COPY api api
COPY extensions extensions
COPY public public
COPY favicon.ico favicon.ico

RUN ["yarn", "build"]

# delete and use stage here maybe?

RUN ["echo", "$(ls -1)"]

ENV NODE_ENV production

EXPOSE 1337

CMD ["yarn", "start"]
