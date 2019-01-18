
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import Img from 'react-image';

import spinner from '../../assets/img/spinner.gif';
import './ShortFilmsSections.css';

const films = require('../../assets/data/short-films.js');

const filmCoverImages = {
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
    filmCoverImages[name] = {
      Small: require(`../../assets/gallery/short-films/${name}/covers/Banner_Small.jpg`),
      Medium: require(`../../assets/gallery/short-films/${name}/covers/Banner_Medium.jpg`),
      Large: require(`../../assets/gallery/short-films/${name}/covers/Banner_Large.jpg`)
    }
  })
}

requireAllImages(films.data);

class ShortFilmsSections extends Component {

  constructor(props){
    super(props)
    this.state = {
      films: films,
      currentSize: 'Large'
    }

    this.buildFilmsPreviews = this.buildFilmsPreviews.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.saveScrollSpot = this.saveScrollSpot.bind(this);
  }

  componentWillMount() {
    // Finds window size and sets currentSize
    this.windowSize(window.innerWidth, window.innerHeight)
    // TODO: Check localStorage - BC.Portfolio.FilmScrollSpot and scroll to that spot
  }

  saveScrollSpot() {
    // TODO: Store film section scrolling spot
    //    localStorage.setItem(`BC.Portfolio.FilmScrollSpot`, currentScrollSpot);
  }

  windowSize(width, height, set) {
    // Adjusts for navigation
    width += 155;
    if (width >= 1500 && (this.state.currentSize !== 'Large' || set)) {   // Large
      if (set) return 'Large';
      this.setState({currentSize: 'Large'});
      return;
    }
    if (width >= 1100 && (this.state.currentSize !== 'Medium' || set)) {  // Medium
      if (set) return 'Medium';
      this.setState({currentSize: 'Medium'});
      return;
    }
    if (width <= 800 && (this.state.currentSize !== 'Small' || set)) {    // Small
      if (set) return 'Small';
      this.setState({currentSize: 'Small'});
      return;
    }
  }

  buildFilmsPreviews(){

    let loaderHeight, windowWidth = window.innerWidth;
    if ( windowWidth > 1024 ) {                                // Desktop
      loaderHeight = "540px";
    } else if ( 1099 >= windowWidth && windowWidth >= 800 ) {  // Tablet
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

    return this.state.films.data.map((film) => {
      return (
        <div className="short-film-box" id={film.title} key={film.title}>

          <Link to={film.href} key={film.title} onClick={this.saveScrollSpot}>
            <div className="short-film-cover-box">
              <Img
                src={filmCoverImages[buildFolderName(film.title)][this.state.currentSize]}
                alt={film.title}
                className="short-film-cover-image"
                loader={(
                  <div style={loaderStyles}>
                    <span style={loaderHelper}></span>
                    <img src={spinner} style={loadingSpinnerStyles} />
                  </div>
                )}
              />  
            </div>

            <div className="short-film-details">
              <h3>{film.title}</h3>
              <h4>{film.year} | {film.length}</h4>
            </div>
          </Link>

        </div>
      )
    });
  }

  render() {
    return (
      <div className="short-films-sections">
        <WindowResizeListener
          DEBOUNCE_TIME={4000}
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        {this.buildFilmsPreviews()}
      </div>
    );
  }
}

export default ShortFilmsSections;
