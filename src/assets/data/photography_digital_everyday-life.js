const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
    - title: Something
      date: 2010 DECEMBER
      size: ''
      info: Mixed Media
      arrows: dark
      description: ''
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
