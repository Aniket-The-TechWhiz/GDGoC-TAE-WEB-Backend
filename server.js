// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const eventRoutes = require('./routes/events');
const messageRoutes = require('./routes/messages');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in the .env file!');
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the event routes
app.use('/api/events', eventRoutes);

// Use the message routes
app.use('/api/messages', messageRoutes);

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});