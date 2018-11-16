const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: MatthewCelestre.com
  date: JULY 2018
  github: https://github.com/brettcelestre/mc-portfolio
  launch: http://www.matthewcelestre.com
  description: Artist portfolio for my brother Matthew Celestre.
  info: Built an artist portfolio using React with a responsive design. Deployed with S3 and Cloudfront
  tech:
    - React
    - HTML
    - SASS
    - AWS
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

- title: Stock Sight
  date: 2016
  github: https://github.com/brettcelestre/stocksight
  launch: 
  description: 
  info: 
  tech:
    - Angular.js
    - Node.js
    - Express
    - MongoDB
    - HTML
    - SASS
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

- title: The Performance Group
  date: 2016
  github: https://github.com/brettcelestre/tpg
  launch: http://tpgsales.com/
  description: Company website for a food brokerage firm out of Pleasanton, CA.
  info: 
  tech:
    - HTML
    - SASS
    - JavaScript
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

- title: Qurvey
  date: 2015
  github: https://github.com/brettcelestre/qurveyapp
  launch: 
  description: Maps personality traits to poll results.
  info: 
  tech:
    - Angular.js
    - Node.js
    - Express
    - MongoDB
    - HTML
    - SASS
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
`);

module.exports = {
data
};