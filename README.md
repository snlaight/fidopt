<H1 align="center"> FIDOPT</h1>

# TECHNOLOGIES
![NextJS](https://img.shields.io/badge/-NextJS-black?style=round-square&logo=next.js&logoColor=white) ![Node.JS](https://img.shields.io/badge/-Node.js-black?style=round-square&logo=node.js&logoColor=green) ![ExpressJS](https://img.shields.io/badge/-Express-black?style=round-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=round-square&logo=mongodb&logoColor=green) ![Tailwind](https://img.shields.io/badge/-Tailwind-black?style=round-square&logo=tailwindcss&logoColor=blue)
## FULL-STACK APPLICATION
Fidopt is a full-stack application that uses NextJS as a front-end client (tailwindCSS for styling), and MongoDB as the database, with Express.JS as the framework. Initial app framework is deployed on Vercel servers already, available at fidopt.santilaight.io .

## BACKEND / DATABASE
Finished and deployed. Available in the dB folder. All models, routes, authentication and CRUD methods have been tested and deployed. 

## FRONT-END
Still in the design process, some components are being designed and added on daily basis. Functionality will be added when basic design is finished and deployed. 

## NEXTJS with EXPRESS 

The client application uses NextJS (with tailwindCSS for styling) due to the dynamic & wildcard routing available out-of-the-box with this framework. The main entry point is set up in the index.js file located at the root of the project. Here, you'll see the Express server has been modified to use the dB configuration file. This way, as soon as the index.js file is loaded, both the NextJS and MongoDB client are automatically started. 

### AUTHENTICATION
The application uses JWT for authentication -- each token is signed with the roles available in the app: Veterinary or User. This payload determines how each profile interacts with the application.
### CRUD
The backend CRUD implementation is already completed. Only the users with the veterinarian role are allowed full CRUD access, while regular users only have read access to the dog profiles. When it comes to submitting adoption/meeting requests, users have create, read and update access, veterinarians have read, update and destroy acess. 

### REQUESTS
Each submitted request shares the full profile of the user submitting the request as well as the dog they're submitting the request on .
