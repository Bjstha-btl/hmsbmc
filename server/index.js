import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/rooms', (req, res) => {
  // TODO: Implement rooms API
  res.json({ message: 'Rooms API endpoint' });
});

app.get('/api/students', (req, res) => {
  // TODO: Implement students API
  res.json({ message: 'Students API endpoint' });
});

app.get('/api/bookings', (req, res) => {
  // TODO: Implement bookings API
  res.json({ message: 'Bookings API endpoint' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});