const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Matt & Brett
  urlTitle: matt-&-brett
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: 
`);

module.exports = { data };
