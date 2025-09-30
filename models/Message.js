const mongoose = require('mongoose');

// Define the schema for the Message model
const messageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Sender name is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required.'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message content is required.']
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;