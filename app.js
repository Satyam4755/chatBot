const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
const PORT = process.env.PORT || 3407;

app.set('view engine', 'ejs');

// ✅ ADD THIS LINE
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(chatbotRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});