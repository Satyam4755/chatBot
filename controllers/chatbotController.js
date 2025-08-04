const fetchSheetData = require('../config/googleSheet');
const matchQuestion = require('../utils/matchQuestion');

let cachedData = [];

// Preload sheet data on startup
(async () => {
  try {
    cachedData = await fetchSheetData();
    console.log('✅ Sheet data cached successfully');
  } catch (err) {
    console.error('❌ Failed to cache sheet data:', err.message);
  }
})();

// Render chatbot page with all question keywords
exports.renderChatbotPage = async (req, res) => {
  try {
    if (!cachedData.length) cachedData = await fetchSheetData();

    const questions = cachedData
      .map(item => item.QUESTION || item.question || item.KEYWORD)
      .filter(Boolean);

    res.render('chatbot', { questions });
  } catch (err) {
    console.error('❌ Error rendering chatbot page:', err.message);
    res.status(500).send('Failed to load chatbot page.');
  }
};

// Handle question and return response
exports.getAnswer = async (req, res) => {
  try {
    const { message } = req.body;

    if (!cachedData.length) cachedData = await fetchSheetData();

    const matchedData = matchQuestion(message, cachedData);

    if (!matchedData) {
      return res.json({
        reply: "Sorry, I couldn't find a matching response. Please try again with different wording.",
        links: []
      });
    }

    const responseText = matchedData.RESPONSE || matchedData.response || 'No response available.';

    // ✅ Convert filenames to full links
    const links = matchedData.LINKS
      ? matchedData.LINKS.split(/[,;|\n]/).map(link => {
          link = link.trim();
          if (!link.startsWith("http")) {
            // Convert filename to full download URL
            return `https://yourdomain.com/uploads/${encodeURIComponent(link)}`;
          }
          return link;
        })
      : [];

    console.log('Converted Links:', links);

    res.json({
      reply: responseText,
      links
    });

  } catch (err) {
    console.error('❌ Error in getAnswer:', err.message);
    res.status(500).json({
      reply: 'Server error while processing question.',
      links: []
    });
  }
};