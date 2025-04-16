#!/bin/bash

docker run -p 5001:80 \
  --rm \
  --name pygeoapi_container \
  -v $(pwd)/pygeoapi-config.yml:/pygeoapi/local.config.yml \
  -v $(pwd)/data1.geojson:/pygeoapi/data1.geojson \
  -v $(pwd)/data2.geojson:/pygeoapi/data2.geojson \
  -v $(pwd)/data3.geojson:/pygeoapi/data3.geojson \
  -v $(pwd)/data4.geojson:/pygeoapi/data4.geojson \
  -v $(pwd)/data5.geojson:/pygeoapi/data5.geojson \
  -v $(pwd)/data6.geojson:/pygeoapi/data6.geojson \
  -v $(pwd)/data7.geojson:/pygeoapi/data7.geojson \
  geopython/pygeoapi:latest