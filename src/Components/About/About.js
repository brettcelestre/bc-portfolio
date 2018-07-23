
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './About.css';

// import { data, tags } from '../../assets/data/links.js';

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    // this.buildLinks = this.buildLinks.bind(this);
  }

  render() {
    return (
      <div className="about">
        about
      </div>
    );
  }
}

export default About;
