# https://developers.redhat.com/blog/2021/03/04/building-rootless-containers-for-javascript-front-ends#

FROM node

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .

RUN ["npm", "clean-install"]

COPY next.config.js next.config.js
COPY next-env.d.ts next-env.d.ts
COPY tsconfig.json tsconfig.json
COPY .eslintrc.json .eslintrc.json
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js
COPY public public
COPY styles styles
COPY pages pages

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start"]
