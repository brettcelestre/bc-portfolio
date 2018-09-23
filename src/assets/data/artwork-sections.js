
const ymlLoader = require('js-yaml');

const collageStart = require('../../assets/data/artwork_collage.js').data[0];
const digitalStart = require('../../assets/data/artwork_digital.js').data[0];
const sketchesStart = require('../../assets/data/artwork_sketches.js').data[0];

const data = ymlLoader.load(`
- title: Digital
  href: /artwork/digital/${digitalStart.title.split(' ').join('-').toLowerCase()}
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

- title: Collage
  href: /artwork/collage/${collageStart.title.split(' ').join('-').toLowerCase()}
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

- title: Sketches
  href: /artwork/sketches/${sketchesStart.title.split(' ').join('-').toLowerCase()}
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


// - title: Drawings
//   href: hi
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