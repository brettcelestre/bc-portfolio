const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
  - title: American Indian
    date: '2011'
    size: 16"X10.75"
    orientation: landscape
    info: PAPER & GLUE
    arrows: dark
    description: ''
    sizes:
      Large:
        width: 1500
        height: 1033
      Medium:
        width: 1100
        height: 757
      Small:
        width: 800
        height: 551
`);

module.exports = { data };
