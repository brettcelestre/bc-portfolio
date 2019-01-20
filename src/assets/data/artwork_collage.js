// Created entirely out of images from the book Life: World War 2: History's Greatest Conflict in Pictures by Richard B. Stolley. 

const ymlLoader = require('js-yaml');

// - title: Wings - (Find better name)
//   date: 2018
//   size: 20"X16"
//   description: PAPER & GLUE
//   arrows: dark
//   info: 
//   sizes:
//     Large:
//       width: 899
//       height: 1200
//     Medium:
//       width: 674
//       height: 900
//     Small:
//       width: 499
//       height: 600

// - title: Flower - (Find a good name)
//   date: 2014
//   size: 8"X20"??????
//   description: PAPER & GLUE
//   arrows: dark
//   info: 
//   sizes:
//     Large:
//       width: 899
//       height: 1200
//     Medium:
//       width: 674
//       height: 900
//     Small:
//       width: 499
//       height: 600

// - title: Electric Ladyland
//   date: 2009
//   size: 14"X17"
//   description: PAPER & GLUE
//   arrows: dark
//   info: 
//   sizes:
//     Large:
//       width: 899
//       height: 1200
//     Medium:
//       width: 674
//       height: 900
//     Small:
//       width: 499
//       height: 600

// - title: LCD
//   date: 2007
//   size: 13"X16"
//   description: PAPER, GLUE & INK
//   arrows: dark
//   info: My first collage. Created to get away from the computer screen. This launched my passion for creating collages and collecting collage material.
//   sizes:
//     Large:
//       width: 899
//       height: 1200
//     Medium:
//       width: 674
//       height: 900
//     Small:
//       width: 499
//       height: 600

// - title: Owl -  from SEVI - Find better name. "Decisions"?
//   date: 201????
//   size: 8"X20"??????
//   description: PAPER & GLUE
//   arrows: dark
//   info: 
//   sizes:
//     Large:
//       width: 899
//       height: 1200
//     Medium:
//       width: 674
//       height: 900
//     Small:
//       width: 499
//       height: 600


const data = ymlLoader.load(`
  - title: McCauley At War
    urlTitle: mccauley-at-war
    date: 2015 FEBRUARY
    size: 16" x 20"
    orientation: portrait
    info: Paper, Glue
    arrows: dark
    description: "Started in 2010 and completed in 2015. Created entirely out of images from the book Life: World War 2: History's Greatest Conflict in Pictures by Richard B. Stolley."
    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600
  
  - title: Valley
    urlTitle: valley
    date: '2011'
    size: 16" X 10.75"
    orientation: landscape
    info: Paper, Glue, & Ink
    arrows: light
    description: 'hi'
    sizes:
      Large:
        width: 1500
        height: 1031
      Medium:
        width: 1100
        height: 756
      Small:
        width: 800
        height: 550
        
  - title: American Indian
    urlTitle: american-indian
    date: '2011'
    size: 16" X 10.75"
    orientation: landscape
    info: Paper & Glue
    arrows: dark
    description: ''
    sizes:
      Large:
        width: 1500
        height: 1033
      Medium:
        width: 1100
        height: 757
      Small:
        width: 800
        height: 551
`);

module.exports = { data };
