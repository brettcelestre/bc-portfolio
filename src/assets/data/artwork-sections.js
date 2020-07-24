
const ymlLoader = require('js-yaml');
const { startImg } = require('../../utils/utils');

const collage = require('../../assets/data/artwork_collage.js');
const digital = require('../../assets/data/artwork_digital.js');
const sketches = require('../../assets/data/artwork_sketches.js');

// const length = collage.data.length
//   + digital.data.length
//   + sketches.data.length;

const data = ymlLoader.load(`
- title: Digital
  href: /artwork/digital/${startImg(digital).urlTitle}
  length: ${digital.data.length}
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
  href: /artwork/collage/${startImg(collage).urlTitle}
  length: ${collage.data.length}
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
  href: /artwork/sketches/${startImg(sketches).urlTitle}
  length: ${sketches.data.length}
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