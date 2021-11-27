#!/bin/sh

docker compose down
docker image remove primal-kitchen-frontend primal-kitchen-strapi

docker compose up --detach

docker container logs --follow primal-kitchen-frontend
