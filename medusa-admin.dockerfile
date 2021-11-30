# needs to live in this directory as medusa-admin subfolder is git submodule

FROM node:12

WORKDIR /srv/app

COPY package.json .
COPY yarn.lock .

RUN ["yarn", "install", "--immutable"]

COPY . .

RUN ["yarn", "build"]

CMD ["yarn", "serve"]
