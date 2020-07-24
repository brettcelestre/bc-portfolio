
import React, { Component } from 'react';
import Img from 'react-image';
import Dust from '../Dust/Dust.js';
import './Applications.css';

import spinner from '../../assets/img/spinner.gif';
import applications from '../../assets/data/applications.js';

const appImages = {
  // "www.BrettCelestre.com": require('../../assets/gallery/applications/BrettCelestre.jpg'),
  "Starcity's Mobile App": require('../../assets/gallery/applications/Starcity_App_01.jpg'),
  "Starcity's Admin Dashboard": require('../../assets/gallery/applications/Starcity_Dashboard_01.jpg'),
  "Matthew Celestre": require('../../assets/gallery/applications/MatthewCelestre.jpg'),
  "Stock Sight": require('../../assets/gallery/applications/StockSight.jpg'),
  "The Performance Group": require('../../assets/gallery/applications/ThePerformanceGroup.jpg'),
  "Qurvey": require('../../assets/gallery/applications/Qurvey.jpg'),
  "FeedFuse": require('../../assets/gallery/applications/FeedFuse.jpg'),
  "SprintPal": require('../../assets/gallery/applications/SprintPal.jpg')
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

    let loaderHeight, windowWidth = window.innerWidth;
    if ( windowWidth > 1024 ) {                                // Desktop
      loaderHeight = "300px";
    } else if ( 1024 >= windowWidth && windowWidth >= 800 ) {  // Tablet
      loaderHeight = "265px";
    } else if ( 799 >= windowWidth ) {                         // Modbile
      loaderHeight = "230px";
    }

    const loaderStyles = {
      height: loaderHeight,
      width: "100%",
      textAlign: "center"
    }

    const loadingSpinnerStyles = {
      verticalAlign: "middle"
    }

    const loaderHelper = {
      display: "inline-block",
      height: "100%",
      verticalAlign: "middle"
    }

    return applications.data.map((app) => {
      return (
        <div className="application-box" key={`Application-${app.title}`}>

          <div className="application-image-box">
            <Img
              src={appImages[app.title]}
              className="application-image fade-in-gallery-image"
              loader={(
                <div style={loaderStyles}>
                  <span style={loaderHelper}></span>
                  <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
                </div>
              )}
            />
          </div>

          <div className="application-description-box">
            
            <div className="application-title">
              {/* <h2>{app.title.toUpperCase()}</h2> */}
              <h2>{app.title}</h2>
            </div>

            <div className="application-header">
              {app.header}
            </div>

            { app.description && (
              <div className="application-description" dangerouslySetInnerHTML={{ __html: app.description }}>
              </div>
            )}

            <div className="application-type" dangerouslySetInnerHTML={{ __html: app.type }}>
              </div>
            {/* <div className="application-type">
              {app.type}.
            </div> */}

            <div className="application-date">
              {app.date}
            </div>

            { (app.github || app.launch) && (
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
            )}

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
        <div className="applications-section">
          {this.buildApplications()}
        </div>
        {/* <Dust frequency={150} intensity={true} /> */}
      </div>
    );
  }
}

export default Applications;
