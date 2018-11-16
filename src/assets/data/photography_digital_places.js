const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Briones
  urlTitle: briones
  date: 
  size: ''
  info: Nikon D800 - 50mm
  arrows: dark
  description: Briones, CA.
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Steep Revine
  urlTitle: steep-revine
  date: 2010
  size:
  info: Nikon D50 - 50mm
  arrows: light
  description: Steep Ravine Cabins and Campground, Mount Tamalpais, CA.
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

- title: Treat Overpass
  urlTitle: treat-overpass
  date: 2011
  size: ''
  info: Nikon D50 - 50mm
  arrows: light
  description: 
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
`);

module.exports = { data };
