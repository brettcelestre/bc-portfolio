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
    id: d33c218b-a29d-475b-a784-0c6aed0e4be5
    urlTitle: mccauley-at-war
    date: FEBRUARY 2015
    size: 16" x 20"
    src: McCauley_At_War_Large_azn6mx
    orientation: portrait
    info: Paper & Glue
    arrows: dark
    description: "Created entirely out of images from the book Life: World War 2: History's Greatest Conflict in Pictures by Richard B. Stolley."
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
    id: 8bf8a0cc-c481-45af-a147-44bd9a113437
    urlTitle: valley
    date: '2011'
    size: 16" x 10.75"
    src: 8bf8a0cc-c481-45af-a147-44bd9a113437_ju237x
    orientation: landscape
    info: Paper, Glue, & Ink
    arrows: light
    description: Created for a color theory painting class.
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

  - title: Electric Ladyland
    id: c970837f-dc49-42af-9f89-319afb54dc19
    urlTitle: electric-ladyland
    date: JANUARY 2009
    src: Electric_Ladyland_Large_sna6zk
    size: 14" x 17"
    orientation: portrait
    info: Paper & Glue
    arrows: dark
    description: Visual interpretation of the album.
    descriptionUpdate: <Link to="/watch/electric-ladyland/behind-the-scenes"><span="image-viewer-internal-link">Timelapse making of video.</span></Link>
    sizes:
      Large:
        width: 1059
        height: 1200
      Medium:
        width: 794
        height: 900
      Small:
        width: 529
        height: 600

  - title: LCD
    id: bf3b4b8b-31b5-481e-98b1-fafbb076ff76
    urlTitle: lcd
    date:  JANUARY 2007
    size: 16" x 13"
    src: LCD_Large_fhpjqe
    info: Paper & Glue
    orientation: landscape
    arrows: dark
    description: My first collage. Created to get away from the computer screen. Yet here we are.
    descriptionUpdate: This launched my passion for creating collages and collecting collage material.
    sizes:
      Large:
        width: 1441
        height: 1200
      Medium:
        width: 1081
        height: 900
      Small:
        width: 721
        height: 600
`);

module.exports = { data };

// - title: American Indian
// urlTitle: american-indian
// date: '2011'
// size: 16" x 10.75"
// orientation: landscape
// info: Paper & Glue
// arrows: dark
// description: ''
// sizes:
//   Large:
//     width: 1500
//     height: 1033
//   Medium:
//     width: 1100
//     height: 757
//   Small:
//     width: 800
//     height: 551