
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Friends.css';

import { data, tags } from '../../assets/data/links.js';

class Friends extends Component {

  constructor(props){
    super(props)
    this.state = {
    }

    this.buildLinks = this.buildLinks.bind(this);
    this.buildTags = this.buildTags.bind(this);
    this.buildFriends = this.buildFriends.bind(this);
    this.test = this.test.bind(this);
  }

  buildLinks(links) {
    return links.map((data) => {
      const type = data.type.toUpperCase();
      return(
        <a href={data.url} className="type" target="blank">
          {type}
        </a>
      )
    });
  }

  buildTags(tags){
    const mediums = tags.join(', ');
    return(
      <div className="tags">
        {mediums}
      </div>
    )
  }

  test(val) {
    console.log('hover');
  }

  buildFriends() {
    const genUrlString = (string) => {
      return string.toLowerCase().split(' ').join('-');
    };
    const gallery = this.props.location.pathname.split('/')[1];
    return data.map((data, i) => {

      const primaryLink = data.links.find((val) => val.type === 'Portfolio') || data.links[0];

      return (
        <a href={primaryLink.url} target="blank" onMouseEnter={this.test}>
          <div className="friends-section" id={data.title}>
            <h4>{data.title}</h4>
            {this.buildTags(data.tags)}
            {/* {this.buildLinks(data.links)} */}
          </div>
        </a>
      )
    });
  }

  render() {
    return (
      <div className="friends">
        {/* Sort By */}
        <div className="friends-columns">
          {this.buildFriends()}
        </div>
      </div>
    );
  }
}

export default Friends;
