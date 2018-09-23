
const ymlLoader = require('js-yaml');

const placesStart = require('../../assets/data/photography_digital_places.js').data[0];
// const manipulationsStart = require('../../assets/data/photography_digital_manipulations.js').data[0];
// const everydayLifeStart = require('../../assets/data/photography_digital_everyday-life.js').data[0];
const natureStart = require('../../assets/data/photography_digital_nature.js').data[0];
const peopleStart = require('../../assets/data/photography_digital_people.js').data[0];

const data = ymlLoader.load(`
- title: People
  href: /photography/digital/people/${peopleStart.title.split(' ').join('-').toLowerCase()}
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
  href: /photography/digital/nature/${natureStart.title.split(' ').join('-').toLowerCase()}
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
  href: /photography/digital/places/${placesStart.title.split(' ').join('-').toLowerCase()}
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

module.exports = { data };



// - title: Everyday Life
//   href: /photography/digital/everyday-life/${everydayLifeStart.title.split(' ').join('-').toLowerCase()}
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
//   href: /photography/digital/desk/${manipulationsStart.title.split(' ').join('-').toLowerCase()}
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