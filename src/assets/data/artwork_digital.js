const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Noah Lennox
    id: 24f2b2cd-8229-4179-aee4-ad48e48aba8b
    v: v1606259242
    urlTitle: noah-lennox
    year: 2012
    month: May
    size: 
    orientation: landscape
    info: Mixed media collage
    arrows: dark
    description: 
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
  
  - title: Three Year
    urlTitle: three-year
    id: 0d66fd50-53ce-4b8b-8dd7-cddf06f05b23
    v: v1606262137
    year: 2012
    month: September
    size: 
    orientation: landscape
    info: Mixed media collage - Nikon D800
    arrows: light
    description: Photos taken somewhere in Washington.
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

  - title: For Reverend Green
    urlTitle: for-reverend-green
    id: 251227b7-5709-47e3-b61a-d1687f4cc9a4
    v: v1606262294
    year: 2010
    month: February
    size: 
    orientation: landscape
    info: 'Photomanipulation - Nikon D50'
    arrows: light
    description: 'Photos taken in Pleasant Hill, CA.'
    sizes:
      Large:
        width: 1500
        height: 996
      Medium:
        width: 1100
        height: 730
      Small:
        width: 800
        height: 531
  
  - title: Progress
    urlTitle: progress
    id: 9f753d77-33c4-4abb-89a9-25d29d7935db
    v: v1606263219
    year: 2010
    month: December
    size: 
    orientation: landscape
    info: Digital collage
    arrows: light
    description: Created with scanned images from various books and magazines.
    sizes:
      Large:
        width: 1500
        height: 1073
      Medium:
        width: 1100
        height: 787
      Small:
        width: 800
        height: 572

  - title: Sleep
    id: 0de60159-32cb-4560-a3f9-f4a1841fefc3
    v: v1606263331
    urlTitle: sleep
    year: 2010
    month: June
    size: 
    orientation: landscape
    info: 'Photomanipulation - Nikon D50'
    arrows: dark
    description: 
    sizes:
      Large:
        width: 1500
        height: 872
      Medium:
        width: 1100
        height: 639
      Small:
        width: 800
        height: 462

  - title: Dufrense
    urlTitle: dufrense
    id: 0017e5c0-118e-426e-a6df-b683cb22b313
    v: v1606263424
    year: 2009
    month: January
    size: 
    orientation: landscape
    info: 'Photomanipulation - Nikon D50'
    arrows: light
    description: ''
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

  - title: For The Last Fucking Time
    urlTitle: for-the-last-fucking-time
    id: f4420b6d-1bf3-47bb-b501-978d99343485
    v: v1606263491
    year: 2007
    month: July
    size: 
    orientation: landscape
    info: Mixed media collage
    arrows: dark
    description: ''
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


// - title: Jeanne-Marie
// urlTitle: jeanne-marie
// date: DECEMBER 2010
// size: 
// orientation: landscape
// info: 'Mixed media collage'
// arrows: light
// description: ''
// sizes:
//   Large:
//     width: 1500
//     height: 998
//   Medium:
//     width: 1100
//     height: 732
//   Small:
//     width: 800
//     height: 532

// - title: AJ
// urlTitle: aj
// date: DECEMBER 2010
// size: 
// orientation: landscape
// info: 'Mixed media collage'
// arrows: dark
// description: ''
// sizes:
//   Large:
//     width: 1500
//     height: 998
//   Medium:
//     width: 1100
//     height: 732
//   Small:
//     width: 800
//     height: 532