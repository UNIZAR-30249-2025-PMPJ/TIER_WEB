#!/bin/bash
set -e

echo "🔧 Generando OpenAPI..."
export PYGEOAPI_CONFIG=/app/pygeoapi-config.yml
export PYGEOAPI_OPENAPI=/app/openapi.json

pygeoapi openapi generate $PYGEOAPI_CONFIG -f json > $PYGEOAPI_OPENAPI

echo "🚀 Iniciando PyGeoAPI..."
exec pygeoapi serve
