require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-booking')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const Booking = mongoose.model('Booking', {
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

// Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/availability', async (req, res) => {
  try {
    const { date } = req.query;
    const bookings = await Booking.find({
      date: {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
      }
    });
    const bookedTimes = bookings.map(b => b.time);
    const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
      .filter(time => !bookedTimes.includes(time));
    res.json(availableTimes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});