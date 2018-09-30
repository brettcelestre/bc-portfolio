
const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`      
- title: Sketch 2
  date:
  size:
  description:
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 884
    Medium:
      width: 1100
      height: 649
    Small:
      width: 800
      height: 472

- title: Sketch 14
  date:
  size:
  description:
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 950
    Medium:
      width: 1100
      height: 697
    Small:
      width: 800
      height: 507
`);

module.exports = { data };
