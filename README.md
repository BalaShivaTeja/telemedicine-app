# Telemedicine Appointment System

A full-stack telemedicine appointment booking system built with React.js frontend and Node.js/Express backend.

## Features

- Book medical appointments online
- View all scheduled appointments
- Real-time appointment management
- RESTful API backend
- MongoDB database integration

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

### Frontend
- React.js 18
- Axios for API calls
- Hooks (useState, useEffect)

## Project Structure

```
telemedicine-app/
├── backend/
│   ├── models/
│   │   └── Appointment.js
│   ├── routes/
│   │   └── appointments.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB (if using local installation):
```bash
mongod
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. Open your browser and go to `http://localhost:3000`
2. Fill in the appointment booking form:
   - Patient Name
   - Doctor Name
   - Date
   - Time
3. Click "Book Appointment"
4. View all appointments in the list below the form

## API Endpoints

### Get All Appointments
```
GET /api/appointments
```

### Create New Appointment
```
POST /api/appointments
Content-Type: application/json

{
  "patientName": "John Doe",
  "doctorName": "Dr. Smith",
  "date": "2025-11-15",
  "time": "10:00"
}
```

## Deployment

### Backend Deployment (Heroku/Render)

1. Create account on Render or Heroku
2. Create new web service
3. Connect your GitHub repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: 5000

### Frontend Deployment (Vercel/Netlify)

1. Create account on Vercel or Netlify
2. Import your GitHub repository
3. Set base directory: `frontend`
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Update API endpoint in `frontend/src/App.js` to your deployed backend URL

### Database (MongoDB Atlas)

1. Create free account at MongoDB Atlas
2. Create a new cluster
3. Get connection string
4. Update in `backend/server.js` or use environment variable

## Environment Variables

Create `.env` file in backend directory:
```
MONGODB_URI=mongodb://127.0.0.1:27017/telemedicine
PORT=5000
```

For production, use MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/telemedicine
```

## Future Enhancements

- User authentication and authorization
- Video call integration (WebRTC/Twilio)
- Email notifications
- Appointment cancellation
- Doctor availability calendar
- Patient medical history
- Prescription management

## Contributing

Feel free to fork this project and submit pull requests.

## License

MIT License

## Author

BalaShivaTeja

## Acknowledgments

- Built as part of healthcare projects portfolio
- Designed for telemedicine and remote healthcare services
