FROM python:3.9-slim

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Crear carpeta de trabajo
WORKDIR /app

# Clonar pygeoapi
RUN git clone https://github.com/geopython/pygeoapi.git && \
    cd pygeoapi && \
    git checkout 0.17.0

# Copiar archivo de configuración a /app
COPY pygeoapi-config.yml /app/pygeoapi-config.yml

# Instalar pygeoapi y dependencias
RUN cd pygeoapi && \
    pip install --upgrade pip && \
    pip install -r requirements.txt && \
    pip install setuptools && \
    python setup.py install && \
    pip install flask-cors geoalchemy2 psycopg2

# Copiar entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 5000
ENTRYPOINT ["/entrypoint.sh"]
