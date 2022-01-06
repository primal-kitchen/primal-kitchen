#!/usr/bin/env sh

# TODO: pre-check mkcert is installed
# TODO: pre-check mkcert is setup correctly
# TODO: reminder to restart browsers if needed?

# TODO: load in APP_DOMAIN and other environment variables
APP_DOMAIN=new.primalkitchen.nz.local
STRAPI_SUBDOMAIN=strapi-admin
MEDUSA_STOREFRONT_SUBDOMAIN=medusa
MEDUSA_ADMIN_PANEL_SUBDOMAIN=medusa-admin
MINIO_SUBDOMAIN=minio
SSL_CERTIFICATE_FILE=ssl-certificate.pem
SSL_CERTIFICATE_PRIVATE_KEY_FILE=ssl-certificate-private-key.pem

certificate_destination=data/certbot/conf/live/$APP_DOMAIN

mkdir -p $certificate_destination

mkcert -cert-file $certificate_destination/$SSL_CERTIFICATE_FILE \
	-key-file $certificate_destination/$SSL_CERTIFICATE_PRIVATE_KEY_FILE \
	$APP_DOMAIN \
	$MEDUSA_STOREFRONT_SUBDOMAIN.$APP_DOMAIN \
	$MEDUSA_ADMIN_PANEL_SUBDOMAIN.$APP_DOMAIN \
	$STRAPI_SUBDOMAIN.$APP_DOMAIN \
	$MINIO_SUBDOMAIN.$APP_DOMAIN
