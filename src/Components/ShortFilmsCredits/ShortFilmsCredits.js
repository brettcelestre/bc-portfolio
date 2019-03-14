
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { scrollTop } from '../../utils/utils.js';

import './ShortFilmsCredits.css';

const films = require('../../assets/data/short-films.js');

class ShortFilmsCredits extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmData: this.findFilmData(this.buildFileName(props.match.params.film))
    }

    this.buildFileName = this.buildFileName.bind(this);
    this.findFilmData = this.findFilmData.bind(this);
  }

  findFilmData(targetTitle) {
    return films.data.find(film => targetTitle === film.title);
  }

  buildFileName(title) {
    const x = title.split('-').reduce((acc, x) => acc + x.charAt(0).toUpperCase() + x.substr(1) + ' ', '');
    return x.substr(0, x.length - 1);
  }

  render() {
    return (
      <div className="short-films-credits">
        <Link to={`/short-films/${this.state.filmData.urlTitle}`} 
          onClick={scrollTop()}>
          <div className="short-film-credits-back">
            Back to {this.state.filmData.title}
          </div>
        </Link>

        <div className="short-films-credits-box">
          {ReactHtmlParser(this.state.filmData.credits)}
        </div>
      </div>
    );
  }
}

export default ShortFilmsCredits;
