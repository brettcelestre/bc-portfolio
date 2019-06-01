const ymlLoader = require('js-yaml');

const resume = ymlLoader.load(`
Technical Skills:
  Backend:
    - Node.js
    - Microservices
    - RESTful API
    - NoSQL
    - Express
    - Hapi
    - Blockchain
    - Hyperledger Fabric
  Frontend:
    - React
    - Angular
    - JavaScript
    - HTML
    - CSS
    - SCSS/SASS
    - UI/UX
    - Bootstrap
    - jQuery
  Dev Ops: 
    - AWS
    - Git
    - Jenkins
    - Docker
    - Unix
    - Bash
    - Swagger
    - TDD/BD
  Experienced:
    - Redux
    - Socket.IO
    - Protractor
    - Webpack
    - Gulp
    - MySQL
    - OAuth2.0
Professional Experience:
  - company: Starcity
    title: Software Engineer
    date: APRIL 2019 - PRESENT
    url: https://www.starcity.com/
    header:
    description:
      - React, Node.js, Clojure, GraphQL, AWS
  - company: Accenture - Liquid Studios
    title: Senior Software Engineer
    date: MAY 2017 - MARCH 2019
    url: https://www.accenture.com/us-en/capability-rapid-application-development-studio
    header:
    description:
      - Utilized Hyperledger Fabric, Angular, and AWS to create a business-oriented supply chain application
      - Developed a Node.js microservices API layer used to connect disparate backend systems for a Fortune 500 Hospitality Client to enable guests to manage reservations, user profiles, and digital keys
      - Utilized the latest container and cloud technologies to achieve a highly available and scalable platform
      - Architected and implemented a system to notify the mobile app of maintenance downtimes. Built Jenkins pipelines and utilized AWS Lambda, DynamoDB, and SNS 
  - company: Self-Employed
    title: Full Stack Software Engineer
    date: OCTOBER 2016 - DECEMBER 2016
    header:
    description: 
      - Architected a single-page app with AngularJS and styled with SASS with a responsive design
      - Built a RESTful API with Node.js and Express with MongoDB and Mongoose
      - Redesigned and developed a responsive company website to improve client engagement and SEO
  - company: Wobo, Inc.
    title: QA Specialist
    date: JULY 2015 - APRIL 2016
    url: http://bookvolume.com/
    header:
    description:
      - Conducted user tests, managed epic stories, and released production deployments bi-weekly
      - Collaborated with engineers to ensure that features passed tests and verify MySQL database updates
      - Participated in Agile workflow lifecycle activities on an international team
  - company: The Stone Group
    title: Web and Graphic Designer
    date: JUNE 2014 - JULY 2015
    url: http://stonegroupinc.com/
    header:
    description:
      - Designed and built responsive emails which were sent to over 100k subscribers twice weekly
      - Created and managed websites and social media accounts increasing customer engagement by 400%
  - company: "TCI | SPX"
    title: Digital Imaging and Photography
    date: AUGUST 2011 - DECEMBER 2014
    url: https://www.tcibr.com/
    header:
    description:
      - Created primary product images used in multi-million dollar sales presentations for SPX, a Fortune 1000 Company
      - Product photography, photo realistic image compositing, retouching
  - company: Terres | Marketing Design
    title: Digital Imaging Specialist
    date: JULY 2008 - DECEMBER 2014
    url: http://terresdesign.com/
    header:
    description:
      - Photo realistic image compositing / retouching, stock photography research, websites, data sheets, company presentations, brochures, web banners and html email campaigns both for print and web
Personal Applications:
  - title: www.BrettCelestre.com
    position: Front-End Software Engineer
    date: JANUARY 2019
    header: Personal online portfolio
    description:
      - Designed and built a responsive single-page app with React using React Router Dom and SASS
      - Dynamically loads image sizes based off screen resolution for faster load times
      - Deployed with S3, Cloudfront, and Route53
  - title: www.MatthewCelestre.com
    position: Front-End Software Engineer
    url:
    date: MARCH 2018
    header: Artist portfolio for Matthew Celestre
    description:
      - Designed and built a responsive single-page app with React using React Router Dom and SASS
      - Dynamically loads image sizes based off screen resolution for faster load times
      - Deployed using S3 and CloudFront
  - title: Qurvey
    position:  Full Stack Software Engineer
    url:
    date: JULY 2016
    header: Maps personality traits to pull results
    description:
      - Designed and architected a single-page app with AngularJS using UI Router and Angular Materials
      - Created and maintained tests using Mocha, Chai, and Protractor.js and utilized Gulp, Travis.CI, and Webpack
  - title: SprintPal
    position: Full Stack Software Engineer
    url:
    date: JUNE 2016
    header: Vote on tasks during sprint planning
    description:
      - Integrated Socket.io between client-server to handle users voting data so planning can take place in real-time
      - Utilized Highcharts.js with responsive design for users to visualize voting data in real-time via Websockets
  - title: FeedFuse
    position: Full Stack Software Engineer
    url:
    date: JUNE 2016
    header: An exploratory web app to blend Twitter and Instagram posts
    description:
      - Implemented OAuth 2.0 authentication for logging into Twitter and Instagram simultaneously. 
      - Architected backend routing for RESTful API calls. 
      - Engineered front-end routing and created a sorting algorithm to fuse two social media data sets together.
Education:
  - title: Hack Reactor
    header: Advanced Software Engineering Immersive
    date: MAY 2016
    url: https://www.hackreactor.com/
  - title: San Jose State University
    header: Bachelor of Fine Arts - Digital Media
    date: DECEMBER 2013
    url: http://www.sjsu.edu/
`);

module.exports = { resume };
