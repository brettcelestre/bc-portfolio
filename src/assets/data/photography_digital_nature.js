const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Briones Sunset
  urlTitle: briones-sunset
  date: 2013
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Briones, CA
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
  urlTitle: steep-revine
  date: 2010
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Steep Ravine Cabins and Campground, Mount Tamalpais, CA
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

- title: Eugene
  urlTitle: eugene
  date: 2010
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Eugene, OR
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
