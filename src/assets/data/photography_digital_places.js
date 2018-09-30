const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Steep Revine
  date: 2010
  size:
  description: 
  arrows: light
  info: Nikon D50 - 50MM
  sizes:
    Large:
      width: 1500
      height: 997
    Medium:
      width: 1100
      height: 731
    Small:
      width: 800
      height: 532

- title: Treat Overpass
  date: 2011
  size: ''
  description: 
  arrows: light
  info: Nikon D50 - 50MM
  sizes:
    Large:
      width: 1500
      height: 997
    Medium:
      width: 1100
      height: 731
    Small:
      width: 800
      height: 532
`);

module.exports = { data };
