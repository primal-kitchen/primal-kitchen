# TECHNOLOGIES
- strapi is for static content of site
- medusa is ecommerce platform
- postgres for db
- next.js for frontend
- auth0.com for auth
- sendgrid.com for email
- docker for running
- github for git and ci/cd
- digital ocean for hosting, dbms, dockerhub

# SETUP PREREQS
- install git (macos `brew install git`)
- install docker (macos `brew install docker && open -a Docker`)
- install docker compose if not bundled with docker
- install doctl (macos `brew install doctl`)
- install ssh (macos `brew install ssh`)
- clone this repo (`git clone git@github.com/primal-kitchen/primal-kitchen.git`)

# SETUP
- git clone
- ensure docker is running (macos `open -a Docker`) 
- `cp .env.template .env`
- `sudo vim /etc/hosts`

# HOW TO TEST
`npm run test`

# HOW TO RUN
`docker compose up`

# DOCKER HUB
hub url: registry.digitalocean.com/primal-kitchen
- `doctl registry login`
- `docker pull registry.digitalocean.com/primal-kitchen/<image-name>`
- `docker tag <image-name> registry.digitalocean.com/primal-kitchen/<image-name>`
- `docker push registry.digitalocean.com/primal-kitchen/<image-name>`

# CI/CD
github actions etc etc
## how to connect digital ocean
- ssh key setup
- `doctl project`
- `doctl auth init`
- `ssh -i ~/.ssh/<keyname> primal-kitchen@<machine-ip>`

# TODOS FOR SETUP - move this somewhere else...
- !!! **git submodules or subtree for medusa-admin** !!!
- is medusa admin working?
- can i get data from strapi to frontend?
- can i get data from medusa to frontend?
- different ssh key for root vs primal-kitchen...
