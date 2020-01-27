const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Fresh Air
  urlTitle: fresh-air
  date: 2017
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 994
    Medium:
      width: 1100
      height: 729
    Small:
      width: 800
      height: 530

- title: Room
  urlTitle: room
  date: 2016
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 974
    Medium:
      width: 1100
      height: 714
    Small:
      width: 800
      height: 519

- title: Bedroom 11 01 2015
  urlTitle: bedroom-11-01-2015
  date: NOVEMBER 2015
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 957
    Medium:
      width: 1100
      height: 702
    Small:
      width: 800
      height: 510

- title: Living Room
  urlTitle: living-room
  date: 2013
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon Nikomat FTn - 50mm
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
`);

module.exports = { data };
