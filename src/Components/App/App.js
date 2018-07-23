// 
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './App.css';
import logo from '../../assets/img/logo-smaller-large.png';

const menuIcon = require('../../assets/svg/random-menu-lines.svg');

const galleryData = {
  artwork: {
    collage: require('../../assets/data/collage.js'),
    digital: require('../../assets/data/digital-art.js')
  }
};

class App extends Component {

  constructor(props) {
    super(props)

    // console.log('this.props.route.zoom', this.props.route.zoom);
    
    this.state = {
      artmenu: false,
      // drawingsUrl: this.createUrlPathForPiece('drawings', true),
      medium: '',
      mobileMenu: false,
      fade: false
    };
    this.createUrlPathForPiece = this.createUrlPathForPiece.bind(this);
    this.artworkMenuEnter = this.artworkMenuEnter.bind(this);
    this.artworkMenuLeave = this.artworkMenuLeave.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidUpdate() {
    // console.log('App > update = ', this.props);
  }

  // Creates the Link URL for each section with whatever the latest piece of artwork is called
  createUrlPathForPiece(section, category) {
    let pieceName;
    if (galleryData[section][category].data[0].title.includes(' ')) {
      pieceName = galleryData[section][category].data[0].title.toLowerCase().split(' ').join('-');
    } else {
      pieceName = galleryData[section][category].data[0].title.toLowerCase();
    }
    return `/${section}/${category}/${pieceName}`;
  }

  // Displays Dropdown
  artworkMenuEnter() {
    this.setState({artmenu: true});
  }
  // Hides dropdown
  artworkMenuLeave() {
    this.setState({artmenu: false});
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

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="app">
        <div className="menu-button" onClick={this.menuToggle}>
          <ReactSVG
            path={menuIcon}
            style={{width: 27, height: 27}}
            className="menu-icon"
            wrapperClassName="menu-icon"
          />
        </div>

        <div className={this.state.mobileMenu ? "navigation-mobile menu-show" : "navigation-mobile"}>
          <ul>
            <Link to="/paints" onClick={this.menuToggle} title="Paints"><li>Paints</li></Link>
            <Link to="/snaps" onClick={this.menuToggle} title="Snaps"><li>Snaps</li></Link>
            <Link to="/scraps" onClick={this.menuToggle} title="Scraps"><li>Scraps</li></Link>
            <Link to="/me" onClick={this.menuToggle} title="Me"><li>Me</li></Link>
          </ul>
        </div>

        <div className={this.state.fade ? "fade-show" : "fade-no-show"} onClick={this.menuToggle}></div>

        <div className="app-menu">
          <img src={logo} className="logo" width="124px" height="133px" />
          <div className="mainTitleBox">
            <Link to="/" onClick={this.scrollToTop} title="Brett Celestre">
              <h2 className="mainTitle">Brett<span className="main-title-spacing"> </span>Celestre</h2>
            </Link>
          </div>

          <div className="navigation">
            <Link to="/photography" title="Photography">
              <div className="section-title">
                Photography
              </div>
            </Link>

            <Link to="/photography/film" title="Film">
              <div className="option">
                Film
              </div>
            </Link>
            <Link to="/photography/digital" title="Digital">
            {/* <Link to={this.createUrlPathForPiece('digital-art', true)} title="Digital"> */}
              <div className="option">
                Digital
              </div>
            </Link>
            <Link to="/photography/client" title="Client">
              <div className="option">
                Client
              </div>
            </Link>

            <Link to="/artwork" title="Artwork">
              <div className="section-title">
                Artwork
              </div>
            </Link>
            {/* <Link to="/artwork/digital" title="Digital Art"> */}
            <Link to={this.createUrlPathForPiece('artwork', 'digital')} title="Digital Art">
              <div className="option">
                Digital
              </div>
            </Link>
            <Link to={this.createUrlPathForPiece('artwork', 'collage')} title="Collage">
              <div className="option">
                Collage
              </div>
            </Link>
            <Link to="/artwork/drawings" title="Drawings">
              <div className="option">
                Drawings
              </div>
            </Link>
            <Link to="/artwork/sketches" title="Sketches">
              <div className="option">
                Sketches
              </div>
            </Link>
            
            <Link to="/short-films" title="Short Films">
              <div className="section-title">
                Short Films
              </div>
            </Link>
            <Link to="/short-films/del-rio" title="Del Rio">
              <div className="option">
                Del Rio
              </div>
            </Link>
            <Link to="/short-films/ballroom-dance-floor" title="Ballroom Dance Floor">
              <div className="option">
                Ballroom Dance Floor
              </div>
            </Link>
            <Link to="/short-films/all" title="View All Short Films">
              <div className="option">
                View All
              </div>
            </Link>
            {/* <Link to="/short-films/frisbee" title="Frisbee">
              <div className="option">
                Frisbee
              </div>
            </Link>
            <Link to="/short-films/justin-felix-vs-gavin-drago" title="Justin Felix vs Gavin Drago">
              <div className="option">
                Felix vs Drago
              </div>
            </Link>
            <Link to="/short-films/real-life-2" title="Real Life 2">
              <div className="option">
                Real Life 2
              </div>
            </Link>
            <Link to="/short-films/real-life" title="Real Life">
              <div className="option">
                Real Life
              </div>
            </Link> */}
            <Link to="/spatial" title="Spatial">
              <div className="section-title">
                Spatial
              </div>
            </Link>

            <Link to="/spacial/woodworking" title="Woodworking">
              <div className="option">
                Woodworking
              </div>
            </Link>
            <Link to="/spacial/wire" title="Wire">
              <div className="option">
                Wire
              </div>
            </Link>
            <Link to="/spacial/sculpture" title="Sculpture">
              <div className="option">
                Sculpture
              </div>
            </Link>
            <Link to="/applications" title="Applications">
              <div className="section-title">
                Applications
              </div>
            </Link>
            <Link to="/resources" title="Resources">
              <div className="section-title">
                Resources
              </div>
            </Link>
            <Link to="/friends" title="Friends">
              <div className="section-title">
                Friends
              </div>
            </Link>
            <Link to="/about" title="About">
              <div className="section-title">
                About
              </div>
            </Link>
            <Link to="/resume" title="Resume">
              <div className="section-title">
                Resume
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
