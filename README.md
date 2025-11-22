# Insta-React-App

A simple Instagram-like React application where users can view profiles, follow/unfollow, and update profile information.  
This project demonstrates full CRUD functionality with React and a JSON-based backend.

## Project Overview

- **View Profiles (Read):** Fetch and display user profiles from the backend.  
- **Update Profile (Update):** Edit username or profile picture.  
- **Follow Users (Create):** Click "Follow" to create a new follow relationship.  
- **Unfollow Users (Delete):** Click "Unfollow" to remove the follow relationship.  
- **Full CRUD Implementation:** All Create, Read, Update, Delete operations are fully functional.  
- **Responsive UI:** Designed with React and Bootstrap for a clean layout.  

## Technologies Used

- React, JSX, Bootstrap  
- JSON Server (for backend)  
- Axios (HTTP requests)  
- React Router DOM  

## Screenshots

**Home Page**  

![Home Page](https://github.com/user-attachments/assets/ed9a3846-0d49-4aa4-a56c-7c0139106780)

**Profile Page**  

![Profile Page](https://github.com/user-attachments/assets/79a5558d-e475-4fac-adc4-e6a95e3de513)

## How to Run the Project

1. Install dependencies:  
   ```bash
   npm install
   
2. Start the development server:
   ```bash
   npm run dev

3. In another terminal tab, start the JSON server:
    ```bash
    npx json-server --watch db/data.json --port 3000

4. After both servers are running, open your browser and enter the following URL to view the app:
   ```bash
   http://localhost:5173


## License

Insta-React-App is an open-source project that demonstrates full CRUD functionality using React and a JSON-based backend.

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or educational purposes.
