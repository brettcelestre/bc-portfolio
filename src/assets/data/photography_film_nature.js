const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Fall
  date: 
  size: ''
  description: Pleasant Hill, CA
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

- title: Mexico
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1072
    Medium:
      width: 1100
      height: 786
    Small:
      width: 800
      height: 572
`);

module.exports = { data };
