FROM node

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .
RUN ["npm", "clean-install"]

COPY .env .
COPY medusa-config.js .
COPY src .

CMD ["npm", "start"]
