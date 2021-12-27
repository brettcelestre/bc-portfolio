
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SlideShow from '../SlideShow/SlideShow.js';
import './About.css';

const bioImages = {
  portrait: {
    large: [
    // require('../../assets/gallery/about/Me-Tall-1.jpg'),
    // require('../../assets/gallery/about/Me-Tall-2.jpg'),
    // require('../../assets/gallery/about/Me-Tall-3.jpg'),
    // require('../../assets/gallery/about/Me-Tall-4.jpg'),
    require('../../assets/gallery/about/Me-Tall-5.jpg')
    ]
  },
  landscape: {
    large: [
      // require('../../assets/gallery/about/Me-Wide-Large-1.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-2.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-3.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-4.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-5.jpg')
    ],
    small: [
      // require('../../assets/gallery/about/Me-Wide-Large-1.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-2.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-3.jpg'),
      // require('../../assets/gallery/about/Me-Wide-Large-4.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-5.jpg')
    ]
  }
}

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    this.buildAboutBio = this.buildAboutBio.bind(this);
  }

  buildAboutBio() {
    return (
      <div className="about-section">
        <div className="about-content">
          <br />
          <br /><br />
          Made <Link to="/short-films" className="highlight">short films</Link> with my <a href="https://www.matthewcelestre.com" className="highlight" target="blank">brother Matthew</a> for a few years.
          <br /><br />
          
          <Link to="/resume" replace className="highlight">
          Resume.
          </Link>
          {/* <br />
          <br />
          <a href="https://www.instagram.com/brettcelestre/" target="blank"  className="highlight">
            Instagram
          </a>
          <br />
          <a href="https://github.com/brettcelestre" target="blank"  className="highlight">
            GitHub
          </a>
          <br />
          <a href="/https://www.linkedin.com/in/brettcelestre/" target="blank" className="highlight">
            LinkedIn
          </a> */}
          <br />
          <br />
          <span className="highlight">Reach out.</span>
        </div>
      </div>
    )
  }

  render() {
    const bioGalleryStyles = {
      height: "auto",
      maxHeight: 700,
      width: 440,
      padding: 20
    };

    // const bioImageStyles = {
    //   height: "auto",
    //   width: "440px",
    //   boxShadow: "2px 2px 5px rgb(231, 231, 231)"
    // };

    return (
      <div className="about">
        <SlideShow 
          styles={bioGalleryStyles}
          // imageStyles={bioImageStyles}
          images={bioImages}
        />

        {this.buildAboutBio()}

      </div>
    );
  }
}

export default About;
