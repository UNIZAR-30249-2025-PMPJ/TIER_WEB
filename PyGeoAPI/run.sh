#!/bin/bash

docker run -p 5001:80 \
  --rm \
  --name pygeoapi_container \
  -v $(pwd)/pygeoapi-config.yml:/pygeoapi/local.config.yml \
  geopython/pygeoapi:latest