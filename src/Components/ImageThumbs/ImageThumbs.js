
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ImageThumbs.css';

// import snapsSections from '../../assets/data/snaps-sections.js';
// import snapsData from '../../assets/data/snaps.js';
// import example from '../../assets/gallery/example/thumb-341.jpg';

class ImageThumbs extends Component {

  constructor(props){
    super(props)
    this.state = {
      gallery: this.props.location.pathname.split('/')[1],
      // snapsSections: snapsSections,
      // snaps: snapsData
    }

    this.buildThumbs = this.buildThumbs.bind(this);
    this.buildSections = this.buildSections.bind(this);
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  buildSections(gallery) {
    // const genUrlString = (string) => {
    //   return string.toLowerCase().split(' ').join('-');
    // };

    // const results = this.state[`${gallery}Sections`].data.map((data,i) => {

    //   return (
    //     <Link to={`/${gallery}/${genUrlString(data.section)}`} name="section" onClick={this.scrollToTop}>
    //       <div className="sections-option">
    //         {data.section}
    //       </div>
    //     </Link>
    //   )
    // });

    // if (this.props.location.pathname === '/scraps') {
    //   console.log("MAAAATCH");
    //   return;
    // }

    // return (
    //   <div className="row sections">
    //       {results}
    //   </div>
    // );
  }

  buildThumbs() {
    // const genUrlString = (string) => {
    //   return string.toLowerCase().split(' ').join('-');
    // };

    // const results = this.state.musicData.map((data, i) => {
    //   const largeCover = require(`../../assets/music/${data.path}/Cover_Large.jpg`);
    //   const musicPath = `/music/${genUrlString(data.band)}/${genUrlString(data.title)}`;

    //   return (
    //     <Link to={musicPath}>
    //       <div className="album six columns" key={i}>
    //         <img 
    //           src={largeCover}
    //           className="cover-art" />
    //         <div className="description">
    //           <h1>{data.title}</h1>
    //           <h2>{data.band}</h2>
    //           <h2 className="year">{data.year} | {data.type}</h2>
    //         </div>
    //       </div>
    //     </Link>
    //   )
    // });

    // const results = [0,1,2,3,4,5,6,7,8,9,10,11].map((data,i) => {
    //   return (
    //     <div className="thumbnail">
    //       <img  src={example} className="thumb-image"/>
    //     </div>
    //   )
    // });
    // return results;
  }

  render() {
    
    return (
      <div className="container thumbs-section">
        Image Thumbs
        {/* {/* <div className={this.props.location.pathname === '/scraps' ? "display-none" : "row sections"}>
          {this.buildSections('snaps')}
        </div> */}
        {/* {this.buildSections('snaps')} */}
        {/* <div className={this.props.location.pathname === '/scraps' ? "row thumbs-images no-space-scraps" : "row thumbs-images"}> */}
          {/* {this.buildThumbs()} */}
        {/* </div> */} */}
      </div>
    );
  }
}

export default ImageThumbs;
