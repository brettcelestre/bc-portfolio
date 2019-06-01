const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Living Room
  urlTitle: living-room
  date: 
  size: 
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 983
    Medium:
      width: 1100
      height: 721
    Small:
      width: 800
      height: 524

- title: Me
  urlTitle: me
  date: 
  size: 
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
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
  date: MARCH 2013
  size: 
  orientation: landscape
  description: Nikon Nikomat FTn - 50mm
  arrows: dark
  info: Taken in Castle Rock, Walnut Creek, CA
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
  date: MARCH 2013
  size: 
  orientation: portrait
  description: My brother Matt painting the train interiors for our short film Del Rio
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
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
  date: 2013
  size: 
  orientation: landscape
  description: Taken while on a skate trip to Santa Cruz, CA
  arrows: light
  info: Nikon Nikomat FTn - 50mm
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
  date: 2013
  size: 
  orientation: landscape
  description: This was taken around 1AM while biking around San Jose State University
  arrows: light
  info: Nikon Nikomat FTn - 50mm
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
  orientation: portrait
  description: 
  arrows: dark
  info: Nikon ??? - 50mm
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
