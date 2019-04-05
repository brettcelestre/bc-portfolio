
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SlideShow from '../SlideShow/SlideShow.js';
import './About.css';

const bioImages = {
  portrait: [
    require('../../assets/gallery/about/blur-2.jpg'),
    require('../../assets/gallery/about/blur.jpg'),
    require('../../assets/gallery/about/example-2.jpg'),
  ],
  landscape: [
    require('../../assets/gallery/about/example-1.jpg')
  ]
}

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    this.buildAboutBio = this.buildAboutBio.bind(this);
  }

  buildAboutBio() {
    // TODO: Add full bio
    return (
      <div className="about-section">
        <div className="about-content">
          I am a multimedia creative who enjoys experimentation and exploring techniques. I am most interested in combining techniques from one medium to another - typically traditional and digital. 
          <br /><br /><br />
          In 2013, I graduated from San Jose State University with a Bachelor of Fine Arts in Digital Media.
          <br /><br /><br />
          Currently I am a software engineer working in San Francisco.
          <br /><br /><br />
          Dust covers are a waste of time.
          <br /><br /><br />
          <Link to="/resume" replace className="highlight">
            View Resume
          </Link>
          <br /><br /><br />
          <span className="highlight"><a href="mailto:brettcelestre@gmail.com">brettcelestre@gmail.com</a></span>
        </div>
      </div>
    )
  }

  render() {
    const bioGalleryStyles = {
      height: "auto",
      maxHeight: "700px",
      width: "440px",
      padding: "40px"
    };

    const bioImageStyles = {
      height: "auto",
      width: "440px",
      boxShadow: "2px 2px 5px rgb(231, 231, 231)"
    };

    return (
      <div className="about">
        <SlideShow 
          styles={bioGalleryStyles}
          imageStyles={bioImageStyles}
          images={bioImages}
        />

        {this.buildAboutBio()}

      </div>
    );
  }
}

export default About;
