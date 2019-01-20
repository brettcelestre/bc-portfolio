const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: "2016"
  urlTitle: "2016"
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 944
    Medium:
      width: 1100
      height: 692
    Small:
      width: 800
      height: 503

- title: "2015"
  urlTitle: "2015"
  date: 
  size: ''
  orientation: landscape
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

- title: "2013"
  urlTitle: "2013"
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1073
    Medium:
      width: 1100
      height: 787
    Small:
      width: 800
      height: 572

- title: "2012"
  urlTitle: "2012"
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 993
    Medium:
      width: 1100
      height: 728
    Small:
      width: 800
      height: 530

- title: "2011"
  urlTitle: "2011"
  date: 
  size: ''
  orientation: landscape
  description: San Jose State University - CVB
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1075
    Medium:
      width: 1100
      height: 788
    Small:
      width: 800
      height: 573

`);

module.exports = { data };
