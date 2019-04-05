
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { scrollTop } from '../../utils/utils.js';

import './App.css';
import logo from '../../assets/img/logo-smaller-large-3.png';
import linkedinLogo from '../../assets/svg/social-linkedin.svg';
import githubLogo from '../../assets/svg/social-github.svg';
import instagramLogo from '../../assets/svg/social-instagram.svg';
import exit from '../../assets/svg/cancel.svg';
import menuIcon from '../../assets/svg/random-menu-lines.svg';

const galleryData = {
  spatial: require('../../assets/data/spatial.js')
};

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      medium: '',
      mobileMenu: false,
      fade: false,
      year: new Date().getFullYear()
    };
    
    this.createUrlPathForPiece = this.createUrlPathForPiece.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.cleanUp = this.cleanUp.bind(this);
  }

  // Creates the Link URL for each section with whatever the latest piece of artwork is called
  createUrlPathForPiece(section, category) {
    let pieceName;
    if (category === null) {
      pieceName = galleryData[section].data[0].title.toLowerCase().split(' ').join('-');
      return `/${section}/${pieceName}`;
    } else if (galleryData[section][category].data[0].title.includes(' ')) {
      pieceName = galleryData[section][category].data[0].title.toLowerCase().split(' ').join('-');
    } else {
      pieceName = galleryData[section][category].data[0].title.toLowerCase();
    }
    return `/${section}/${category}/${pieceName}`;
  }

  menuToggle() {
    if (this.state.mobileMenu) {
      this.setState({
        mobileMenu: false,
        fade: false
      });
    } else {
      this.setState({
        mobileMenu: true,
        fade: true
      });
    }
  }

  cleanUp() {
    scrollTop();
    if (window.innerWidth < 1024) {
      this.menuToggle();
    }
  }

  render() {

    let socialMediaIconSize;
    if ( window.innerWidth > 1024) {          // Desktop
      socialMediaIconSize = 20;
    } else if ( window.innerWidth <= 1024) {  // Tablet and Modbile
      // socialMediaIconSize = 30;
      socialMediaIconSize = 27;
    }

    return (
      <div className="app">
        <div className="menu-button" onClick={this.menuToggle}>
          <ReactSVG
            path={this.state.mobileMenu ? exit : menuIcon}
            style={this.state.mobileMenu ? {width: 16, height: 16} : {width: 22, height: 22}}
            className={this.state.mobileMenu ? "menu-icon exit-icon" : "menu-icon"}
            wrapperClassName={this.state.mobileMenu ? "menu-icon exit-icon" : "menu-icon"}
          />
        </div>

        <div className={this.state.fade ? "fade-show" : "fade-no-show"} onClick={this.menuToggle}></div>

        <div className="app-menu">

          <img src={logo} className="logo" width="100px" height="100px" alt="main-logo"/>

          <div className="main-title-box">
            <h2 className="main-title">Brett<span className="main-title-spacing"> </span>Celestre</h2>
          </div>

          <div className={this.state.mobileMenu ? "navigation navigation-mobile-show" : "navigation"}>
            <Link to="/photography" replace onClick={this.cleanUp}>
              <div className="section-title">
                Photography
              </div>
            </Link>

            <Link to="/artwork" replace onClick={this.cleanUp}>
              <div className="section-title">
                Artwork
              </div>
            </Link>

            <Link to="/short-films" replace onClick={this.cleanUp}>
              <div className="section-title">
                Short Films
              </div>
            </Link>
            
            <Link to={this.createUrlPathForPiece('spatial', null)} replace onClick={this.cleanUp}>
              <div className="section-title">
                Spatial
              </div>
            </Link>

            <Link to="/applications" replace onClick={this.cleanUp}>
              <div className="section-title">
                Applications
              </div>
            </Link>

            <Link to="/resources" replace onClick={this.cleanUp}>
              <div className="section-title">
                Resources
              </div>
            </Link>

            <Link to="/creatives" replace onClick={this.cleanUp}>
              <div className="section-title">
                Creatives
              </div>
            </Link>

            <Link to="/about" replace onClick={this.cleanUp}>
              <div className="section-title">
                About
              </div>
            </Link>

            {/* <Link to="/resume" replace onClick={this.cleanUp}>
              <div className="section-title">
                Resume
              </div>
            </Link> */}

            <div className="social-media-spacer"></div>
            
            <div className="social-links-box">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/brettcelestre/" target="blank">
                  <ReactSVG
                    path={linkedinLogo}
                    style={{width: socialMediaIconSize, height: socialMediaIconSize}}
                    className="social-icon"
                    wrapperClassName="social-icon"
                  />
                </a>

                <a href="https://github.com/brettcelestre" target="blank">
                  <ReactSVG
                    path={githubLogo}
                    style={{width: socialMediaIconSize, height: socialMediaIconSize}}
                    className="social-icon"
                    wrapperClassName="social-icon"
                  />
                </a>

                <a href="https://www.instagram.com/brettcelestre/" target="blank">
                  <ReactSVG
                    path={instagramLogo}
                    style={{width: socialMediaIconSize, height: socialMediaIconSize}}
                    className="social-icon"
                    wrapperClassName="social-icon"
                  />
                </a>
                
              </div>
            
              <div className="copyright-box">
                <h5 className="copyright">© {this.state.year}<br />
                BRETT CELESTRE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
