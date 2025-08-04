// config/googleSheet.js
const axios = require('axios');
const csv = require('csvtojson');

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GID = process.env.GOOGLE_SHEET_GID;

const fetchSheetData = async () => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;
    const response = await axios.get(url);
    const data = await csv().fromString(response.data);
    return data; // Array of { question, answer }
  } catch (error) {
    console.error('Error fetching sheet data:', error.message);
    return [];
  }
};

module.exports = fetchSheetData;