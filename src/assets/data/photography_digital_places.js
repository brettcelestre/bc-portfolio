const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Briones
  urlTitle: briones
  id: 6da9ba9b-19e1-494d-8822-f64f472f87f7
  v: v1606275861
  date: JULY 2012
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Driving around Briones, CA with Kyle and Zhou
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
  id: 2333def5-a598-471e-8a37-abdb5c04fe54
  v: v1606275901
  date: DECEMBER 2011
  size:
  orientation: landscape
  info: Nikon D50 - 50mm
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

- title: Treat Overpass
  urlTitle: treat-overpass
  id: fa1357ae-94fb-4597-a578-a1fc32ac361f
  v: v1606275931
  date: JUNE 2011
  size: ''
  orientation: landscape
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
