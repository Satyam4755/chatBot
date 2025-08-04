const stringSimilarity = require('string-similarity');

const matchQuestion = (input, dataset) => {
  const lowerInput = input.toLowerCase(); // Convert user input to lowercase
  const keywords = dataset.map(item => item.KEYWORD.toLowerCase()); // Convert each keyword to lowercase

  const matches = stringSimilarity.findBestMatch(lowerInput, keywords);

  const bestMatch = matches.bestMatch;
  const bestIndex = matches.bestMatchIndex;

  if (bestMatch.rating > 0.6) {
    return dataset[bestIndex]; // Will return original item: { KEYWORD, RESPONSE, LINKS }
  } else {
    return null;
  }
};

module.exports = matchQuestion;