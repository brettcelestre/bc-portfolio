
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
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
    console.log('name = ', name);

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

    console.log('FILMS = ', films);

    this.buildFilmsPreviews = this.buildFilmsPreviews.bind(this);
    this.windowSize = this.windowSize.bind(this);
  }

  componentWillMount() {
    // Finds window size
    this.windowSize(window.innerWidth, window.innerHeight)
  }

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height, set) {
    // Adjusts for navigation
    width += 155;    

    // Makes sure you're not zoomed in
    if (set || !this.state.zoom) {

      // Large Width
      if (width >= 1500 && (this.state.currentSize !== 'Large' || set)) {
        if (set) return 'Large';
        this.setState({currentSize: 'Large'});
        console.log('windowSize = Large');
        return;
      }
      // Medium Width
      if (width >= 1100 && (this.state.currentSize !== 'Medium' || set)) {
        if (set) return 'Medium';
        this.setState({currentSize: 'Medium'});
        console.log('windowSize = Medium');
        return;
      }
      // Small Width
      if (width <= 800 && (this.state.currentSize !== 'Small' || set)) {
        if (set) return 'Small';
        this.setState({currentSize: 'Small'});
        console.log('windowSize = Small');
        return;
      }
    }
  }

  buildFilmsPreviews(){
    return this.state.films.data.map((film) => {
      return (
        <div className="short-film-box">

          <div className="short-film-cover-box">
            <img
              src={filmCoverImages[buildFolderName(film.title)][this.state.currentSize]}
              // width={film.sizes[this.state.currentSize].width}
              // height={film.sizes[this.state.currentSize].height}
              alt="Del Rio"
              className="short-film-cover-image"/>
          </div>

          <div className="short-film-details">
            <h3>{film.title}</h3>
            <h4>{film.year} | {film.length}</h4>
          </div>

        </div>
      )
    });
  }

  render() {
    return (
      <div className="short-films-sections">
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          */
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
