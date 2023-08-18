# SolidJS Admin Dashboard

This project is built using SolidJS and provides an admin dashboard with CRUD functionality for user profiles.

## Project Structure

- **`src/routes`**: This folder contains components that correspond to different routes in the application. For the purpose of this admin dashboard, we primarily use the `root.tsx` as the main component.

- **`src/components`**: Contains reusable components like `UserTable.tsx` and `UserForm.tsx` which are used in the main app component.

- **`src/types`**: Contains type definitions for the project. The `index.ts` file inside this directory defines the `User` interface.

- **`src/root.css`**: A global stylesheet for the application. Add styles that should be available throughout the entire app here.

- **`src/root.tsx`**: The main component of the application. It integrates the `UserTable` and `UserForm` components and manages the state for user profiles.

- **`src/entry-client.tsx`**: The entry point for the client-side part of the application. It hydrates the app on the client side after server-side rendering.

- **`src/entry-server.tsx`**: The entry point for the server-side part of the application. It handles server-side rendering of the app.

## Features

- **User Listing**: Displays a table of user profiles with details like name, age, position, birthday, address, location, and contact number.

- **Sorting & Filtering**: The user table can be sorted and filtered by each column.

- **CRUD Operations**: Users can add, update, and delete user profiles.

- **Pagination**: The user table supports pagination for better navigation through large lists of users.

## Setup & Running

1. **Installation**: Install the required packages using npm:

   ```bash
   npm install
   ```

2. **Running in Development Mode**: Start the development server:

   ```bash
   npm run dev
   ```

3. **Building for Production**: Build the app for production:

   ```bash
   npm run build
   ```

4. **Running in Production Mode**: After building, run the production server:

   ```bash
   npm start
   ```

## Future Enhancements

- Integrate with a backend API for persistent storage of user profiles.
- Add user authentication and authorization for enhanced security.
- Implement advanced filtering and searching capabilities.
