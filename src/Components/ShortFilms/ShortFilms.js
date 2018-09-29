
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import YouTube from 'react-youtube';
import './ShortFilms.css';

const films = require('../../assets/data/short-films.js');

class ShortFilms extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentSize: 'large',
      width: 0,
      height: 0,
      videoUrl: '',
      theatreMode: false,
      filmData: this.fildFilmData(this.buildFileName(props.match.params.film)),
      youTubeTarget: {},
      filmTimes: {}
    }

    this.buildTheatre = this.buildTheatre.bind(this);
    this.buildPlayerToolbar = this.buildPlayerToolbar.bind(this);
    this.closeTheatre = this.closeTheatre.bind(this);
    this.buildFileName = this.buildFileName.bind(this);
    this.fildFilmData = this.fildFilmData.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.nextFilm = this.nextFilm.bind(this);
  }

  // Finds targeted film data
  fildFilmData(targetTitle) {
    return films.data.find(film => targetTitle === film.title);
  }

  // Formats film name from url to match format in film.data
  buildFileName(title) {
    const x = title.split('-').reduce((acc, x) => acc + x.charAt(0).toUpperCase() + x.substr(1) + ' ', '');
    return x.substr(0, x.length - 1);
  }

  closeTheatre(film){
    // Stores current time of film locally. 
    localStorage.setItem(`BC.Portfolio.${this.state.filmData.title}`, this.state.youTubeTarget.getCurrentTime());
    // Sends site back to film sections
    this.props.history.push('/short-films');
  }

  nextFilm(){
    // TODO: Display an option to watch next film. 
    //    Also show other options for the current film. Photos/Credits/etc.

    // Finds the next film. Address end of film array
    // const nextFilm = films.data.indexOf(this.state.filmData) + 1;
    // this.setState({
    //   filmData: films.data[nextFilm]
    // })

    // Start Film
    // this.buildTheatre();
  }

  onPlayerReady(event) {
    // Stores event target in state. Used in closeTheatre()
    this.setState({
      youTubeTarget: event.target
    })
    // Starts film at previous viewing timestamp
    event.target.seekTo(localStorage.getItem(`BC.Portfolio.${this.state.filmData.title}`), true);
  }

  buildTheatre(){
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        autoplay: 0,
        modestbranding: 1
      }
    };
    
    // TODO: Finish setting up nextFilm()
    return (
      <div className="theatre">
        <div className="theatre-exit" onClick={this.closeTheatre}>
          <div className="x">EXIT</div>
        </div>
        <div id="screen">
          <YouTube
            className="youtube-video"
            videoId={this.state.filmData.id}
            opts={this.opts}
            onReady={this.onPlayerReady}
            // onEnd={this.nextFilm}
          />
        </div>
      </div>
    )
  }

  buildPlayerToolbar() {
    // TODO: Create toolbar to display more film information
    //    Place Film title to the Right, just like section page
    //    Place option buttons to the left
    return(
      <div className="player-toolbar">
        <div className="player-options-box">
          <div className="player-option">
            Making of Documentary
          </div>
          <div className="player-option">
            Photos
          </div>
          <div className="player-option">
            Sketches & Notes
          </div>
          <div className="player-option">
            Credits
          </div>
        </div>
        <div className="film-title-box">
          Film Title - Year - Length
        </div>
      </div>
    )
  }

  render() {
    // TODO: Add toolbar
    return (
      <div className="short-films">
        {this.buildTheatre()}
        {/* {this.buildPlayerToolbar()} */}
      </div>
    );
  }
}

export default ShortFilms;
