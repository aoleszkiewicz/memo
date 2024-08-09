# Develop
docker-compose -f docker-compose.yaml up -d

# Production
docker-compose -f docker-compose.prod.yaml up -d


#Prod Setup

#### Step 1: Pull the latest version of the repository
1. Fetch/fork repo


#### Step 2: Start Docker containers in production mode
1. To start the application in production mode, use the following command: 
# docker-compose -f docker-compose.prod.yaml up -d

#### Step 3: Start Strapi and generate an API token
1. Log in to the Strapi admin panel and generate a new **API Token**.

#### Step 4: Configure Angular environment
1. Paste the generated API token directly into the environment file in the Angular application.
   - **Note:** In the future, all environment variables are planned to be managed via Docker Compose.
   
2. Fill in the environment file (`environment.ts`) according to the following template:
   export const environment = {
     production: true,
     apiUrl: "yourApiUrl e.g., http://localhost:1337/api",
     apiToken: "yourStrapiToken",
     secret: "yourSecretPassword - generate a strong password",
   };

#### Step 5: Restart the container
1. After making changes to the environment file, you may need to restart the container so that the frontend can retrieve the new Strapi token:

#### Step 6: Completion
1. After completing the above steps, the application should be ready to run in a production environment.
