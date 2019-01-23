const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: TCI 01
  urlTitle: tci-01
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 1000
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533

- title: TCI 02
  urlTitle: tci-02
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 988
    Medium:
      width: 1100
      height: 725
    Small:
      width: 800
      height: 527

- title: TCI 03
  urlTitle: tci-03
  date: 
  size: ''
  orientation: portrait
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1090
      height: 1200
    Medium:
      width: 817
      height: 900
    Small:
      width: 545
      height: 600

- title: TCI 04
  urlTitle: tci-04
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 952
    Medium:
      width: 1100
      height: 698
    Small:
      width: 800
      height: 508

- title: TCI 05
  urlTitle: tci-05
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 546
    Medium:
      width: 1100
      height: 400
    Small:
      width: 800
      height: 291

- title: TCI 06
  urlTitle: tci-06
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 609
    Medium:
      width: 1100
      height: 447
    Small:
      width: 800
      height: 325

- title: TCI 07
  urlTitle: tci-07
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 609
    Medium:
      width: 1100
      height: 447
    Small:
      width: 800
      height: 325

- title: TCI 08
  urlTitle: tci-08
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
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

- title: TCI 09
  urlTitle: tci-09
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 957
    Medium:
      width: 1100
      height: 702
    Small:
      width: 800
      height: 511

- title: TCI 10
  urlTitle: tci-10
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
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

- title: TCI 11
  urlTitle: tci-11
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 807
    Medium:
      width: 1100
      height: 592
    Small:
      width: 800
      height: 431

- title: TCI 12
  urlTitle: tci-12
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: dark
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 1129
    Medium:
      width: 1100
      height: 828
    Small:
      width: 800
      height: 602

- title: TCI 13
  urlTitle: tci-13
  date: 
  size: ''
  orientation: landscape
  info: D800, Photoshop
  arrows: light
  description: Image created for TCI | SPX
  sizes:
    Large:
      width: 1500
      height: 772
    Medium:
      width: 1100
      height: 566
    Small:
      width: 800
      height: 412
`);

module.exports = { data };
