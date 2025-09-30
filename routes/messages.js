const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/auth');

router.post('/', messageController.createMessage);
router.get('/', authMiddleware.isAdmin, messageController.getAllMessages);
router.patch('/:id/read', authMiddleware.isAdmin, messageController.markMessageAsRead);
router.delete('/:id', authMiddleware.isAdmin, messageController.deleteMessage);

module.exports = router;