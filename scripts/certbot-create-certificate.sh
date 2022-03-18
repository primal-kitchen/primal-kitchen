#!/usr/bin/env sh

# TODO: read in env files...

# unsure if --force-renewal is smart?

certonly --webroot --webroot-path ${NGINX_WEBROOT} \
	--email ${APP_DEVELOPER_EMAIL} --agree-tos --no-eff-email \
	--staging \
	--force-renewal \
	--expand \
	-d ${APP_DOMAIN} \
	-d ${MEDUSA_STOREFRONT_SUBDOMAIN}.${APP_DOMAIN} \
	-d ${MEDUSA_ADMIN_PANEL_SUBDOMAIN}.${APP_DOMAIN} \
	-d ${STRAPI_SUBDOMAIN}.${APP_DOMAIN} \
	-d ${MINIO_SUBDOMAIN}.${APP_DOMAIN}
