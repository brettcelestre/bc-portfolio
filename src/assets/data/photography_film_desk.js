const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: "2018"
  urlTitle: "2018"
  id: e7343334-f063-488d-a4f3-f664b4365217
  v: v1606270888
  date: 
  size: ''
  orientation: landscape
  description: Working on building this website
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1006
    Medium:
      width: 1100
      height: 738
    Small:
      width: 800
      height: 537

- title: "2016"
  urlTitle: "2016"
  id: 9ffe7d21-9d66-44e2-86fc-d6f0831e442c
  v: v1606270926
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
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
  id: 7a1990eb-c027-41f2-878b-f7e52c536e29
  v: v1606270961
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon FM10 - 50mm
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
  id: 6e4cd933-143f-4165-8549-4a022d68ec98
  v: v1606270998
  date: 
  size: ''
  orientation: landscape
  description: S 11th St, San Jose, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
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
  id: 0d27a5cf-4906-4947-9715-998e78a386e1
  v: v1606271033
  date: 
  size: ''
  orientation: landscape
  description: S 11th St, San Jose, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
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
  id: f4974b39-014f-4a8e-8122-86edc78334ca
  v: v1606271064
  date: 
  size: ''
  orientation: landscape
  description: San Jose State University - CVB
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
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
