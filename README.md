Insta-React-App

A simple Instagram-like React application where users can view profiles, follow/unfollow, and update profile information.
This project demonstrates full CRUD functionality with React and a JSON-based backend.

Project Overview

View Profiles (Read): Fetch and display user profiles from the backend.

Update Profile (Update): Edit username or profile picture.

Follow Users (Create): Click "Follow" to create a new follow relationship.

Unfollow Users (Delete): Click "Unfollow" to remove the follow relationship.

Full CRUD Implementation: All Create, Read, Update, Delete operations are fully functional.

Responsive UI: Designed with React and Bootstrap for a clean layout.

Technologies Used

React, JSX, Bootstrap

JSON Server (for backend)

Axios (HTTP requests)

React Router DOM

Screenshots

Home Page


Profile Page


How to Run the Project

Install dependencies:

npm install


Start the development server:

npm run dev


In another terminal tab, start the JSON server:

npx json-server --watch db/data.json --port 3000


Open your browser and go to http://localhost:5173
 to view the app.

License

Insta-React-App is an open-source project that demonstrates full CRUD functionality using React and a JSON-based backend.

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or educational purposes.
