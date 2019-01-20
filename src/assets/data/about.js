
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - Bio: Stuff about me
  - Credits: test
  - Links: test2
`);

module.exports = { data };