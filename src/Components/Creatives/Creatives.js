
import React, { Component } from 'react';
import './Creatives.css';

import { data, tags } from '../../assets/data/links';

class Creatives extends Component {

  constructor(props){
    super(props)
    this.state = {
      data,
      tags,
      filteredMediums: [],
      visited: {},
      filterShow: false
    }

    this.buildLinks = this.buildLinks.bind(this);
    this.buildTags = this.buildTags.bind(this);
    this.filterByMedium = this.filterByMedium.bind(this);
    this.buildFriends = this.buildFriends.bind(this);
    this.hoverAnimation = this.hoverAnimation.bind(this);
    this.buildSortDropdown = this.buildSortDropdown.bind(this);
    this.removeMedium = this.removeMedium.bind(this);
    this.visitingFriends = this.visitingFriends.bind(this);
    this.filterHoverEnter = this.filterHoverEnter.bind(this);
    this.filterHoverExit = this.filterHoverExit.bind(this);
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
        <span className="highlight">{mediums}</span>
      </div>
    )
  }

  hoverAnimation(data) {
    // TODO: Create fast typewriter animation of persons name
  }

  filterByMedium(medium) {
    const newList = this.state.filteredMediums;
    // Adds new filter
    if (!this.state.filteredMediums.includes(medium)) {
      newList.push(medium);
      this.setState({
        filteredMediums: newList,
        filterShow: false,
        fade: false
      });
    }
    
    // Resets dropdown
    // document.getElementsByClassName('friends-sort-select')[0][0].selected = true;
    // var selection = document.querySelectorAll(`#friends-sort-select option#${e.target.value}`);
    // selection.selected = false;
  }

  removeMedium(e) {
    const target = e.target.id;
    const newList = this.state.filteredMediums.reduce((acc, val) => {
      if ( target !== val) {
        acc.push(val);
        return acc;
      } else {
        return acc;
      }
    }, []);
    this.setState({
      filteredMediums: newList
    });
  }

  visitingFriends(friend) {
    // console.log('friend', friend);
  }

  buildFriends() {
    let friendsData = data;
    
    if (this.state.filteredMediums.length){
      friendsData = data.reduce((acc, val) => {
        let flag = false;
        val.tags.forEach((medium) => {
          if (this.state.filteredMediums.includes(medium)) {
            flag = true;
          }
        });
        if (flag) {
          acc.push(val);
          return acc;
        }
        return acc;
      }, []);
    }

    return friendsData.map((data, i) => {
      const primaryLink = data.links.find((val) => val.type === 'Portfolio') || data.links[0];
      // TODO: Support multiple links for multiple platforms
      return (
        <a href={primaryLink.url} target="blank" key={data.title} onClick={this.visitingFriends} > {/* onMouseEnter={this.hoverAnimation} */}
          <div className="friends-section" id={data.title}>
            <h4>{data.title}</h4>
            {this.buildTags(data.tags)}
            {/* {this.buildLinks(data.links)} */}
          </div>
        </a>
      )
    });
  }

  filterHoverEnter = () => {
    const filterBg = document.getElementById('friends-bg');
    filterBg.classList.add("friends-pre-fade");
  }
  
  filterHoverExit = () => {
    const filterBg = document.getElementById('friends-bg');
    filterBg.classList.remove("friends-pre-fade");
  }

  toggleFilter = () => {
    if (this.state.filterShow) {
      this.setState({
        filterShow: false,
        fade: false
      });
    } else {
      this.setState({
        filterShow: true,
        fade: true
      });
    }
  }

  buildSortDropdown() {
    // const options = tags.map((data, i) => {
    //   return (
    //     <option value={data} key={data} id={data} type='reset'>{data}</option>
    //   )
    // });
    // const options = tags.map((data, i) => {
    //   return (
    //     <div value={data} key={data} id={data}>{data}</div>
    //   )
    // });
    // TODO: Create custom dropdown menu
    return (
      // <select className="friends-sort-select" id="friends-sort-select" onChange={this.filterByMedium}>
      //   <option disabled defaultValue value>  filter by medium</option>
      //   {options}
      // </select>


      // Adding that hover state shows the bg cut over when theres a filter applied

        <div 
          id="filter-button-box"
          className={this.state.fade ? "filter-button filter-button-show" : "filter-button"} 
          // onMouseEnter={this.filterHoverEnter} 
          // onMouseLeave={this.filterHoverExit} 
          onClick={this.toggleFilter}
        >
          Filter by Medium
        </div>
    )
  }

  buildFilteredMediums() {
    return this.state.filteredMediums.map((data) => {
      return (
        <div className="filtered-option-box" onClick={this.removeMedium} key={`${data}-filter`} id={data}>
          {data}
          <div className="filtered-option-box-exit" onClick={this.removeMedium} id={data}>
            X
          </div>
        </div>
      )
    });
  }

  buildFilterTags = () => {
    return tags.map((data, i) => {
      if (!this.state.filteredMediums.includes(data)) {
        return (
          <div className="filter-option" key={data} onClick={() => {this.filterByMedium(data)}}>
            {/* TODO: when selected, add filter to list but keep dropdown
            Update font to be struck out with a line */}
            <span className="bold"  value={data} id={data}>
              {data}
            </span>
          </div>
        )
      }
    });
  }

  render() {
    // const options = tags.map((data, i) => {
    //   if (!this.state.filteredMediums.includes(data)) {
    //     return (
    //       <div className="filter-option"  key={data}>
    //         <span className="highlight" onClick={() => {this.filterByMedium(data)}} value={data} id={data}>
    //           {data}
    //         </span>
    //         </div>
    //     )
    //   }
    // });

    return (
      <div className="friends" id="friends-bg">
        <div className="friends-sort-box">
          {/* <span className="type">Filter: </span> */}
          {this.buildSortDropdown()}
          
          <div className={this.state.fade ? "filter-options filter-options-show" : "filter-options"}>
            {this.buildFilterTags()}
          </div>
          
          {this.buildFilteredMediums()}

        </div>
        <div className={this.state.fade ? "creatives-fade-show" : "creatives-fade-no-show"} onClick={this.toggleFilter}></div>
        <div className="friends-columns">
          {this.buildFriends()}
        </div>
      </div>
    );
  }
}

export default Creatives;
