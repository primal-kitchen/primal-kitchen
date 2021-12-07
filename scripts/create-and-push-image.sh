#!/usr/bin/env sh

# you gotta be in the right directory. that's also gotta match the desired docker image name...
DIRECTORY_NAME=${PWD##*/}

# TODO: is there not an issue with including .env (especially for reverse-proxy nginx env substitution??)

docker image build --tag primal-kitchen/$DIRECTORY_NAME .
docker tag primal-kitchen/$DIRECTORY_NAME registry.digitalocean.com/primal-kitchen/$DIRECTORY_NAME
docker push registry.digitalocean.com/primal-kitchen/$DIRECTORY_NAME
