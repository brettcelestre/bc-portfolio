const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: "730"
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1078
    Medium:
      width: 1100
      height: 791
    Small:
      width: 800
      height: 575

- title: Santa Clara
  date: 
  size: ''
  description: Downtown San Jose, CA.
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 979
    Medium:
      width: 1100
      height: 718
    Small:
      width: 800
      height: 522
`);

module.exports = { data };
