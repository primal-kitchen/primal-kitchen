#!/bin/sh

docker compose down
docker compose build
docker compose up --detach
docker container logs --follow primal-kitchen-strapi
