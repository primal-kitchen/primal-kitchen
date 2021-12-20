#!/usr/bin/env sh

npx medusa migrations run
npm run $1
