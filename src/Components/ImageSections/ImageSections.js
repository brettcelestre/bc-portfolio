
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ImageSections.css';

// import test from'./test.yml';
// console.log('test = ', test);
// const nativeObject = YAML.parse(require('./test.yml'));
// const nativeObject = YAML.load('./test.yml');
// console.log('nativeObject = ', nativeObject);

// const data = {
//   snaps:  require('../../assets/data/snaps-sections.js'),
//   paints: require('../../assets/data/paints-sections.js')
// }


class ImageThumbs extends Component {

  componentDidUpdate(){
    if (this.state.gallery !== this.props.match.params.section) {
      this.setState({
        gallery: this.props.match.params.section
      })
    }
  }

  constructor(props){
    super(props)
    this.state = {
      gallery: props.match.params.section,
    }

    this.buildSectionThumbs = this.buildSectionThumbs.bind(this);
  }

  buildSectionThumbs() {
    // const genUrlString = (string) => {
    //   return string.toLowerCase().split(' ').join('-');
    // };
    // const gallery = this.props.location.pathname.split('/')[1];
    // return data[gallery].data.map((data, i) => {
    //   const largeCover = require(`../../assets/gallery/${gallery}/${genUrlString(data.section)}/${data.src}`);
    //   const sectionPath = `/${gallery}/${genUrlString(data.section)}`;
    //   return (
    //     <Link to={sectionPath}>
    //        <div className="thumbnail">
    //         <h2>{data.section}</h2>
    //          <img src={largeCover} className="thumb-image"/>
    //        </div>
    //     </Link>
    //   )
    // });
  }

  render() {
    return (
      <div className="thumbs-section">
        image sections {this.state.gallery}
        {/* <div className="row thumbs">
          {this.buildSectionThumbs()}
        </div> */}
      </div>
    );
  }
}

export default ImageThumbs;
