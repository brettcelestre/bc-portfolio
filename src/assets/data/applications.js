const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Starcity Dashboard
  date: OCTOBER 2019
  github: 
  launch: 
  header: Admin dashboard to manage Starcity's mobile app.
  description: Built an artist portfolio using React with a responsive design. Deployed with S3 and Cloudfront
  tech:
    - React
    - Redux
    - GraphQL
    - Node.js
    - Express
    - Postgres
    - AWS
    - Circle.ci

- title: Matthew Celestre
  date: JULY 2018
  github: https://github.com/brettcelestre/mc-portfolio
  launch: http://www.matthewcelestre.com
  header: Artist portfolio for my brother Matthew Celestre.
  description: Built an artist portfolio using React with a responsive design. Deployed with S3 and Cloudfront
  tech:
    - React
    - HTML
    - SASS
    - AWS

- title: Stock Sight
  date: OCTOBER 2016
  github: https://github.com/brettcelestre/stocksight
  launch: 
  header: Easily monitor your stocks in one place.
  description: 
  tech:
    - Angular.js
    - Node.js
    - Express
    - MongoDB
    - HTML
    - SASS

- title: The Performance Group
  date: NOVEMBER 2016
  github: https://github.com/brettcelestre/tpg
  launch: http://tpgsales.com/
  header: Company website for a food brokerage firm out of Pleasanton, CA.
  description: 
  tech:
    - HTML
    - SASS
    - JavaScript

- title: Qurvey
  date: AUGUST 2015
  github: https://github.com/brettcelestre/qurveyapp
  launch: 
  header: Maps personality traits to poll results.
  description: Full Stack Engineer, Node.js, MongoDB, AngularJS · On the front-end I designed and coded a single-page app with Angular.js using UI Router and Angular Materials. For the backend I implemented different Mongoose schemas and queries for tracking statistics for each question and formulated an algorithm that calculates personality strengths between users. Together Mario and I wrote tests with Mocha, Chai, and Protractor.js and utilized Gulp, Travis.CI, and Webpack.
    A user can post an opinion poll, and anyone who answers can see the results, including a graph of the connections between each answer and the personality traits of the users.
  tech:
    - Angular.js
    - Node.js
    - Express
    - MongoDB
    - HTML
    - SASS

- title: FeedFuse
  date: JULY 2015
  github: https://github.com/brettcelestre/feedfuse
  launch: 
  header: Aggregates hashtags search results from Twitter and Instagram's API.
  description: Full Stack Engineer, AngularJS, Node.js, ExpressJS · I implemented OAuth 2.0 authentication for logging into Twitter and Instagram simultaneously. Architected backend routing for RESTful API calls. Engineered front-end routing and created a sorting algorithm to fuse two social media data sets together.
  tech:
    - Angular.js
    - Node.js
    - Express
    - MongoDB
    - HTML
    - SASS
`);

module.exports = { data };

// - title: www.BrettCelestre.com
//   date: JANUARY 2019
//   github: https://github.com/brettcelestre/bc-portfolio
//   launch: https://www.brettcelestre.com
//   header: Personal portfolio.
//   description: Built an artist portfolio using React with a responsive design. Deployed with S3 and Cloudfront
//   tech:
//     - React
//     - HTML
//     - SASS
//     - AWS