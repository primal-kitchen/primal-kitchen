#!/bin/sh

# TODO: maybe read these from the env file? and then delete after?
EMAIL=$1
PASSWORD=$2

docker container exec primal-kitchen-medusa npx medusa user -e $EMAIL -p $PASSWORD
