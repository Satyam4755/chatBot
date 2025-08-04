const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

router.get('/', chatbotController.renderChatbotPage);
router.post('/get-answer', chatbotController.getAnswer);

module.exports = router;