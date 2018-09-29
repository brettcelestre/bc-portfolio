
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Friends.css';

import { data, tags } from '../../assets/data/links.js';

class Friends extends Component {

  constructor(props){
    super(props)
    this.state = {
      filteredMediums: []
    }

    this.buildLinks = this.buildLinks.bind(this);
    this.buildTags = this.buildTags.bind(this);
    this.filterByMedium = this.filterByMedium.bind(this);
    this.buildFriends = this.buildFriends.bind(this);
    this.hoverAnimation = this.hoverAnimation.bind(this);
  }

  buildLinks(links) {
    // TODO: Finish building this function
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

  hoverAnimation(data) {
    // TODO: Create fast typewriter animation of persons name
  }

  filterByMedium() {
    // TODO: Create filter by Medium
    //    Utilize tags object & this.state.filteredMediums
  }

  buildFriends() {
    return data.map((data, i) => {
      const primaryLink = data.links.find((val) => val.type === 'Portfolio') || data.links[0];
      // TODO: Support multiple links for multiple platforms
      // TODO: Support filter by medium
      return (
        <a href={primaryLink.url} target="blank"> {/* onMouseEnter={this.hoverAnimation} */}
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
    // TODO: Sort By Medium
    return (
      <div className="friends">
        <div className="friends-columns">
          {this.buildFriends()}
        </div>
      </div>
    );
  }
}

export default Friends;
