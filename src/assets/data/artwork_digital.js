const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Noah Lennox
    date: 2012 MAY
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
  
  - title: Three Year
    date: 2012 SEPTEMBER
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
`);

module.exports = { data };
