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
- `sudo vim /etc/hosts` (add base url, medusa, medusa admin, strapi admin entries)
- `brew install mkcert` local ca stuff
- `brew install nss` so mkcert will work for firefox
- `mkcert --install` setup mkcert for local machine
- `./scripts/generate-local-ssl-certificates.sh`
... consider using pebble local acme server instead of m

- install vagrant, ansible, ansible extension for ???
- vagrant up (fails)
- vagrant ssh and sudo apt update to fix for libnss someshit
- vagrant provision


# VAGRANT SETUP — TODO: ORGANISE
- `vagrant plugin install vagrant-env`
- `vagrant ssh-config > vagrant-ssh-config`
- `kitty +kitten ssh -F .vagrant-ssh-config <username>`
 
### code completion
- may need to `npm clean-install` for code completion in frontend

### INSOMNIA REST CLIENT
- beforehand run mkcert etc
- replace the path to the insomnia ca-certs file as appropriate
- ensure url etc is right for the local cert below
- got solution from https://github.com/FiloSottile/mkcert/issues/249
- `sudo printf "%s\n" >> /var/folders/f3/2dnly051155519wzm4cyrtyr0000gn/T/insomnia_2021.7.2/ca-certs.pem`
- `sudo cat data/certbot/conf/live/new.primalkitchen.nz.local/ssl-certificate.pem >> /var/folders/f3/2dnly051155519wzm4cyrtyr0000gn/T/insomnia_2021.7.2/ca-certs.pem`

# HOW TO TEST
`npm run test`

# HOW TO RUN
`docker compose up`

# MAINTIANENCE
### npm packages
`docker container exec -it <service-name> /bin/bash` to get shell on container
`npm outdated` in various services is helpful when updating
`npm update --save` in development docker-compose most package.json and package-lock.json are volumed!
TODO: learn how to replace running docker compose container in place??
### inplace docker contianer upgrade
i'm sure that there's a 0 downtime way to do this
- this is building, but could do pull instead i think `docker compose build <service-name>` — remember to pass `--file` overrides if need be
- replace inplace (small amount of downtime) `docker compose up --detach --no-deps <service-name>`

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

# TECH DEBT
- primal-kitchen-postgres | 2021-12-15 00:29:24.400 UTC [32] WARNING:  could not open statistics file "pg_stat_tmp/global.stat": Operation not permitted
- redis writing all diskspace?
- some docker images way bigger than should be
- dry out nginx stuff

# TODOS FOR SETUP - move this somewhere else...
- !!! **git submodules or subtree for medusa-admin** !!!
- is medusa admin working?
- can i get data from strapi to frontend?
- can i get data from medusa to frontend?
- different ssh key for root vs primal-kitchen...
