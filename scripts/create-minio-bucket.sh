#!/usr/bin/env sh

"$0" | sed 's|\(.*\)/.*|\1|'
echo $($()/read-env-variable.sh MINIO_CONTAINER_NAME)

MINIO_CONTAINER_NAME=${sh read-env-variable.sh MINIO_CONTAINER_NAME}
MINIO_BUCKET=${read-env-variable MINIO_BUCKET}

docker container exec $MINIO_CONTAINER_NAME mc mb $MINIO_BUCKET
