
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './ShortFilmsPlayer.css';

const films = require('../../assets/data/short-films.js');

class ShortFilmsPlayer extends Component {

  componentWillUnmount() {
    // Stores current time of film locally
    localStorage.setItem(`BC.Portfolio.${this.state.filmData.title}`, this.state.youTubeTarget.getCurrentTime());
  }

  constructor(props){
    super(props)
    this.state = {
      currentSize: 'large',
      width: 0,
      height: 0,
      videoUrl: '',
      theatreMode: false,
      filmData: this.findFilmData(this.buildFileName(props.match.params.film)),
      youTubeTarget: {},
      filmTimes: {}
    }

    this.buildTheatre = this.buildTheatre.bind(this);
    this.closeTheatre = this.closeTheatre.bind(this);
    this.buildFileName = this.buildFileName.bind(this);
    this.findFilmData = this.findFilmData.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.nextFilm = this.nextFilm.bind(this);
  }

  findFilmData(targetTitle) {
    return films.data.find(film => targetTitle === film.title);
  }

  buildFileName(title) {
    const x = title.split('-').reduce((acc, x) => acc + x.charAt(0).toUpperCase() + x.substr(1) + ' ', '');
    return x.substr(0, x.length - 1);
  }

  closeTheatre(film){
    this.props.history.push(`/short-films/${this.props.match.params.film}`);
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
    // TODO: if timestamp is too far in the past, don't use
    event.target.seekTo(localStorage.getItem(`BC.Portfolio.${this.state.filmData.title}`), true);
  }

  buildTheatre(){
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        suggestedQuality: 'hd720'
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
            opts={opts}
            onReady={this.onPlayerReady}
            // onEnd={this.nextFilm}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="short-films">
        {this.buildTheatre()}
      </div>
    );
  }
}

export default ShortFilmsPlayer;
