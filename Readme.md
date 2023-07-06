## Mern Stack Authentication

This application is a foundational tool for building a MERN stack application with user authentication. It incorporates a single-page application (SPA) workflow using React, Redux, React Router, and React Bootstrap on the front-end. The backend utilizes Express, MongoDB, and Mongoose for the database, with authentication implemented through JSON Web Tokens (JWT) and HTTP-only cookies. State management is handled with Redux, and the Redux Toolkit is employed to simplify development. The application leverages the Vite Build tool for efficient SPA development.

The components of this project are as follows:
* A backend API built with Express and MongoDB.
* Routes for authentication, logout, registration, profile management, and profile updates.
* JWT authentication, securely stored in an HTTP-only cookie.
* Protected routes and endpoints to ensure secure access.
* Custom middleware that verifies the JSON web token and stores it in a cookie.
* Custom error middleware to handle errors.
* A frontend built with React, enabling user registration, login, logout, profile viewing, and profile updating.
* The React Bootstrap UI library for styling and layout.
* React Toastify for displaying notification messages.

## Usage
* To get started, set up a MongoDB database and acquire your MongoDB URI from MongoDB Atlas.

## Env Variables
NODE_ENV=development
PORT=8080
MONGO_URI=mongodb+srv://bahumu:bahumu@mernuath.0ruhbut.mongodb.net/mernuath?retryWrites=true&w=majority
JWT_SECRET=bahumu

## Install dependencies(Frontend & Backend)
npm install
cd frontend
npm install

## Run
* Run frontend (:3000) & backend (:8080)
  npm run dev

* Run backend only
  npm run server

## Build & Deloy
* Create frontend prod build
  cd frontend
  npm run build

  ## Bugs 
  * Have to fix some issues on Postman.
