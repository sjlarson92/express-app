# express-app

## Setting up app

1. Create bare bones
    ```bash
    npm init -y # create package.json
    
    npm i express dotenv # install dependecies (Express and dotEnv)
    ```
2. Setup .env
   1. Create .env file in root 
      - Add PORT=3000 to file
   2. Create src folder in root
   3. Create index.ts file in src
      - Follow steps [here](https://blog.logrocket.com/how-to-set-up-node-typescript-express/) 
      - Make it look like [index.ts](src/index.ts)
      
3. Add TypeScript
   ```bash
   npm i -D typescript @types/express @types/node # Install typescript and types for express and node
   
   npx tsc --init # Generate tsconfig.json file
   ```
   
   - Modify tsconfig.json to look like [tsconfig.json](tsconfig.json)
   - Run app `npx ts-node src/index.ts # Need to use npx as node cannot run a .ts file` 
      
4. Watch file changes
   ```bash
   # Nodemon is a utility library that automatically restarts 
   # a Node-based application upon detecting file changes
   npm i -D nodemon ts-node concurrently 
   ```
   
5. Update Scripts
   ```bash
   # Update scripts in package json 
   "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
   }
   ```
   
### Local PostgreSQL & Prisma

   ```bash
   # add prisma dependency
   npm i prisma -D
   
   # create prisma schema
   npx prisma init
   ```

- When setting locally it's important to ensure the user has
  the correct permission otherwise migrations will not run
  properly

```bash
# Create the user with appropriate privileges:
CREATE USER your_user WITH PASSWORD 'your_password';

# Grant the necessary roles:
ALTER USER your_user WITH CREATEDB;

# Create the database with the user as the owner:
CREATE DATABASE your_database_name OWNER your_user;

# Connect to the database and set up schema permissions:
\c your_database_name
GRANT ALL PRIVILEGES ON SCHEMA public TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO your_user;

# Add Database connection string to .env file that Prisma generated
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Add Data source to schema.prisma file
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

```
- Create models in schema.primsa file
```bash
# Create a new SQL migration file for this migration
# Runs the SQL migration file against the database
npx prisma migrate dev --name init
 
npx prisma generate # Run after any changes to models to generate migrations with changes
npx prisma migrate dev --name model_change # run migration
npx prisma migrate deploy # Run existing migrations
```