# Deal Engine Weather Report

Este proyecto es parte de un reto técnico para Deal Engine. Genera un informe del clima para los viajeros en base a tickets de vuelo, consultando servicios web de clima y manejando concurrencia.

## Requisitos

- Node.js v18.13.0
- Docker
- MongoDB

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/deal-engine-weather.git
2. Instala las dependencias
    ```bash
    npm install
3. Levanta el contenedor de docker
    ```bash
    docker-compose up -d
4. Revisa el acceso a la base de datos con mongodb compass
    ```bash
    Uri de conexión: mongodb://localhost:27017/ticketsDB
5. Importar dataset a mongodb
    ```bash
6. Descarga e instalar el comand line tools de mongodb
    ```bash
    https://www.mongodb.com/try/download/database-tools
7. Copiar el siguiente path en variables de entorno
    ```bash
    "C:\Program Files\MongoDB\Tools\100\bin"
8. Importar el dataset
    ```bash
    crea una colección llamada tickets en ticketsDB e importa el dataset.csv en la colección

    