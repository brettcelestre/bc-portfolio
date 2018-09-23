
const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Sketch 0
  date: 
  size: 
  description:
  arrows: dark
  info: 
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

- title: Sketch 1
  date:
  size: 
  description: 
  arrows: dark
  info: ''
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
      
- title: Sketch 2
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 3
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 4
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 5
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 6
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 7
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 8
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 9
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 10
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 11
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 12
  date:
  size:
  description:
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
      height: 535

- title: Sketch 13
  date:
  size:
  description:
  arrows: dark
  info: ''
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

- title: Sketch 14
  date:
  size:
  description:
  arrows: dark
  info: ''
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
`);

module.exports = { data };
