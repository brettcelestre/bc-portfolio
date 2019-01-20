const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Noah Lennox
    urlTitle: noah-lennox
    date: MAY 2012
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
  
  - title: Three Year
    urlTitle: three-year
    date: SEPTEMBER 2012
    size: 
    orientation: landscape
    info: Mixed media collage
    arrows: light
    description: The photos used were taken somewhere in Washington.
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
    date: FEBRUARY 2010
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
    date: DECEMBER 2010
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
    urlTitle: sleep
    date: JUNE 2010
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
  
  - title: Jeanne-Marie
    urlTitle: jeanne-marie
    date: DECEMBER 2010
    size: 
    orientation: landscape
    info: 'Mixed media collage'
    arrows: light
    description: ''
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

  - title: AJ
    urlTitle: aj
    date: DECEMBER 2010
    size: 
    orientation: landscape
    info: 'Mixed media collage'
    arrows: dark
    description: ''
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

  - title: Dufrense
    urlTitle: dufrense
    date: JANUARY 2009
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
    date: JULY 2007
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
