const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: "730"
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1078
    Medium:
      width: 1100
      height: 791
    Small:
      width: 800
      height: 575

- title: "780"
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531

- title: Mexico
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 1056
    Medium:
      width: 1100
      height: 774
    Small:
      width: 800
      height: 563

- title: Santa Clara
  date: 
  size: ''
  description: Downtown San Jose, CA.
  arrows: light
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

- title: Second Street
  date: 
  size: ''
  description: Downtown San Jose, CA.
  arrows: light
  info: ''
  sizes:
    Large:
      width: 1500
      height: 996
    Medium:
      width: 1100
      height: 731
    Small:
      width: 800
      height: 531
`);

module.exports = { data };
