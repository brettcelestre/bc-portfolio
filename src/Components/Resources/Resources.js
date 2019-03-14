
import React, { Component } from 'react';
import './Resources.css';

const { resources: resourceData } = require('../../assets/data/resources.js');
const dividerLines =[
  require('../../assets/img/divider-line-01.png')
  // require('../../assets/img/divider-line-02.png')
  // require('../../assets/img/divider-line-03.png'),
  // require('../../assets/img/divider-line-04.png')
];

// TODO: complete this component

class Resources extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    this.buildLinks = this.buildLinks.bind(this);
  }

  buildLinks(resources) {
    let mobile = false;
    if ( 799 >= window.innerWidth ) {
      mobile = true;
    }

    const buildHeader = (header) => {
      if (mobile) {
        return (<span className="resource-header">{header}</span>)
      }
      return (<span> - <span className="resource-header">{header}</span></span>)
    }

    return resources.map((resource, i) => {
      return (
        <a href={resource.url} target="blank" key={`${resource}-${i}`}>
          <div className="resource-link">
            <span className="resource-title"><strong>{resource.title}</strong></span>{mobile && <br />}
              {/* {resource.header && <span> - <span className="resource-header">{resource.header}</span></span>} */}
              {resource.header && buildHeader(resource.header)}
          </div>
        </a>
      )
    });
  }

  render() {
    return (
      <div className="resources">
        <div className="resources-title">
          Resources
        </div>

        <div className="resource-divider">
          <img src={dividerLines[0]} className="divider-img" alt="divider-bar"/>
        </div>

        <div className="resource-section">
          People
        </div>
        {this.buildLinks(resourceData.People)}

        <div className="resource-section">
          Books
        </div>
        {this.buildLinks(resourceData.Books)}
        
        <div className="resource-section">
          Documentaries
        </div>
        {this.buildLinks(resourceData.Documentaries)}
        
        <div className="resource-section">
          Organizations
        </div>
        {this.buildLinks(resourceData.Organizations)}

        <div className="resource-section">
          Art
        </div>
        {this.buildLinks(resourceData.Art)}

        <div className="resource-section">
          Companies
        </div>
        {this.buildLinks(resourceData.Companies)}

        <div className="resource-section">
          Products
        </div>
        {this.buildLinks(resourceData.Products)}

        <div className="resource-section">
          Papers / Articles
        </div>
        {this.buildLinks(resourceData.Papers)}
      </div>
    );
  }
}

export default Resources;
