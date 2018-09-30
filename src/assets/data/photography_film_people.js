const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Geoff
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531

- title: Matt 3
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1077
    Medium:
      width: 1100
      height: 790
    Small:
      width: 800
      height: 574
`);

module.exports = { data };
