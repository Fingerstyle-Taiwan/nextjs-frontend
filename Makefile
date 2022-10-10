CONTAINER_NAME=fingerstyle-frontend-dev-container
DOCKER_COMPOSE_OPTS= -f docker-compose.dev.yml 

define docker_compose_run
	@docker-compose $(DOCKER_COMPOSE_OPTS) run frontend sh -c "$(1)"
endef

define docker_compose
	@docker-compose $(DOCKER_COMPOSE_OPTS) $(1)
endef

env:
	@echo CONTAINER_NAME=$(CONTAINER_NAME) > .env

build:
	@docker build --no-cache --target dev -t fingerstyle-frontend-dev .

setup: env build 

up:
	$(call docker_compose, up -d)

restart:
	$(call docker_compose, restart)

down:
	$(call docker_compose, down)

# docker_compose_run example
# test:
# 	$(call docker_compose_run, echo 123)

build-production:
	@docker build --no-cache -t fingerstyle-frontend .

start-production:
	@docker-compose up -d

restart-production:
	@docker-compose down
	@docker-compose up -d

prettier:
	yarn run prettier

lint:
	yarn run lint