const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Briones Sunset
  urlTitle: briones-sunset
  id: c9ad3b72-28e0-4602-a01c-a807c1fc4b10
  v: v1606275324
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
  id: aa5f0cc0-4b81-4330-b45c-eab07f110713
  v: v1606275369
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
  id: 4a65c239-4ff5-46a5-8ed6-6806f5021745
  v: v1606275401
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
