
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SlideShow from '../SlideShow/SlideShow.js';
import './About.css';

const bioImages = {
  portrait: {
    large: [
    require('../../assets/gallery/about/Me-Tall-1.jpg'),
    require('../../assets/gallery/about/Me-Tall-2.jpg'),
    require('../../assets/gallery/about/Me-Tall-3.jpg'),
    require('../../assets/gallery/about/Me-Tall-4.jpg'),
    require('../../assets/gallery/about/Me-Tall-5.jpg')
    ]
  },
  landscape: {
    large: [
      require('../../assets/gallery/about/Me-Wide-Large-1.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-2.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-3.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-4.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-5.jpg')
    ],
    small: [
      require('../../assets/gallery/about/Me-Wide-Large-1.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-2.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-3.jpg'),
      require('../../assets/gallery/about/Me-Wide-Large-4.jpg'),
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
    // TODO: Add full bio
    return (
      <div className="about-section">
        <div className="about-content">
          I am a mixed media creative who enjoys experimentation.
           {/* and exploring techniques.  */}
          {/* I am most interested in combining techniques from one medium to another - typically traditional and digital.  */}
          <br /><br /><br />
          {/* In 2013, I graduated from San Jose State University with a Bachelor of Fine Arts in Digital Media.
          <br /><br /><br /> */}
          Currently a software engineer at <a href="https://www.starcity.com" className="highlight" target="blank">Starcity</a> in San Francisco.
          <br /><br /><br />
          <Link to="/resume" replace className="highlight">
            View Resume
          </Link>
          {/* <br /><br /> */}
          {/* <a href="https://www.instagram.com/brettcelestre/" target="blank"  className="highlight">
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
          <br /><br />
          Reach out
          <br />
          <span className="highlight"><a href="mailto:brettcelestre@gmail.com">brettcelestre<span className="about-email-at">@</span>gmail.com</a></span>
        </div>
      </div>
    )
  }

  render() {
    // const bioGalleryStyles = {
      // height: "auto",
      // maxHeight: "700px",
      // width: "440px",
      // padding: "40px"
    // };

    // const bioImageStyles = {
    //   height: "auto",
    //   width: "440px",
    //   boxShadow: "2px 2px 5px rgb(231, 231, 231)"
    // };

    return (
      <div className="about">
        <SlideShow 
          // styles={bioGalleryStyles}
          // imageStyles={bioImageStyles}
          images={bioImages}
        />

        {this.buildAboutBio()}

      </div>
    );
  }
}

export default About;
