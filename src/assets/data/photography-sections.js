
const ymlLoader = require('js-yaml');

const clientStart = require('../../assets/data/photography_client.js').data[0];

const data = ymlLoader.load(`
- title: Film
  href: /photography/film/sections
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
  href: /photography/digital/sections
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

- title: Client
  href: /photography/client/${clientStart.title.split(' ').join('-').toLowerCase()}
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
`);

module.exports = { data };