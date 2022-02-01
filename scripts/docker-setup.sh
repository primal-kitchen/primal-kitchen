#!/usr/bin/env sh

docker-compose --file docker-compose.setup.yaml --file docker-compose.yaml build
docker-compose --file docker-compose.setup.yaml --file docker-compose.yaml --profile certificate-creation up
