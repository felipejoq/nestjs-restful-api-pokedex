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

### Requerimientos - Stack:
* mongodb
* Nestjs