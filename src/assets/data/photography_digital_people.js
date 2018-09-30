const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Grant
  date: 2017 MARCH
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Danielle
  date: 2011
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534
`);

module.exports = { data };
