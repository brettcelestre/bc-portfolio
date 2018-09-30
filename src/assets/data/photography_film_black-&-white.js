const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Matt
  date: 2012?
  size: 
  description: Brother Matt painting the train interiors for our short film Del Rio.
  arrows: dark
  info: Nikon ??? - 50MM
  sizes:
    Large:
      width: 799
      height: 1200
    Medium:
      width: 599
      height: 900
    Small:
      width: 399
      height: 600

- title: SJSU 1
  date: 2012
  size: 
  description: 
  arrows: light
  info: Nikon ??? - 50MM
  sizes:
    Large:
      width: 809
      height: 1200
    Medium:
      width: 607
      height: 900
    Small:
      width: 405
      height: 600
`);

module.exports = { data };
