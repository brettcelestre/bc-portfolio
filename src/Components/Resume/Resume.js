
import React, { Component } from 'react';
import './Resume.css';

const {resume: resumeData} = require('../../assets/data/resume.js');

const dividerLines =[
  require('../../assets/img/divider-line-01.png'),
  require('../../assets/img/divider-line-02.png'),
  require('../../assets/img/divider-line-03.png'),
  require('../../assets/img/divider-line-04.png')
];

class Resume extends Component {

  constructor(props){
    super(props)

    this.buildTechSkills = this.buildTechSkills.bind(this);
    this.buildSkillTags = this.buildSkillTags.bind(this);
    this.buildJobsSection = this.buildJobsSection.bind(this);
    this.buildEducationSection = this.buildEducationSection.bind(this);
  }
  
  buildSkillTags(skillList) {
    return skillList.map((skill, i) => {
      return (
        <span className="code" key={`Skill-${i}`}>{skill}</span>
      )
    });
  };

  buildJobsSection(jobs){
    const buildJobDescription = (items) => {
      return items.map((item, i) => {
        return (
          <span key={`Description-${i}-${item.substr(0,10)}`}>
            • {item}<br />
          </span>
        )
      });
    }

    return jobs.map((job) => {
      return (
        <div className="job-section-entry" key={`Job-${job.title}-${job.date}`}>

          <div className="resume-job-title-box">
            <div className="resume-job-title">
              <span className="position">
                <strong>{job.title}</strong>
              </span>
              <br />
              <a href={job.url} target="blank">
                <span className={job.url ? "resume-link" : ''}>
                  {job.company}
                </span>
              </a>
              {job.header !== null &&
                <span className="resume-job-header">
                  {job.header}
                </span>
              }
            </div>

            <div className="job-date-box">
              <span className="job-date">
                {job.date}
              </span>
            </div>
          </div>

          <div className="resume-font job-description">
            {buildJobDescription(job.description)}
          </div> 
        </div>
      );
    });
  }

  buildTechSkills(skills) {
    return Object.keys(skills).map((skill, i) => {
      return (
        <div className="resume-font tech-skills-section" key={`${skill}-${i}`}>
          <div className="tech-skill-section">
            <strong>{skill}:</strong>
          </div>
          {this.buildSkillTags(skills[skill])}
          <br />
        </div>
      )
    });
  }

  buildEducationSection(education) {

    let windowSize; // Finds current size of window
    const width = window.innerWidth;
    if ( width >= 1025 ) {
      windowSize = 'Large';
    } else if ( width <= 1024 && width >= 800) {
      windowSize = 'Medium';
    } else if ( width <= 799) {
      windowSize = 'Small';
    }

    const buildInstitutionList = (education) => {
      return education.map((instituion) => {
        return (
          <div className="resume-education-box" key={`Education-${instituion.title}`}>
            <div className="resume-education-title-box">
              
              <div className="resume-education-title">
                <a href={instituion.url} target="blank">
                  <div className="position resume-link">
                    <strong>{instituion.title}</strong>
                  </div>
                </a>

                <div className="resume-education-header">
                  
                {windowSize !== 'Small' &&
                  <span>&nbsp;- </span>}
                   {instituion.header}
                </div>
              </div>

              <div className="education-date-box">
                <span className="education-date">
                  <span className="job-date">{instituion.date}</span>
                </span>
              </div>

            </div>
          </div>
        )
      });
    }

    return (
      <div className="resume-education-section resume-font description-padding-15">
        {buildInstitutionList(education)}
      </div>
    )
  }

  render() {

    return (
      <div className="resume-section">
        <div className="resume">

          {/* <div className="download-resume-section">
            <div className="download-resume-button">
              <span className="download-resume-font">Download PDF</span>
            </div>
          </div> */}

          <div className="resume-section-title">
            Experience
          </div>

          <div className="resume-divider">
            <img src={dividerLines[1]} className="divider-img" alt="divider-bar"/>
          </div>

          {this.buildJobsSection(resumeData['Professional Experience'])}

          {/* <div className="resume-section-title">
            Personal Applications
          </div>

          <div className="resume-divider">
            <img src={dividerLines[1]} className="divider-img" alt="divider-bar"/>
          </div>

          {this.buildJobsSection(resumeData['Personal Applications'])} */}

          <div className="resume-section-title">
            Technical Skills
          </div>

          <div className="resume-divider">
            <img src={dividerLines[2]} className="divider-img" alt="divider-bar"/>
          </div>

          {this.buildTechSkills(resumeData['Technical Skills'])}

          <div className="resume-section-title">
            Education
          </div>

          <div className="resume-divider">
            <img src={dividerLines[0]} className="divider-img" alt="divider-bar" />
          </div>

          {this.buildEducationSection(resumeData['Education'])}

          {/* <div className="download-resume-section">
            <div className="download-resume-button">
              <span className="download-resume-font">Download PDF</span>
            </div>
          </div> */}

        </div>
      </div>
    );
  }
}

export default Resume;
