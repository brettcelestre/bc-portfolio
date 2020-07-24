const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Backyard
  urlTitle: backyard
  date: 2019
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1007
    Medium:
      width: 1100
      height: 739
    Small:
      width: 800
      height: 537

- title: Plant Bench
  urlTitle: plant-bench
  date: 2019
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 729
    Small:
      width: 800
      height: 531

- title: Collage Setup
  urlTitle: collage-setup
  date: 2018
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1009
    Medium:
      width: 1100
      height: 740
    Small:
      width: 800
      height: 538

- title: Skateboards
  urlTitle: skateboards
  date: 2018
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 35mm
  sizes:
    Large:
      width: 1500
      height: 1009
    Medium:
      width: 1100
      height: 740
    Small:
      width: 800
      height: 538

- title: Matt's Bookshelf
  urlTitle: matts-bookshelf
  date: 2018
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon FM10 - 35mm
  sizes:
    Large:
      width: 1500
      height: 1008
    Medium:
      width: 1100
      height: 739
    Small:
      width: 800
      height: 537

- title: Painting Table
  urlTitle: painting-table
  date: 2017
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 35mm
  sizes:
    Large:
      width: 1500
      height: 940
    Medium:
      width: 1100
      height: 689
    Small:
      width: 800
      height: 501

- title: Collage
  urlTitle: collage
  date: 2017
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 35mm
  sizes:
    Large:
      width: 1500
      height: 935
    Medium:
      width: 1100
      height: 686
    Small:
      width: 800
      height: 499

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

- title: Parking Lot Cat
  urlTitle: parking-lot-cat
  date: 2017
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 960
    Medium:
      width: 1100
      height: 704
    Small:
      width: 800
      height: 512

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

- title: Desktop
  urlTitle: desktop
  date: 2007
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon N55 - 18mm
  sizes:
    Large:
      width: 1500
      height: 1064
    Medium:
      width: 1100
      height: 780
    Small:
      width: 800
      height: 568

- title: Mirrors
  urlTitle: mirrors
  date: 2007
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 996
    Medium:
      width: 1100
      height: 731
    Small:
      width: 800
      height: 531
`);

module.exports = { data };
