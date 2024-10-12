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
    Uri de conexión: mongodb://mongoadmin:mongoadmin@localhost:27017
5. Importar dataset a mongodb
    ```bash
    - Descarga e instalar el comand line tools de mongodb: https://www.mongodb.com/try/download/database-tools
    - Copiar el siguiente path en variables de entorno: "C:\Program Files\MongoDB\Tools\100\bin"
    - Ejecuta el siguiente comando para importar el dataset: "mongoimport --host localhost --port 27017 --db ticketsDB --collection tickets --type csv --file dataset.csv --headerline --username mongoadmin --password mongoadmin --authenticationDatabase admin"
    - Results: "connected to: mongodb://localhost:27017/, 3000 document(s) imported successfully. 0 document(s) failed to import."

    