const mongoose = require('mongoose');

// Define the schema for the Event model
const eventSchema = new mongoose.Schema({
    // The title of the event, required and must be a string.
    title: {
        type: String,
        required: [true, 'Event title is required.'],
        trim: true
    },
    // The type of event (e.g., 'conference', 'workshop').
    type: {
        type: String,
        required: [true, 'Event type is required.'],
        trim: true
    },
    // The status of the event ('Upcoming' or 'Past Event').
    status: {
        type: String,
        required: [true, 'Event status is required.'],
        enum: ['Upcoming', 'Past Event'],
        default: 'Upcoming'
    },
    // A string representing the date of the event.
    date: {
        type: String,
        required: [true, 'Event date is required.'],
        trim: true
    },
    // A string representing the time of the event.
    time: {
        type: String,
        required: [true, 'Event time is required.'],
        trim: true
    },
    // A string representing the location (e.g., 'Online', 'Auditorium').
    location: {
        type: String,
        required: [true, 'Event location is required.'],
        trim: true
    },
    // Optional URL for registration or more information.
    url: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Create the Mongoose model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;