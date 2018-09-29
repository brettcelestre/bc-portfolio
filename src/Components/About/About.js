
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './About.css';

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    this.buildGalleryCarousel = this.buildGalleryCarousel.bind(this);
    this.buildAboutBio = this.buildAboutBio.bind(this);
  }

  buildGalleryCarousel() {
    // TODO: Add images to carousel and controls
    return (
      <div className="about-gallery">
        <div className="gallery-images">
          Pictures
        </div>
        <div className="gallery-controls">
          Image Index
        </div>
      </div>
    )
  }

  buildAboutBio() {
    // TODO: Add full bio
    const text = () => {
      return `
      About Bio
      `;
    }

    return (
      <div className="about-bio">
        <div className="bio-content">
          {text()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="about">
        {this.buildGalleryCarousel()}
        {this.buildAboutBio()}
      </div>
    );
  }
}

export default About;
