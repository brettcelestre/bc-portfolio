const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Me
  urlTitle: me
  date: 
  size: 
  description: 
  arrows: light
  info: Nikon ??? - 50MM
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

- title: Jeanne-Marie
  urlTitle: jeanne-marie
  date: 
  size: 
  description: Nikon ??? - 50MM
  arrows: dark
  info: Taken in Castle Rock, Walnut Creek
  sizes:
    Large:
      width: 1500
      height: 1004
    Medium:
      width: 1100
      height: 736
    Small:
      width: 800
      height: 535

- title: Matt
  urlTitle: matt
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

- title: Santa Cruz
  urlTitle: santa-cruz
  date: 2012
  size: 
  description: 
  arrows: light
  info: Nikon ??? - 50MM
  sizes:
    Large:
      width: 1500
      height: 1004
    Medium:
      width: 1100
      height: 736
    Small:
      width: 800
      height: 535

- title: SJSU 0
  urlTitle: sjsu-0
  date: 2012
  size: 
  description: 
  arrows: light
  info: Nikon ??? - 50MM
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

- title: SJSU 1
  urlTitle: sjsu-1
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
