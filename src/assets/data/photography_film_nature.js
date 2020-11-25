const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Summer
  urlTitle: summer
  id: 03518c13-de1c-40f4-838d-4432899bc753
  v: v1606268366
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
  id: e4dfed56-0610-4d57-ad1b-dac3286f8edc
  v: v1606268398
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
  id: d94a9432-37eb-4732-966a-bed0d853379b
  v: v1606268431
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
  id: c101dcd5-6487-4f47-8ea4-6a7addb5a02a
  v: v1606268466
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
  id: d4d59d84-5c77-47a7-82d3-96f429f35705
  v: v1606268499
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
  id: 1a6ac4e0-5ca1-4b8e-b334-a7144404d841
  v: v1606268525
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
