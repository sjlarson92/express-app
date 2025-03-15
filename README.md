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
   npm i -D nodemon ts-node concurrently # Nodemon is a utility library that automatically restarts a Node-based application upon detecting file changes
   ```