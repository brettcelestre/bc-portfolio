const ymlLoader = require('js-yaml');

const tech = ymlLoader.load(`
HTML:
  url: https://www.w3.org/html/
SASS:
  url: https://sass-lang.com/
JavaScript:
  url: https://www.javascript.com/
Angular.js:
  url: https://angularjs.org/
Node.js:
  url: https://nodejs.org/en/
Express:
  url: https://expressjs.com/
MongoDB:
  url: https://www.mongodb.com/
React:
  url: https://reactjs.org/
AWS:
  url: https://aws.amazon.com/
`);

module.exports = { tech };