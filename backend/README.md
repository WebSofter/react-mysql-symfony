## 1. For starting backend
1. docker compose up -d
2. docker exec -it graphic_php bash
3. composer install
4. php bin/console make:migration
5. php bin/console lexik:jwt:generate-keypair

## 2. For starting frontend
1. npm i
2. npm run start

## 3. Additional commands
1. php bin/console doctrine:database:create
2. php bin/console doctrine:migrations:migrate

