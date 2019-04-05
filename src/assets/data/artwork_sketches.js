
const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Sketch 14
  urlTitle: sketch-14
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: Walk cycle study
  sizes:
    Large:
      width: 1500
      height: 950
    Medium:
      width: 1100
      height: 697
    Small:
      width: 800
      height: 507

- title: Sketch 13
  urlTitle: sketch-13
  date:
  size:
  orientation: landscape
  info: Ink & Marker
  arrows: dark
  description: Louis Armstrong
  sizes:
    Large:
      width: 1500
      height: 938
    Medium:
      width: 1100
      height: 688
    Small:
      width: 800
      height: 500

- title: Sketch 12
  urlTitle: sketch-12
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: ''
  sizes:
    Large:
      width: 1500
      height: 1002
    Medium:
      width: 1100
      height: 735
    Small:
      width: 800
      height: 535

- title: Sketch 11
  urlTitle: sketch-11
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: ''
  sizes:
    Large:
      width: 1500
      height: 980
    Medium:
      width: 1100
      height: 718
    Small:
      width: 800
      height: 523

- title: Sketch 10
  urlTitle: sketch-10
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: View of San Jose from the San Jose State Library
  sizes:
    Large:
      width: 1500
      height: 890
    Medium:
      width: 1100
      height: 653
    Small:
      width: 800
      height: 475

- title: Sketch 9
  urlTitle: sketch-9
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: Some octopuses
  sizes:
    Large:
      width: 1500
      height: 1012
    Medium:
      width: 1100
      height: 742
    Small:
      width: 800
      height: 540

- title: Sketch 8
  urlTitle: sketch-8
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: 
  sizes:
    Large:
      width: 1500
      height: 983
    Medium:
      width: 1100
      height: 721
    Small:
      width: 800
      height: 524

- title: Sketch 7
  urlTitle: sketch-7
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: 
  sizes:
    Large:
      width: 1500
      height: 991
    Medium:
      width: 1100
      height: 726
    Small:
      width: 800
      height: 528

- title: Sketch 6
  urlTitle: sketch-6
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: Hand studies
  sizes:
    Large:
      width: 1500
      height: 979
    Medium:
      width: 1100
      height: 718
    Small:
      width: 800
      height: 522

- title: Sketch 5
  urlTitle: sketch-5
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: Messing around with different forms
  sizes:
    Large:
      width: 1500
      height: 951
    Medium:
      width: 1100
      height: 697
    Small:
      width: 800
      height: 507

- title: Sketch 4
  urlTitle: sketch-4
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: Pattern on my bed sheets
  sizes:
    Large:
      width: 1500
      height: 885
    Medium:
      width: 1100
      height: 649
    Small:
      width: 800
      height: 472

- title: Sketch 3
  urlTitle: sketch-3
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: In a study room at Saint Mary's College in Moraga, CA.
  sizes:
    Large:
      width: 1500
      height: 879
    Medium:
      width: 1100
      height: 645
    Small:
      width: 800
      height: 469

- title: Sketch 2
  urlTitle: sketch-2
  date:
  size:
  orientation: landscape
  info: Ink
  arrows: dark
  description: My friend John's house
  sizes:
    Large:
      width: 1500
      height: 884
    Medium:
      width: 1100
      height: 649
    Small:
      width: 800
      height: 472

- title: Sketch 1
  urlTitle: sketch-1
  date:
  size: 
  orientation: landscape
  info:  Ink
  arrows: dark
  description: During class at SJSU
  sizes:
    Large:
      width: 1500
      height: 986
    Medium:
      width: 1100
      height: 723
    Small:
      width: 800
      height: 526

- title: Sketch 0
  urlTitle: sketch-0
  date: 
  size: 
  orientation: landscape
  info: Ink
  arrows: dark
  description: During class at SJSU
  sizes:
    Large:
      width: 1500
      height: 960
    Medium:
      width: 1100
      height: 704
    Small:
      width: 800
      height: 512
`);

module.exports = { data };
