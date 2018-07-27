
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Client
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Digital
  fontStyles:

- title: Film
  fontStyles:
`);

module.exports = { data };