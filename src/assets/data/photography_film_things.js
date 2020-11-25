const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Backyard
  urlTitle: backyard
  id: 7f958b11-2574-48dd-a857-b6a0155dc9e6
  v: v1606270236
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
  id: 46ef8a8e-436e-4f62-b80d-e96c351a3b52
  v: v1606270280
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
  id: 482be488-96ba-474b-9c0d-68c1c5b3118b
  v: v1606270316
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
  id: 8bc37ecf-41fa-45c7-9ec2-812ee07f23d8
  v: v1606270348
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
  id: 5c95ed97-7a0c-43d9-84bf-6f7d193c4947
  v: v1606270378
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
  id: 551af44c-1afb-40b5-88da-46e057ce5dc1
  v: v1606270406
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
  id: cd9f4cd0-fbe9-4c04-8afc-b37347a32e20
  v: v1606270441
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
  id: e8502f72-8aff-4975-b917-1569b42f4fd4
  v: v1606270478
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
  id: 6ad1cedd-123b-4279-a139-a9ab2cbfc98d
  v: v1606270518
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
  id: 368f5987-cb65-4c10-8536-71483e422b98
  v: v1606270557
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
  id: 2db43856-9cd5-4021-80bf-9735b16823ff
  v: v1606270589
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

- title: Desktop
  urlTitle: desktop
  id: ed139829-bda7-4856-a9d3-16ccba1ffc9c
  v: v1606270726
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
  id: 6e994c02-ed2a-4ad0-b9e1-3b857ed01377
  v: v1606270754
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
