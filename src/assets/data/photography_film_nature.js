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

- title: Tree
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

- title: Yosemite
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 843
      height: 1200
    Medium:
      width: 632
      height: 900
    Small:
      width: 421
      height: 600
`);

module.exports = { data };