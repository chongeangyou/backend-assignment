# express-js backend
project study of backend with express js 

# Project Purpose and Feature 
this project is created as the backend API for my previous front-end portfolio project to generate data by my own api.

There are features on this project:
   - Express.js backend with modern architecture.
   - Dockerized environment for seamless deployment.
   - Redis caching and session management.
   - Nginx load balancing for improved performance.
   - Rate limiting to protect from abuse.
   - Role-based permission control.

# Prerequisites
Make sure you have the following installed:

   - Node.js (v18+ recommended)
   - Docker
   - Redis
   - Mongo compass
   - Git
# Installation
   
    npm install
  

# Environment Variables
Create a .env file in the project root with the following variables:
```bash
PORT=3000
CACHE_SERVER=redis
DB_NAME=express-db

JWT_SECRET=
JWT_ACCESS_EXPIRE=1h
JWT_REFRESH_EXPIRE=1w
JWT_REFRESH_SECRET=

API_HOST=localhost:3000
EXPRESS_CONTAINER=express-assignment-express 
```

Or you can copy from .env.template

   
    cp .env.template .env
   
    

# Docker Setup

The project uses docker-compose.yml to define services:
    - app: The Express.js application.
    - redis: Redis service for caching.
    - nginx: Load balancer and reverse proxy.

# Build and run the project
After set up .env in project and install npm install node package already
you can build and rund the project following the docker command:

    ```bash
    docker compose build
    ```
       run this command to build container and pull images for this project

   
    docker compose up -d
    
       run this command to start the services that build in container

    docker compose down
    
        run this command to stop services that running in container
   
# Usage
    - Access rate-limited endpoints defined in the routes folder, but to minimize code it is used in index.js as the main route.
    - Use role-based permissions in your endpoints (see middleware/permissions.js).
    - Load balancer configurations can be found in nginx/vhost.template.
    - You can use any API testing software for test API, like Postman, Insomnia, ... following the routes define or follow the swagger document. 

