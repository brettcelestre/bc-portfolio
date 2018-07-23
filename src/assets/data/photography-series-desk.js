const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
    - title: 2007
      date: 2007
      size: ''
      description: Photography
      arrows: dark
      info: ''
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
