#!/bin/bash

if [ -z "$1" ]; then
  echo "Uso: $0 <PGHOST>"
  exit 1
fi

PGHOST="$1"

docker run -p 5001:80 \
  --rm \
  --name pygeoapi_container \
  -e PGHOST="$PGHOST" \
  -v "$(pwd)/pygeoapi-config.yml:/pygeoapi/local.config.yml" \
  geopython/pygeoapi:latest