
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Applications.css';

// import { data, tags } from '../../assets/data/links.js';

class Applications extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    // this.buildLinks = this.buildLinks.bind(this);
  }

  render() {
    return (
      <div className="applications">
        Applications
      </div>
    );
  }
}

export default Applications;
