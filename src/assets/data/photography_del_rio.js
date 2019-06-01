const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Matt & Brett
  urlTitle: matt-&-brett
  date: 2012
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Taking one of the portraits for the poster art.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 999
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533

- title: Miniature Setup
  urlTitle: miniature-setup
  date: 
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Matt hanging a miniature version of a still life he painted in 2007.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 999
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533
`);

module.exports = { data };
