# TODO: is the even a reverse proxy or is it a server block?
# TODO: specify exact nginx image

FROM nginx

# TODO: make it so don't need to manually type out each file name
WORKDIR /etc/nginx/sites-available
COPY ./sites-available/new.primalkitchen.nz.conf .
COPY ./sites-available/strapi-admin.new.primalkitchen.nz.conf .

# TODO: make it so don't need to manually type out each file name
WORKDIR /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/new.primalkitchen.nz.conf .
RUN ln -s /etc/nginx/sites-available/strapi-admin.new.primalkitchen.nz.conf .

# check actually works
RUN nginx -t

ENTRYPOINT ["nginx", "-g", "daemon off;"]
