# TODO: is the even a reverse proxy or is it a server block?
# TODO: specify exact nginx image

FROM nginx

COPY nginx.conf.template /etc/nginx/templates/

# this is very important. it will try to put in /etc/nginx/conf.d otherwise. might need to use a multistage build if doing other nginx
# 	templates (such as /etc/nginx/sites-available or whatever instead of putting all config in nginx.conf).
# 	read dockerhub nginx docs to learn more.
ENV NGINX_ENVSUBST_OUTPUT_DIR="/etc/nginx"

# ENV FRONTEND_CONTAINER_NAME="primal-kitchen-frontend"
#ENV FRONTEND_PORT=3000
#ENV APP_DOMAIN="new.primalkitchen.nz.local"

# check it actually works (unsure if can use this before env variable substitution is run...
# 	maybe could be put in docker-entrypoint.sh? needa read the docs...
# RUN nginx -t

# note that using an ENTRYPOINT breaks this. probably CMD does as well but haven't checked
