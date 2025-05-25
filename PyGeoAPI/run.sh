#!/bin/bash

docker run -p 5001:80 \
  --rm \
  --name pygeoapi_container \
  geopython/pygeoapi:latest