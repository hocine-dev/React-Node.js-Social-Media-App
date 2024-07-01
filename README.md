React-Node.js Social Media App

Description
-----------
This is a full-stack social media application built with React.js, Node.js, Express, and MongoDB. It allows users to create accounts, post updates, follow other users, and interact through comments and likes.

Features
--------
- User authentication and authorization (JWT)
- CRUD operations for posts and comments
- User profiles with follower/following functionality
- Responsive UI with React Bootstrap

Technologies Used
-----------------
- React.js
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)
- React Bootstrap
- Axios (for API calls)

Installation
------------
To run this project locally, clone the repository and follow these steps:

1. Clone the repository:

   git clone https://github.com/hocine-dev/React-Node.js-Social-Media-App.git

2. Install dependencies for the frontend and backend:

   cd React-Node.js-Social-Media-App
   cd frontend
   npm install

   cd ../backend
   npm install

3. Set up environment variables:

   Create a .env file in the backend directory and configure your MongoDB connection string and JWT secret:

   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. Run the application:

   In separate terminal windows, run the frontend and backend servers:

   # Start frontend (React)
   cd frontend
   npm start

   # Start backend (Node.js/Express)
   cd backend
   npm start

5. Open the app:

   Open http://localhost:3000 in your browser to view the app.

Contributing
------------
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

License
-------
This project is licensed under the MIT License - see the LICENSE file for details.
