
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Del Rio
`);

module.exports = { data };