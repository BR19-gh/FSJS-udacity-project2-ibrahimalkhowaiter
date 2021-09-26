
# Storefront Backend Project - # FSJS Project by Ibrahim Alkhowaiter

  

## Introduction

  

A StoreFront backend API written in NodeJS and PostgresSQL. This application has APIs for Users, Products, and Orders.

  

## Getting Started

You need the below prerequisites to run the app without any error:

- docker-compose 
	- To run Postgres Database on Docker

- node 12 
	- To run the app

- yarn 
	- For dependencies management

  
<hr>

### Installing

To run the app, first download all the dependencies via typing:

```bash

yarn

```
-   PS: you can find the needed dependencies in  `package.json`  under  `devDependencies`  and  `dependencies`  tags.
  
<hr>

### Setup environment

  

Then create an `.env`  file and put the following environment variables inside it:

```bash

POSTGRES_PASSWORD="123456"
POSTGRES_USER="postgres"
POSTGRES_DB="store"
POSTGRES_TEST_DB="store_test"
DATABASE_URL="postgresql://postgres:123456@localhost:5432/store"
DATABASE_URL_TEST="postgresql://postgres:123456@localhost:5432/store_test"
ROOT_USER_PASSWORD="password"
SALT_ROUNDS="10"
JWT_SECRET="super-secure-jwt-secret"
PORT="3000"

```

  
<hr>

### To start the Postgres server on Docker, type:

```bash

docker-compose up

```

  

### Check if Postgres has the database `store` via:

```bash

# Connect to Postgres container
docker exec -it <postgres_container_id> bash

# Login to Postgres
psql -U postgres

# List out all the databases and look for store
\l
```

- PS: If ``store`` database is not created, create it via:
```bash
create database store;
```
  
<hr>

### To run the database migrations, type:

```bash

yarn migrations up

```

  
<hr>

### To run the app in watch mode, type:

```bash

yarn run watch

```

### To run the app in using mode, type:

```bash

yarn start

```

  

- PS: The app will run on http://localhost:3000/.

  

- PS: On the first run, the app will create a root user which you can use to create more users:

	```json
	{
	"id": "root",
	"password": "{process.env.ROOT_USER_PASSWORD}",
	"firstname": "Root",
	"lastname": "Root",
	"superuser": true
	}
	```

  
<hr>

### To  test  the app, type:

You should first create test database via:
```bash
create database store_test;
```

<br>

Then change the path of DATABASE_URL to the same path of DATABASE_URL_TEST in `.env` file

<br>

Then type:
```bash
db-migrate up
```

and then finally run:
```bash

yarn test

```

  

- PS: You can use the Postman collection located in the repository for testing.

  
<hr>

### Tools Used
*  [NodeJS](https://nodejs.org/) - The JavaScript runtime

*  [Yarn](https://yarnpkg.com/) - The dependency manager

*  [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - The database migration tool

*  [Express](https://expressjs.com) - The web framework

*  [TypeScript](https://www.typescriptlang.org/) - Types JS extension

*  [Jasmine](https://jasmine.github.io/) - The unit testing framework

## Conclusion

Thank you for reading this, hope it helps you a bit to handle your way on this app.

> Project done by  **Ibrahim Alkhowaiter**  
> It was part of Udacity FSJS nano-degree program
