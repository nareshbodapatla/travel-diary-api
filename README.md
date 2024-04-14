### Travel Diary Backend
This repository contains the backend server for the Travel Diary platform. It provides API endpoints for user authentication, managing diary entries, and user profile management.

## Prerequisites
Before running the server, make sure you have the following installed:

Node.js (v14.x or higher)
npm (v6.x or higher)
MongoDB (Make sure MongoDB is installed and running on your local machine or set up a remote MongoDB instance)
## Installation
Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/travel-diary-backend.git
```
Navigate to the project directory:

```bash
cd travel-diary-backend
```
## Install dependencies:

```bash
npm install
```
Create a .env file in the project root directory and set the following environment variables:

makefile
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/travel_diary
JWT_SECRET=your_jwt_secret_here
```
Replace your_jwt_secret_here with a secure random string for signing JWT tokens.

## Usage
Start the server:

```bash
npm start
```
The server should now be running on port 3000.

## API Documentation
The API documentation can be found in the API.md file. It contains details about each API endpoint, including request methods, parameters, and response formats.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
