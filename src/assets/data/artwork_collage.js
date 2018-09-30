
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: McCauley At War
    date: 2015 FEBRUARY
    size: 16"X20"
    description: PAPER & GLUE
    arrows: dark
    info: Collage started in 2010 and completed in 2015.
    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600
  
  - title: Valley
    date: '2011'
    size: 16"X10.75"
    description: PAPER, GLUE & INK
    arrows: dark
    info: ''
    sizes:
      Large:
        width: 1500
        height: 1031
      Medium:
        width: 1100
        height: 756
      Small:
        width: 800
        height: 550
`);

module.exports = { data };
