
const ymlLoader = require('js-yaml');

// Put these all in one gallery
// Woodworking
// Wire
// Sculpture

const data = ymlLoader.load(`
- title: Driftwood
  urlTitle: driftwood
  date: 2015
  info: Driftwood, Walnut, Glue
  description: 
  href:
  fontStyles:
  sizes:
    Large:
      width: 873
      height: 1200
    Medium:
      width: 654
      height: 900
    Small:
      width: 436
      height: 600
`);

module.exports = { data };

// Driftwood - Description
// I found this piece of driftwood and held onto it for a few years before mounting it.


// - title: Side Table
//   href:
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

// - title: Wire Form 1
//   href:
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