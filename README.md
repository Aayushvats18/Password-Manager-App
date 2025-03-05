# Password Manager

## Overview
Password Manager is a secure and efficient web application built with React.js, allowing users to store and manage their passwords for various websites. It features seamless password storage in MongoDB and provides an easy-to-use interface to copy stored passwords securely.

## Features
- Securely store passwords for different websites.
- Copy stored passwords with a single click.
- User-friendly React.js interface.
- Encrypted password storage using MongoDB.
- Responsive and intuitive design.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS (or any other styling framework)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/password-manager.git
   cd password-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage
1. Register/Login to access the dashboard.
2. Add new website credentials (URL, username, and password).
3. View and copy stored passwords securely.
4. Log out when finished.

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user and get a token |
| GET | `/api/passwords` | Get all stored passwords |
| POST | `/api/passwords` | Store a new password |
| DELETE | `/api/passwords/:id` | Delete a stored password |



## Contributing
Feel free to contribute to this project. Fork the repo and submit a pull request with improvements!



