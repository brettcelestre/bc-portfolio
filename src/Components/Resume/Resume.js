
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Resume.css';
const zoomIcon = require('../../assets/img/zoom.png');

class Resume extends Component {

  constructor(props){
    super(props)
    this.state = {
      skills: {
        Backend: [
          'Node.js',
          'AWS',
          'Microservices',
          'RESTful API',
          'MongoDB',
          // 'Lambda',
          // 'API Gateway',
          // 'SNS',
          // 'SQS',
          // 'CloudFront',
          // 'S3',
          'Express',
          'Hapi'
          // 'JSON',
        ],
        Frontend: [
          'React',
          'Angular',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS/SASS',
          'UI/UX',
          'Bootstrap',
          'jQuery'
        ],
        'Dev Ops': [
          'git',
          'Jenkins',
          'Docker',
          'Unix',
          // 'NPM',
          'Swagger',
          // 'Cucumber',
          // 'Mocha',
          // 'Chai',
          // 'Sinon',
          'TDD/BDD'
          // 'Agile'
        ],
        Experienced: [
          'Socket.IO',
          'Protractor',
          'Webpack',
          'Gulp',
          'MySQL',
          'OAuth2.0'
        ]
      }
    }
    this.buildTechSkills = this.buildTechSkills.bind(this);
    this.buildSkillTags = this.buildSkillTags.bind(this);
    this.buildJobsSection = this.buildJobsSection.bind(this);
    this.buildPersonalAppSection = this.buildPersonalAppSection.bind(this);
  }
  
  buildSkillTags(skillList) {
    return skillList.map((skill) => {
      return (
        <span className="code">{skill}</span>
      )
    });
  };

  buildJobsSection(){
    // TODO: Dynamically build personal apps section
  }

  buildPersonalAppSection(){
    // TODO: Dynamically build personal apps section
  }

  buildTechSkills(skills) {
    return Object.keys(skills).map((skill) => {
      return (
        <div className="resume-font description-padding-15">
          <div className="tech-skill-section">
            <strong>{skill}:</strong>
          </div>
          {this.buildSkillTags(skills[skill])}
          <br />
        </div>
      )
    });
  }

  render() {
    return (
      <div className="resume-section">
        <div className="resume">
          <div className="download-resume-section">
            <div className="download-resume-button">
              Download PDF
            </div>
          </div>

          <div className="resume-section-title">
            Technical Skills
          </div>

          {this.buildTechSkills(this.state.skills)}

          <div className="resume-divider">
            <div className="resume-line"></div>
          </div>

          <div className="resume-section-title">
            Professional Experience
          </div>

          <div className="resume-job-title">
            <a href="https://www.accenture.com/us-en/capability-rapid-application-development-studio" target="blank"><strong>Accenture Liquid Stuidos</strong></a> - <span className="position">Node.js Engineer (Senior Analyst)</span>
          </div>
          <div className="job-date">May <span className="job-date-number">2017</span> - Present</div>
          <div className="resume-font job-description">
            • Developer on a Node.js microservices API layer used to connect multiple disparate backend systems for a large            hospitality company to enable their product, including keyless entry.<br />
            • Microservices are utilizing Docker containers, AWS API Gateway, AWS Application ELB, AWS ECS Clusters, Autoscaling, AWS SNS, DynamoDB, Jenkins, and Hapi using an agile workflow. Utilizing BDD unit and integration testing with Cucumber and Chai.<br />
          </div>

          <div className="resume-job-title">
            <strong>Freelance</strong> - <span className="position">Full Stack Software Engineer</span>
          </div>
          <div className="job-date">October <span className="job-date-number">2016</span> - December <span className="job-date-number">2016</span></div>
          <div className="resume-font job-description">
            • Architected a single-page app with AngularJS using UI Router and styled with SASS with a responsive design<br />
            • Built a RESTful API with Node and Express with MongoDB and Mongoose schemas and queries<br />
            • Executed asynchronous API calls with Yahoo YQL Finance API and Import.io to scrape Morningstar.com for data<br />
            • Redesigned and developed a company website to enhance UI/UX and improved SEO for mobile and web platforms<br />
          </div>

          <div className="resume-job-title">
            <a href="http://bookvolume.com/" target="blank"><strong>Wobo, Inc.</strong></a> - <span className="position">QA Specialist</span>
          </div>
          <div className="job-date">July <span className="job-date-number">2015</span> - April <span className="job-date-number">2016</span></div>
          <div className="resume-font job-description">
            • Conducted tests, merged branches, and released production deployments bi-weekly<br />
            • Collaborated with engineers to test, run scripts, and verify MySQL database updates which lowered latency<br />
            • Participated in Agile workflow lifecycle activities on a remote international team<br />
          </div>

          <div className="resume-job-title">
            <a href="http://stonegroupinc.com/" target="blank"><strong>The Stone Group</strong></a> - <span className="position">Web and Graphic Designer</span>
          </div>
          <div className="job-date">June <span className="job-date-number">2014</span> - July <span className="job-date-number">2015</span></div>
          <div className="resume-font job-description">
            • Designed and built responsive emails which were sent to 100k subscribers twice weekly<br />
            • Created and maintained websites and social media accounts executing online campaigns<br />
          </div>

          <div className="resume-divider">
            <div className="resume-line"></div>
          </div>

          <div className="resume-section-title">
            Personal Applications
          </div>

          <div className="resume-job-title">
            <a href="http://www.matthewcelestre.com" target="blank"><strong>MatthewCelestre.com</strong></a> - <span className="position">Front-End Software Engineer</span>
          </div>
          <div className="job-date">March <span className="job-date-number">2018</span></div>
          <div className="resume-font resume-one-liner">
            <i>Personal Artist Portfolio for my brother Matthew Celestre</i>
          </div>
          <div className="resume-font job-description">
            • Designed and built a single-page app with React using React Router Dom and SASS with responsive design<br />
            • Deployed using AWS S3 and CloudFront<br />
          </div>

          <div className="resume-job-title">
            <strong>Qurvey</strong> - <span className="position">Full Stack Software Engineer</span>
          </div>
          <div className="job-date">July <span className="job-date-number">2016</span></div>
          <div className="resume-font resume-one-liner">
            <i>Maps personality traits to pull results</i>
          </div>
          <div className="resume-font job-description">
            • Designed and architected a single-page app with AngularJS using UI Router and Angular Materials for intuitive UI<br />
            • Created and maintained tests using Mocha, Chai, and Protractor.js and utilized Gulp, Travis.CI, and Webpack<br />
          </div>

          <div className="resume-job-title">
            <strong>SprintPal</strong> - <span className="position">Full Stack Software Engineer</span>
          </div>
          <div className="job-date">June <span className="job-date-number">2016</span></div>
          <div className="resume-font resume-one-liner">
            <i>Vote on tasks during sprint planning</i>
          </div>
          <div className="resume-font job-description">
            • Integrated Socket.io between client-server to handle users voting data so planning can take place in real-time<br />
            • Utilized Highcharts.js with responsive design for users to visualize voting data in real-time via Websockets<br />
          </div>

          <div className="resume-divider">
            <div className="resume-line"></div>
          </div>

          <div className="resume-section-title">
            Education
          </div>

          <div className="resume-font description-padding-15">
            <strong>Hack Reactor</strong> - Advanced Software Engineering Immersive - <span className="job-date date-inline">May <span className="job-date-number">2016</span> - July <span className="job-date-number">2016</span></span><br />
            <strong>San Jose State University</strong> - Bachelor of Fine Arts - Digital Media - <span className="job-date date-inline">December <span className="job-date-number">2013</span></span><br />
          </div>

          <div className="resume-divider">
            <div className="resume-line"></div>
          </div>

          <div className="resume-section-title">
            Personal
          </div>

          <div className="resume-font description-padding-15">
            Loves film photography, making collages, woodworking, and has created a few live-action/animated short films
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
