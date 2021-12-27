const ymlLoader = require('js-yaml');

const resume = ymlLoader.load(`
Technical Skills:
  Languages:
    - JavaScript
    - Python
    - Bash
  Cloud:
    - AWS
    - Google Cloud Platform
  Backend:
    - Node.js
    - GraphQL
    - PostgreSQL
    - NoSQL
    - Microservices
    - Apollo
    - Express
  Frontend:
    - React
    - React Native
    - Angular
    - Redux
    - Jest
    - Styled Components
    - Apollo
    - HTML
    - CSS
    - SCSS/SASS
    - UI/UX
  Technologies/Software:
    - Git
    - XCode
    - Docker
    - CircleCi
    - Sentry
    - Looker
    - Snowflake
    - Zendesk
    - Figma
    - Adobe Suite
Professional Experience:
  - company: Varo Bank
    title: Software Engineer, API
    date: JUNE 2021 - PRESENT
    location: San Francisco, CA
    url: https://www.varomoney.com/
    header:
    description:
  - company: Starcity
    title: Senior Full Stack Software Engineer
    date: FEBRUARY 2021 - MAY 2021
    location: San Francisco, CA
    url: https://www.starcity.com/
    header:
    description:
     - Led our Experience Platform team and worked closely with stakeholders on delivering new features
     - Managed and monitored our React Native mobile app releases for both iOS and Android
     - Helped orchestrate the integration of Ollie.co software after Starcity acquired them
     - Implemented changes to support the international launch of our Barcelona, Spain properties
     - Addressed backend performance bottlenecks and optimized GraphQL queries
     - Developed and maintained many of our sync scripts to keep our different systems up to date
  - company: Starcity
    title: Full Stack Software Engineer
    date: APRIL 2019 - FEBRUARY 2021
    location: San Francisco, CA
    url: https://www.starcity.com/
    header:
    description:
      - Delivered core features to Starcity’s mobile app in React Native, including direct messaging, bulletin board, member events, help desk, and in-app/push notifications. Available in App Store and Google Play
      - Acted as lead developer of a green field React/Redux admin dashboard used by our community team to prevent abuse, maintain a safe mobile app community, and direct message our members
      - Developed backend in Node.js, GraphQL, Apollo and PostgreSQL deployed on AWS
      - Set up lifecycle and event analytics across our systems to help improve our sales funnel and member conversion
  - company: Accenture - Liquid Studios
    title: Software Engineer
    date: MAY 2017 - MARCH 2019
    location: San Francisco, CA
    url: https://www.accenture.com/us-en/capability-rapid-application-development-studio
    header:
    description:
      - Developed a microservices backend with Node.js for the MGM Resorts mobile app to enable guests to manage show and dinner reservations, user profiles, and access their rooms with keyless entry
      - Utilized Docker containers and configured AWS ECS, API Gateway, CloudWatch, Networking Security Policies, and ELB to achieve a highly available and scalable platform
      - Architected and implemented a system to notify the mobile app of maintenance downtimes utilizing AWS Lambda, DynamoDB, and SNS, and set up CI/CD pipelines
  - company: Wobo, Inc.
    title: QA Specialist
    date: JULY 2015 - APRIL 2016
    location: Martinez, CA
    url: http://bookvolume.com/
    header:
    description:
      - Conducted user tests, managed epic stories, and released production deployments bi-weekly
      - Collaborated with engineers to test features and verify MySQL database updates
  - company: The Stone Group
    title: Web and Graphic Designer
    date: JUNE 2014 - JULY 2015
    location: Pleasanton, CA
    url: http://stonegroupinc.com/
    header:
    description:
      - Designed and built responsive emails which were sent to over 100k subscribers twice weekly
      - Designed and managed websites, social media accounts, and ad campaigns for both print and web
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
