
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Applications.css';

import applications from '../../assets/data/applications.js';

const appImages = {
  "MatthewCelestre.com": require('../../assets/gallery/applications/MatthewCelestre.png'),
  "Stock Sight": require('../../assets/gallery/applications/StockSight.png'),
  "The Performance Group": require('../../assets/gallery/applications/ThePerformanceGroup.png'),
  "Qurvey": require('../../assets/gallery/applications/Qurvey.png'),
  "FeedFuse": require('../../assets/gallery/applications/FeedFuse.png')
}

class Applications extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
    
    this.buildApplications = this.buildApplications.bind(this);
    this.buildTechStack = this.buildTechStack.bind(this);
  }

  buildTechStack(stack) {
    return stack.map((tech) => {
      return (
        <div className="code" key={`Application-${tech}`}>
          {tech}
        </div>
      )
    })
  }

  buildApplications() {
    return applications.data.map((app) => {
      return (
        <div className="application-box" key={`Application-${app.title}`}>

          <div className="application-image-box">
            <img src={appImages[app.title]} className="application-image" />
          </div>

          <div className="application-description-box">
            
            <div className="application-title">
              <h2>{app.title}</h2>
            </div>

            <div className="application-date">
              {app.date}
            </div>

            <div className="application-header">
              {app.header}
            </div>

            <div className="application-options">
              {app.github &&
                <a href={app.github} target="blank">
                  <div className="application-github">
                    GitHub
                  </div>
                </a>
              }
              {app.launch &&
                <a href={app.launch} target="blank">
                  <div className="application-launch">
                    Launch
                  </div>
                </a>
              }
            </div>

            <div className="application-tech-stack">
              {this.buildTechStack(app.tech)}
            </div>

          </div>

        </div>
      );
    });
  }

  render() {
    return (
      <div className="applications">
        {this.buildApplications()}
      </div>
    );
  }
}

export default Applications;
