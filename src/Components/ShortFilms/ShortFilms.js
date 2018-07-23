
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ShortFilms.css';

// import { data, tags } from '../../assets/data/links.js';

class ShortFilms extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    // this.buildLinks = this.buildLinks.bind(this);
  }

  render() {
    return (
      <div className="short-films">
        ShortFilms
      </div>
    );
  }
}

export default ShortFilms;
