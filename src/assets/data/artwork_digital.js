const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Noah Lennox
    date: 2012 MAY
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
    date: 2012 SEPTEMBER
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
    date: 2010 FEBRUARY
    size: ''
    description: PHOTOMANIPULATION - D50
    arrows: dark
    info: ''
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
    date: 2010 DECEMBER
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
    date: 2010 JUNE
    size: ''
    description: PHOTOMANIPULATION - D50
    arrows: dark
    info: ''
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
    date: 2010 DECEMBER
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
    date: 2010 DECEMBER
    size: ''
    description: Mixed Media
    arrows: dark
    info: ''
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
    date: 2009 JANUARY
    size: ''
    description: PHOTOMANIPULATION - D50
    arrows: dark
    info: ''
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
    date: 2007 JULY
    size: ''
    description: MIXED MEDIA COLLAGE
    arrows: dark
    info: ''
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
