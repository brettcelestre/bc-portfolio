
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './App.css';
import logo from '../../assets/img/logo-smaller-large-2.png';
import linkedinLogo from '../../assets/svg/social-linkedin.svg';
import githubLogo from '../../assets/svg/social-github.svg';
import instagramLogo from '../../assets/svg/social-instagram.svg';

const menuIcon = require('../../assets/svg/random-menu-lines.svg');

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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    if (window.innerWidth < 1024) {
      this.menuToggle();
    }
  }

  render() {
    return (
      <div className="app">
        <div className="menu-button" onClick={this.menuToggle}>
          <ReactSVG
            path={menuIcon}
            style={{width: 32, height: 32}}
            className="menu-icon"
            wrapperClassName="menu-icon"
          />
        </div>

        <div className={this.state.fade ? "fade-show" : "fade-no-show"} onClick={this.menuToggle}></div>

        <div className="app-menu">
          <img src={logo} className="logo" width="124px" height="133px" />
          <div className="main-title-box">
            <Link to="/" onClick={this.cleanUp}>
              <h2 className="main-title">Brett<span className="main-title-spacing"> </span>Celestre</h2>
            </Link>
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

            <Link to="/friends" replace onClick={this.cleanUp}>
              <div className="section-title">
                Friends
              </div>
            </Link>

            <Link to="/about" replace onClick={this.cleanUp}>
              <div className="section-title">
                About
              </div>
            </Link>

            <Link to="/resume" replace onClick={this.cleanUp}>
              <div className="section-title">
                Resume
              </div>
            </Link>
            
          </div>

          <div className="social-links-box">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/brettcelestre/" target="blank">
                <ReactSVG
                  path={linkedinLogo}
                  style={{width: 27, height: 27}}
                  className="social-icon"
                  wrapperClassName="social-icon"
                />
              </a>

              <a href="https://github.com/brettcelestre" target="blank">
                <ReactSVG
                  path={githubLogo}
                  style={{width: 27, height: 27}}
                  className="social-icon"
                  wrapperClassName="social-icon"
                />
              </a>

              <a href="https://www.instagram.com/brettcelestre/" target="blank">
                <ReactSVG
                  path={instagramLogo}
                  style={{width: 27, height: 27}}
                  className="social-icon"
                  wrapperClassName="social-icon"
                />
              </a>
            </div>
          
            <div className="copyright-box">
              <h5 className="copyright">© {this.state.year} Brett Celestre</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
