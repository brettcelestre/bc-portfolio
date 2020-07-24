
const ymlLoader = require('js-yaml');
const { startImg } = require('../../utils/utils');

const places = require('../../assets/data/photography_digital_places.js');
// const manipulationsStart = require('../../assets/data/photography_digital_manipulations.js');
// const everydayLifeStart = require('../../assets/data/photography_digital_everyday-life.js');
const nature = require('../../assets/data/photography_digital_nature.js');
const people = require('../../assets/data/photography_digital_people.js');

const length = places.data.length
  + nature.data.length
  + people.data.length;

const data = ymlLoader.load(`
- title: People
  href: /photography/digital/people/${startImg(people).urlTitle}
  length: ${people.data.length}
  fontStyles:
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

- title: Nature
  href: /photography/digital/nature/${startImg(nature).urlTitle}
  length: ${nature.data.length}
  fontStyles:
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

- title: Places
  href: /photography/digital/places/${startImg(places).urlTitle}
  length: ${places.data.length}
  fontStyles:
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
`);

module.exports = { data, length };



// - title: Everyday Life
//   href: /photography/digital/everyday-life/${startImg(everydayLife).urlTitle}
//   fontStyles:
//   sizes:
//     Large:
//       width: 1500
//       height: 998
//     Medium:
//       width: 1100
//       height: 732
//     Small:
//       width: 800
//       height: 532

// - title: Manipulations
//   href: /photography/digital/desk/${startImg(manipulations).urlTitle}
//   fontStyles:
//   sizes:
//     Large:
//       width: 1500
//       height: 998
//     Medium:
//       width: 1100
//       height: 732
//     Small:
//       width: 800
//       height: 532