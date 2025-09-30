const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/auth');

router.get('/', eventController.getAllEvents);
router.post('/', authMiddleware.isAdmin, eventController.createEvent);
router.patch('/:id', authMiddleware.isAdmin, eventController.updateEvent);
router.delete('/:id', authMiddleware.isAdmin, eventController.deleteEvent);

module.exports = router;