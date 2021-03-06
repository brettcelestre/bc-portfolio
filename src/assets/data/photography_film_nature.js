const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Summer
  urlTitle: summer
  date: 2018
  size: ''
  orientation: landscape
  description: Taken in Madrid, Spain
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531

- title: Deer
  urlTitle: deer
  date: 2016
  size: ''
  orientation: landscape
  description: Mount Diablo, California
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 926
    Medium:
      width: 1100
      height: 679
    Small:
      width: 800
      height: 494

- title: Fall
  urlTitle: fall
  date: 2010
  size: ''
  orientation: landscape
  description: Pleasant Hill, CA
  arrows: light
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1078
    Medium:
      width: 1100
      height: 791
    Small:
      width: 800
      height: 575

- title: Mexico
  urlTitle: mexico
  date: JANUARY 2011
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1072
    Medium:
      width: 1100
      height: 786
    Small:
      width: 800
      height: 572

- title: Tree
  urlTitle: tree
  date: 2012
  size: ''
  orientation: landscape
  description: Caples Lake, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1077
    Medium:
      width: 1100
      height: 790
    Small:
      width: 800
      height: 574

- title: Yosemite
  urlTitle: yosemite
  date: 2013
  size: ''
  orientation: landscape
  description: Yosemite, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 843
      height: 1200
    Medium:
      width: 632
      height: 900
    Small:
      width: 421
      height: 600
`);

module.exports = { data };
