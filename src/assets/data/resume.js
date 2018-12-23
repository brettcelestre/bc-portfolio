const ymlLoader = require('js-yaml');

const resume = ymlLoader.load(`
Technical Skills:
  Backend:
    - Node.js
    - AWS
    - Microservices
    - RESTful API
    - NoSQL
    - Express
    - Hapi
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
    - Git
    - Jenkins
    - Docker
    - Unix
    - Swagger
    - TDD/BD
  Experienced:
    - Socket.IO
    - Protractor
    - Webpack
    - Gulp
    - MySQL
    - OAuth2.0
Professional Experience:
  - company: Accenture Liquid Studios
    title: Senior Software Engineer
    date: MAY 2017 - PRESENT
    url: https://www.accenture.com/us-en/capability-rapid-application-development-studio
    description:
      - Developer on a Node.js microservices API layer used to connect multiple disparate backend systems for a large hospitality company to enable their product, including keyless entry.
      - Microservices are utilizing Docker containers, AWS API Gateway, AWS Application ELB, AWS ECS Clusters, Autoscaling, AWS SNS, DynamoDB, Jenkins, and Hapi using an agile workflow. Utilizing BDD unit and integration testing with Cucumber and Chai.
  - company: Freelance
    title: Full Stack Software Engineer
    date: OCTOBER 2016 - DECEMBER 2016
    description: 
      - Architected a single-page app with AngularJS using UI Router and styled with SASS with a responsive design
      - Built a RESTful API with Node and Express with MongoDB and Mongoose schemas and queries
      - Executed asynchronous API calls with Yahoo YQL Finance API and Import.io to scrape Morningstar.com for data
      - Redesigned and developed a company website to enhance UI/UX and improved SEO for mobile and web platforms
  - company: Wobo, Inc.
    title: QA Specialist
    date: JULY 2015 - APRIL 2016
    url: http://bookvolume.com/
    description:
      - Conducted tests, merged branches, and released production deployments bi-weekly
      - Collaborated with engineers to test, run scripts, and verify MySQL database updates which lowered latency
      - Participated in Agile workflow lifecycle activities on a remote international team
  - company: The Stone Group
    title: Web and Graphic Designer
    date: JUNE 2014 - JULY 2015
    url: 
    description:
      - Designed and built responsive emails which were sent to 100k subscribers twice weekly
      - Created and maintained websites and social media accounts executing online campaigns
Personal Applications:
  - project: www.MatthewCelestre.com
    title: Front-End Software Engineer
    url:
    date: MARCH 2018
    header: Personal Artist Portfolio for my brother Matthew Celestre
    description:
      - Designed and built a responsive single-page app with React using React Router Dom and SASS
      - Deployed using AWS S3 and CloudFront
  - project: Qurvey
    title: Full Stack Software Engineer
    url:
    date: JULY 2016
    header: Maps personality traits to pull results
    description:
      - Designed and architected a single-page app with AngularJS using UI Router and Angular Materials for intuitive UI
      - Created and maintained tests using Mocha, Chai, and Protractor.js and utilized Gulp, Travis.CI, and Webpack
  - project: SprintPal
    title: Full Stack Software Engineer
    url:
    date: JUNE 2016
    header: Vote on tasks during sprint planning
    description:
      - Integrated Socket.io between client-server to handle users voting data so planning can take place in real-time
      - Utilized Highcharts.js with responsive design for users to visualize voting data in real-time via Websockets
Education:
  - institution: Hack Reactor
    header: Advanced Software Engineering Immersive
    date: MAY 2016
  - institution: San Jose State University
    header: Bachelor of Fine Arts - Digital Media
    date: DECEMBER 2013
`);

module.exports = { resume };
