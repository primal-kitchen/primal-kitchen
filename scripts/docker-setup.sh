#!/usr/bin/env sh

docker-compose --file docker-compose.setup.yaml --file docker-compose.yaml build reverse-proxy
docker-compose --file docker-compose.setup.yaml --file docker-compose.yaml --profile certificate-creation up
