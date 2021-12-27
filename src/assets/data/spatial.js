
const ymlLoader = require('js-yaml');

// height, width, and depth

// Put these all in one gallery
// Woodworking
// Wire
// Sculpture

// - title: Plant Bench
//   urlTitle: plant-bench
//   date: 2018
//   info: Oak, Glue - 12.5" x 60" x 9.25"
//   description: 
//   href:
//   fontStyles:
//   sizes:
//     Large:
//       width: 873
//       height: 1200
//     Medium:
//       width: 654
//       height: 900
//     Small:
//       width: 436
//       height: 600

// - title: Desk
//   urlTitle: desk
//   date: 2015
//   info: Walnut, Glue - 28.5" x 67" x 38.5"
//   description: This desk uses Uplift Desk legs. Height ranges between 24.5" - 51.5".
//   href:
//   fontStyles:
//   sizes:
//     Large:
//       width: 873
//       height: 1200
//     Medium:
//       width: 654
//       height: 900
//     Small:
//       width: 436
//       height: 600


const data = ymlLoader.load(`
- title: Side Table
  urlTitle: side-table
  id: NULL
  v: NULL
  date: 2012
  size: ''
  orientation: landscape
  arrows: light
  info: Walnut, Glue - 24.5" x 20" x 20"
  description: 
  href:
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Driftwood
  urlTitle: driftwood
  date: 2015
  info: Driftwood, Walnut, Glue - 20" x 5.75" x 5.75"
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

- title: Pen Holder
  urlTitle: pen-holder
  date: 2014
  info: Walnut - 1.75" x 1.75" x 1.75"
  description: 
  href:
  fontStyles:
  sizes:
    Large:
      width: 1018
      height: 1200
    Medium:
      width: 764
      height: 900
    Small:
      width: 509
      height: 600

- title: Toms
  urlTitle: toms
  date: 2012
  info: Steel Wire
  description: Replica of a Toms shoe
  href:
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 877
    Medium:
      width: 1100
      height: 643
    Small:
      width: 800
      height: 468
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