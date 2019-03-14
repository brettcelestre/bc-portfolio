
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import Img from 'react-image';
import { scrollTop } from '../../utils/utils.js';

import spinner from '../../assets/img/spinner.gif';
import './ShortFilmsDetails.css';

const films = require('../../assets/data/short-films.js');
const navigationWidth = 137;
const filmDetailsImages = {
  "ballroom-dance-floor": {},
  "del-rio": {},
  "the-flying-disc": {},
  "dan-pool": {},
  "justin-fexli-vs-gavin-drago": {},
  "real-life": {},
  "real-life-2": {}
}

const buildFolderName = (title) => {
  return title.split(' ').join('-').toLowerCase();
}

const requireAllImages = (data) => {
  data.forEach((film) => {
    const name = buildFolderName(film.title);
    console.log('name name = ', name);
    filmDetailsImages[name] = {details: {}};
    filmDetailsImages[name].details = {
      Small: require(`../../assets/gallery/short-films/${name}/details/Banner_Small.jpg`),
      Medium: require(`../../assets/gallery/short-films/${name}/details/Banner_Medium.jpg`),
      Large: require(`../../assets/gallery/short-films/${name}/details/Banner_Large.jpg`)
    }
    if(film.options !== null && film.options.length) {
      console.log(' options = ', film.options);
      film.options.forEach((option) => {
        const optionKey = buildFolderName(option.name);
        filmDetailsImages[name][optionKey] = {
          Small: require(`../../assets/gallery/short-films/${name}/${optionKey}/Banner_Small.jpg`),
          Medium: require(`../../assets/gallery/short-films/${name}/${optionKey}/Banner_Medium.jpg`),
          Large: require(`../../assets/gallery/short-films/${name}/${optionKey}/Banner_Large.jpg`)
        }
      });
    }
  });
}

requireAllImages(films.data);

class ShortFilmsDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmData: this.findFilmData(this.buildFileName(props.match.params.film)),
      currentSize: this.setWindowSize(window.innerWidth)
    }

    this.buildFilmsOptions = this.buildFilmsOptions.bind(this);
    this.buildFileName = this.buildFileName.bind(this);
    this.findFilmData = this.findFilmData.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.setWindowSize = this.setWindowSize.bind(this);
  }

  buildFileName(title) {
    const x = title.split('-').reduce((acc, x) => acc + x.charAt(0).toUpperCase() + x.substr(1) + ' ', '');
    return x.substr(0, x.length - 1);
  }

  findFilmData(targetTitle) {
    return films.data.find(film => targetTitle === film.title);
  }

  setWindowSize(width){
    width -= navigationWidth; // Adjusts for navigation 
    if ( width >= 1100 ) {
      return 'Large';
    } else if ( width <= 1099 && width >= 800) {
      return 'Medium';
    } else if ( width <= 799) {
      return 'Small';
    }
  }

  windowSize(width) {
    width -= navigationWidth; // Adjusts for navigation
    if (width >= 1100 && (this.state.currentSize !== 'Large')) {        // Large
      this.setState({currentSize: 'Large'});
      return;
    } else if (1099 >= width && width >= 800 
        && (this.state.currentSize !== 'Medium')) {                     // Medium
      this.setState({currentSize: 'Medium'});
      return;
    } else if (width <= 799 && (this.state.currentSize !== 'Small')) {  // Small
      this.setState({currentSize: 'Small'});
      return;
    }
  }

  buildFilmsOptions(){
    let loaderHeight, windowWidth = window.innerWidth;
    if ( windowWidth > 1024 ) {                                // Desktop
      loaderHeight = "540px";
    } else if ( 1024 >= windowWidth && windowWidth >= 800 ) {  // Tablet
      loaderHeight = "350px";
    } else if ( 799 >= windowWidth ) {                         // Modbile
      loaderHeight = "146px";
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

    if (!this.state.filmData.options) {
      return;
    }

    return this.state.filmData.options.map((option) => {
      const optionKey = buildFolderName(option.name);
      return (
        <div className="short-film-options-box" id={option.name} key={option.name}>

          <Link to={option.href} key={option.name} onClick={this.saveScrollSpot}>
            <div className="short-film-cover-box">
              <Img
                src={filmDetailsImages[this.state.filmData.urlTitle][optionKey][this.state.currentSize]}
                alt={option.name}
                className="short-film-cover-image fade-in-gallery-image"
                loader={(
                  <div style={loaderStyles}>
                    <span style={loaderHelper}></span>
                    <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
                  </div>
                )}
              />  
            </div>

            <div className="short-film-options-details">
              <div className="short-film-options-title">
                <h3>{option.name}</h3>
              </div>
            </div>
          </Link>

        </div>
      )
    });
  }

  render() {
    // const { film } = this.props.match.params;
    console.log('Dtails = ', this.state.filmData);

    let loaderHeight, windowWidth = window.innerWidth;
    if ( windowWidth > 1024 ) {                                // Desktop
      loaderHeight = "540px";
    } else if ( 1024 >= windowWidth && windowWidth >= 800 ) {  // Tablet
      loaderHeight = "350px";
    } else if ( 799 >= windowWidth ) {                         // Modbile
      loaderHeight = "146px";
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

    return (
      <div className="short-films-details">
        <WindowResizeListener
          DEBOUNCE_TIME={4000}
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div className="short-films-details-box">
          <div className="short-films-details-banner">
            <Img
              src={filmDetailsImages[this.state.filmData.urlTitle].details[this.state.currentSize]}
              alt={this.state.filmData.title}
              className="short-film-cover-image fade-in-gallery-image"
              loader={(
                <div style={loaderStyles}>
                  <span style={loaderHelper}></span>
                  <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
                </div>
              )}
            />
          </div>

          {/* <div className="short-films-details-info">
              <div className="short-films-details-title">
                {this.state.filmData.title}<span className="short-films-details-year"> - {this.state.filmData.year}</span>
              </div>
              <Link to={`/short-films/watch/${this.state.filmData.urlTitle}`}>
                <div className="short-films-details-watch-button">
                  WATCH FILM
                </div>
              </Link>
          </div>

          <div className="short-films-details-description">
              {this.state.filmData.description}
          </div> */}

          <div className="short-films-details-info">
              <div className="short-films-details-title">
                {this.state.filmData.title}<br />
                <span className="short-films-details-year">{this.state.filmData.year}</span>
              </div>
              <Link to={`/short-films/watch/${this.state.filmData.urlTitle}`}>
                <div className="short-films-details-watch-button">
                  WATCH FILM
                </div>
              </Link>
          </div>

          <div className="short-films-details-description">
            {this.state.filmData.description}
          </div>

          <div className="short-films-details-credits">
            <Link to={`/short-films/credits/${this.state.filmData.urlTitle}`}
              onClick={scrollTop()}>
              <div className="short-films-details-credits-button">
                VIEW FULL CREDITS
              </div>
            </Link>
          </div>

          {this.buildFilmsOptions()}
        </div>
      </div>

    );
  }
}

export default ShortFilmsDetails;
