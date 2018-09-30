const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: TCI 02
  date: 2010 DECEMBER
  size: ''
  description: D800, Photoshop
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 988
    Medium:
      width: 1100
      height: 725
    Small:
      width: 800
      height: 527

- title: TCI 11
  date: 2010 DECEMBER
  size: ''
  description: D800, Photoshop
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 807
    Medium:
      width: 1100
      height: 592
    Small:
      width: 800
      height: 431
`);

module.exports = { data };
