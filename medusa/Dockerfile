FROM node

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .
RUN ["npm", "clean-install"]

COPY medusa-config.js .
COPY src src
COPY docker-entrypoint.sh .

# TODO: i'm sure there's a way to not need the shell file. cmd + entrypoint might do it?
ENTRYPOINT ["./docker-entrypoint.sh", "start"]
# ENTRYPOINT echo ${DATABASE_URL}
