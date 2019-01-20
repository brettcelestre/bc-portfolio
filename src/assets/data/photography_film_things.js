const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Bedroom 11 01 2015
  urlTitle: bedroom-11-01-2015
  date: 2015 NOVEMBER
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Mixed Media
  sizes:
    Large:
      width: 1500
      height: 957
    Medium:
      width: 1100
      height: 702
    Small:
      width: 800
      height: 510
`);

module.exports = { data };
