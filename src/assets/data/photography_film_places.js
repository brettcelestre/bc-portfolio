const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: "730"
  urlTitle: "730"
  date: 
  size: ''
  orientation: landscape
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
  urlTitle: "780"
  date: 
  size: ''
  orientation: landscape
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
  urlTitle: mexico
  date: 
  size: ''
  orientation: landscape
  description: 
  arrows: dark
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
  urlTitle: santa-clara
  date: 
  size: ''
  orientation: landscape
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
  urlTitle: second-street
  date: 
  size: ''
  orientation: landscape
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
