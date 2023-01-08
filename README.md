<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description
Practicando con Nest.js creando una Restful api con bases de datos.

## Installation

### 1. Clonar el repositorio.
### 2. Ejecutar comando:

```bash
$ yarn install
```

### 3. Instalar Nest CLI:

```bash
$ npm i -g @nestjs/cli
```

### 4. Desplegar DB Mongo con Docker

```bash
$ docker-compose up -d
```

### 6. Variables de entorno:
* Clonar el archivo __.env.template__
* Renombrarlo a .env
* Modificar sus variables de entorno.

### 5. Ejecutar en desarrollo:

```bash
$ yarn start:dev
```
or
```bash
$ nest start --watch
```
### 6. Reconstruir la base de datos con la semilla.
   
```
$ GET -> http://localhost:3000/api/v1/seed
```

- Get con curl:
```bash
$ curl --request GET -sL \
     --url 'http://localhost:3000/api/v1/seed'
```

____
## Desplegar en Docker de forma local:
### Build
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
### Run
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```
### Nota

Por defecto, docker-compose usa el archivo .env, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```bash
docker-compose -f docker-compose.prod.yaml up --build
```
____
### Requerimientos - Stack:
* mongodb
* Nestjs
* Docker