# FingerStyle Taiwan Frontend

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- docker - [installation](https://docs.docker.com/compose/install/)
- docker-compose - [installation](https://docs.docker.com/compose/install/)
- make

## Getting Started

### development
setup development
```sh
make setup
```

up development services
```sh
make up
```

down development services
```sh
make down
```

restart development services
```sh
make restart
```

### production
build production services
```sh
make build-production
```

start production services
```sh
make start-production
```

restart production services
```sh
make restart-production
```