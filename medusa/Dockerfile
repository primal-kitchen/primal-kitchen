FROM node

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .
RUN ["npm", "clean-install"]

COPY medusa-config.js .
COPY src src

ENTRYPOINT ["npm", "start"]
# ENTRYPOINT echo ${DATABASE_URL}
