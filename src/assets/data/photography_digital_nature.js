const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Briones Sunset
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1002
    Medium:
      width: 1100
      height: 735
    Small:
      width: 800
      height: 534

- title: Steep Revine
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50mm
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

- title: Beaverton
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1000
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533
`);

module.exports = { data };
