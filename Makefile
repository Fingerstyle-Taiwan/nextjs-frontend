setup:
	@docker build --no-cache --target dev -t fingerstyle-frontend-dev .

up:
	@docker-compose -f docker-compose.dev.yml up -d

restart:
	@docker-compose -f docker-compose.dev.yml restart

down:
	@docker-compose -f docker-compose.dev.yml down

build-production:
	@docker build --no-cache -t fingerstyle-frontend .

start-production:
	@docker-compose up -d

restart-production:
	@docker-compose down
	@docker-compose up -d

