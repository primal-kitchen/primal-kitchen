FROM node

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .
RUN ["npm", "clean-install"]

COPY .env .
COPY medusa-config.js .
COPY src .

CMD ["npm", "start"]

# TODO: get this to run...
# ENTRYPOINT ["npm", "start"]
# CMD ["npx", "medusa", "user", "-e", "${MEDUSA_ADMIN_EMAIL}", "-p", "${MEDUSA_ADMIN_PASSWORD}"]
