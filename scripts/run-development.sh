#!/usr/bin/env sh

docker compose down
# docker image remove primal-kitchen-frontend primal-kitchen-strapi primal-kitchen-medusa

docker compose --file docker-compose.yaml \
			   --file docker-compose.development.yaml \
			   up --detach

# docker container logs --follow primal-kitchen-medusa
