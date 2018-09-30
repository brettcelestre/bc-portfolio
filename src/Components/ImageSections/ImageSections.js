
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import './ImageSections.css';

const data = {
  artwork:  require('../../assets/data/artwork-sections.js'),
  photography: require('../../assets/data/photography-sections.js'),
  photographyFilm: require('../../assets/data/photography_film_sections.js'),
  photographyDigital: require('../../assets/data/photography_digital_sections.js')
}

class ImageSections extends Component {

  componentDidUpdate(){
    // Updates section state
    if (this.state.section !== this.props.match.params.section) {
      this.setState({
        section: this.props.match.params.section
      })
    }
    // Updates category state
    if (this.state.category !== this.props.match.params.category) {
      this.setState({
        category: this.props.match.params.category
      });
    }
  }

  constructor(props){
    super(props)
    
    this.state = {
      section: props.match.params.section,
      category: props.match.params.category,
      currentSize: this.setWindowSize(window.innerWidth),
      initialSet: false
    }
    
    this.setWindowSize = this.setWindowSize.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.buildSectionThumbs = this.buildSectionThumbs.bind(this);
    this.genUrlString = this.genUrlString.bind(this);
  }

  setWindowSize(width){
    width -= 155; // Adjusts for navigation 
    if ( width >= 1100 ) {
      return 'Large';
    } else if ( width <= 1099 && width >= 800) {
      return 'Medium';
    } else if ( width <= 799) {
      return 'Small';
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  windowSize(width) {
    // This disables widowSize from running initial render mount
    if (this.state.initialSet === false) {
      this.setState({
        initialSet: true
      });
      return;
    };

    width -= 155; // Adjusts for navigation 

    // Large Width
    if ( width >= 1100 && this.state.currentSize !== 'Large' ) {
      this.setState({currentSize: 'Large'});
    // Medium Width
    } else if ( width <= 1099 && width >= 800 && this.state.currentSize !== 'Medium' ) {
      this.setState({currentSize: 'Medium'});
    // Small Width
    } else if ( width <= 799 && this.state.currentSize !== 'Small') {
      this.setState({currentSize: 'Small'});
    }
  }

  genUrlString(title) {
    return title.split(' ').join('-').toLowerCase();
  }

  buildSectionThumbs() {
    const category = this.state.category;
    let target = category ?
      this.state.section + category.substr(0,1).toUpperCase() + category.substr(1) :
      this.state.section;

    return data[target].data.map((data, i) => {
      let cover = category ?
      require(`../../assets/gallery/${this.state.section}/${this.state.category}/${this.genUrlString(data.title)}/Banner_${this.state.currentSize}.jpg`) :
      require(`../../assets/gallery/${this.state.section}/${this.genUrlString(data.title)}/Banner_${this.state.currentSize}.jpg`);

      return (
        <div className="section-thumbnail-box" key={data.title}>
          <Link to={data.href} onClick={this.scrollToTop}>
              <div className="section-thumbnail">
                <img src={cover} className="thumb-image"/>
              </div>
              <div className="image-section-title">
              <h2>{data.title}</h2>
              </div>
          </Link>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="thumbs-section-outer">
        
        <WindowResizeListener
            /*
            TODO: Get debounce to work. Currently at 100
            DEBOUNCE_TIME={4000}
            */
            DEBOUNCE_TIME="1000"
            onResize={windowSize => {
              this.windowSize(windowSize.windowWidth)
            }
          }/>

        {/* 
          // TODO: create section path
        <div className="photography-folder-header">
          <h2>
            {this.state.section} > {this.state.category}
          </h2>
        </div> 
        */}

        <div className="row section-thumbs">
          {this.buildSectionThumbs()}
        </div>

      </div>
    );
  }
}

export default ImageSections;
