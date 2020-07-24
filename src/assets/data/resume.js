const ymlLoader = require('js-yaml');

const resume = ymlLoader.load(`
Technical Skills:
  Backend:
    - Node.js
    - GraphQL
    - Apollo
    - PostgreSQL
    - DynamoDB
    - Microservices
    - RESTful API
    - Express
    - Hapi
    - Logging
  Frontend:
    - JavaScript
    - React
    - React Native
    - Redux
    - Angular
    - HTML
    - CSS
    - SCSS/SASS
    - Styled Components
    - UI/UX
    - Bootstrap
    - jQuery
    - Event Tracking
  Dev Ops: 
    - AWS
    - Git
    - Jenkins
    - CircleCI
    - Docker
    - Unix
    - Bash
    - Swagger
    - TDD/BD
  Experienced:
    - Analytics
    - MySQL
    - Socket.IO
    - Protractor
    - Webpack
    - Gulp
    - OAuth2.0
Professional Experience:
  - company: Starcity
    title: Full Stack Software Engineer
    date: APRIL 2019 - PRESENT
    location: San Francisco, CA
    url: https://www.starcity.com/
    header:
    description:
      - Y Combinator start-up, working closely with our VP of Engineering and Director of Product Management 
      - Delivered core features to Starcity’s mobile app in React Native such as direct messaging, bulletin board, member events, help desk, and in app/push notifications.
      - Lead developer of a green field React/Redux admin dashboard used by our community team to prevent abuse, maintain a safe mobile app community, and direct message our members
      - Developed backend in Node.js, GraphQL, and PostgreSQL deployed on AWS. I set up lifecycle and event analytics across our systems to help improve our sales funnel 
  - company: Accenture - Liquid Studios
    title: Software Engineer
    date: MAY 2017 - MARCH 2019
    location: San Francisco, CA
    url: https://www.accenture.com/us-en/capability-rapid-application-development-studio
    header:
    description:
      - Utilized Hyperledger Fabric, Angular, and AWS to create a business-oriented supply chain application
      - Developed a Node.js microservices API layer used to connect disparate backend systems for a Fortune 500 Hospitality Client to enable guests to manage reservations, user profiles, and digital keys
      - Utilized the latest container and cloud technologies to achieve a highly available and scalable platform
      - Architected and implemented a system to notify the mobile app of maintenance downtimes. Built Jenkins pipelines and utilized AWS Lambda, DynamoDB, and SNS 
  - company: Wobo, Inc.
    title: QA Specialist
    date: JULY 2015 - APRIL 2016
    location: Martinez, CA
    url: http://bookvolume.com/
    header:
    description:
      - Conducted user tests, managed epic stories, and released production deployments bi-weekly
      - Collaborated with engineers to ensure that features passed tests and verify MySQL database updates
      - Participated in Agile workflow lifecycle activities on an international team
  - company: The Stone Group
    title: Web and Graphic Designer
    date: JUNE 2014 - JULY 2015
    location: Pleasanton, CA
    url: http://stonegroupinc.com/
    header:
    description:
      - Designed and built responsive emails which were sent to over 100k subscribers twice weekly
      - Created and managed websites and social media accounts increasing customer engagement by 400%
  - company: "TCI | SPX"
    title: Digital Imaging and Photography
    date: AUGUST 2011 - DECEMBER 2014
    location: Fremont, CA
    url: https://www.tcibr.com/
    header:
    description:
      - Created primary product images used in multi-million dollar sales presentations for SPX, a Fortune 1000 Company
      - Product photography, photo realistic image compositing, retouching
  - company: Terres | Marketing Design
    title: Digital Imaging Specialist
    date: JULY 2008 - DECEMBER 2014
    location: San Ramon, CA
    url: http://terresdesign.com/
    header:
    description:
      - Photo realistic image compositing / retouching, stock photography research, websites, data sheets, company presentations, brochures, web banners and html email campaigns both for print and web
Personal Applications:
  - title: BrettCelestre.com
    position: Front-End Software Engineer
    date: JANUARY 2019
    header: Personal online portfolio
    description:
      - Designed and built a responsive single-page app with React using React Router Dom and SASS
      - Dynamically loads image sizes based off screen resolution for faster load times
      - Deployed with S3, Cloudfront, and Route53
  - title: MatthewCelestre.com
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

// Starcity stuff below
// add link to starcity app
// https://apps.apple.com/us/app/starcity/id1457383827

// - Fast paced start-up, working closely with our VP of Engineering and Director of Product Management 
// - Currently working in React Native on Starcity's mobile app bringing core features to life such as direct messaging, a community bulletin board, member events, and in app/push notifications
// - Lead developer of a green field React/Redux admin dashboard used by our community team for content moderation of our mobile app and direct messaging our members
// - Our backend is Node.js, GraphQL, and PostgreSQL deployed on AWS. I’ve helped set up lifecycle and event analytics across our systems and helped improve our member application portal 

// - React, Node.js, GraphQL, AWS, React Native, Clojure, Sendbird, Google Analytics, WordPress, Segment, Google Analytics, Salesforce
//       - Developed a internal admin dashboard for our community team to moderate the Starcity mobile apps content and direct message community members.

// - company: Self-Employed
// title: Full Stack Software Engineer
// date: OCTOBER 2016 - DECEMBER 2016
// header:
// description: 
//   - Architected a single-page app with AngularJS and styled with SASS with a responsive design
//   - Built a RESTful API with Node.js and Express with MongoDB and Mongoose
//   - Redesigned and developed a responsive company website to improve client engagement and SEO