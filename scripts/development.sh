#!/bin/sh

docker compose down
docker compose --file docker-compose.yaml \
			   --file docker-compose.development.yaml build
docker compose up --detach
docker container logs --follow primal-kitchen-strapi
