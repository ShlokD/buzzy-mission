const verbsList = require('./verbs.js');
const buzzWordList = require('./buzzwords.js');

const generateRandomInt = (howMany) => Math.floor(Math.random() * howMany) + 1;

const getVerbs = () => {
  verbs = [];
  for(let i = 0; i < 3; ++i) {
    verbs.push(verbsList[generateRandomInt(verbsList.length - 1)].trim());
  }
  return verbs;
};

const getBuzzWords = () => {
  buzzWords = [];
  for(let i = 0; i < 3; ++i) {
    const randomBuzzWord = buzzWordList[generateRandomInt(buzzWordList.length - 1)].trim();
    buzzWords.push(randomBuzzWord);
  }
  return buzzWords;
};

const generate = () => {
  const verbs = getVerbs();
  const buzzwords = getBuzzWords();
  const statement = `Our mission is to ${verbs[0]} and ${verbs[1]} ${buzzwords[0]} in order to ${verbs[2]} ${buzzwords[1]} for ${buzzwords[2]}.`;
  return statement.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(generate());
