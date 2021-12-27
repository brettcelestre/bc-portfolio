
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import WindowSizeListener from 'react-window-size-listener';
import { isMobile } from '../../utils/utils';
import './ImageSections.css';
import spinner from '../../assets/img/spinner.gif';

const data = {
  artwork:  require('../../assets/data/artwork-sections.js'),
  photography: require('../../assets/data/photography-sections.js'),
  photographyFilm: require('../../assets/data/photography_film_sections.js'),
  photographyDigital: require('../../assets/data/photography_digital_sections.js'),
  spatial: require('../../assets/data/spatial.js')
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
    // this.buildBreadcrumb = this.buildBreadcrumb.bind(this);
    this.buildSectionThumbs = this.buildSectionThumbs.bind(this);
    this.genUrlString = this.genUrlString.bind(this);
  }

  setWindowSize(width){
    // Adjusts for navigation 
    if ( width >= 1024) {
      width -= 137;
    }

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

  imageThumbLoading() {
    return (
      <div className="thumb-image-loading"></div>
    )
  }

  breadcrumbs(section, category) {
    return (
      <div className="image-sections-view-breadcrumb">
        {(section && section !== 'spatial') && <Link to={`/${section}`}>
          <span className="image-view-breadcrumb-link">
            {section}
          </span>
        </Link>}
        {(section && category && <span>
          <span className="breadcrumb-arrow">&nbsp;&nbsp;&lt;&nbsp;&nbsp;</span>
          <span className="image-view-breadcrumb-link">
            {category}
          </span>
        </span>)}
        
        {/* {category && <span className="breadcrumb-arrow">&nbsp;&nbsp;&lt;&nbsp;&nbsp;</span>}
        {category && !subCategory && <Link to={`/${section}/${category}/${data[0].id}`}><span className="image-view-breadcrumb-link">{category}</span></Link>} */}
        {/* {category && subCategory && <Link to={`/${section}/${category}/sections`}><span className="image-view-breadcrumb-link">{category}</span></Link>} */}
      </div>
    )
  }

  buildSectionThumbs() {
    const category = this.state.category;
    let target = category ?
      this.state.section + category.substr(0,1).toUpperCase() + category.substr(1) :
      this.state.section;

    // const loaderStyles = {
    //   height: "250px",
    //   width: "100%",
    //   backgroundColor: "#333333"
    // }

    // Fix lazy load height based on image aspect ratio and window size.
    //   If mobile width = 100% window width
    //   Tablet width = calc(100% - left/right padding)
    //   Desktop width = calc(100% - left/right padding)
    //   If greater than desktop Mac with it’s just true to size

    let loaderHeight, windowWidth = window.innerWidth;
    if ( windowWidth > 1024) {          // Desktop
      loaderHeight = "225px";
    } else if ( windowWidth <= 1024) {  // Tablet and Modbile
      loaderHeight = "150px";
    }

    const loaderStyles = {
      height: loaderHeight,
      width: "100%",
      textAlign: "center"
    }

    const loadingSpinnerStyles = {
      verticalAlign: "middle"
    }

    const loaderHelper = {
      display: "inline-block",
      height: "100%",
      verticalAlign: "middle"
    }

    return data[target].data.map((section, i) => {
      let cover = category ?
      require(`../../assets/gallery/${this.state.section}/${this.state.category}/${this.genUrlString(section.title)}/Banner_${this.state.currentSize}.jpg`) :
      require(`../../assets/gallery/${this.state.section}/${this.genUrlString(section.title)}/Banner_${this.state.currentSize}.jpg`);
      return (
        <div className="section-thumbnail-box" key={section.title}>
          <Link to={section.href} onClick={this.scrollToTop}>
              <div className="section-thumbnail" id="section-thumbnail">
                <Img
                  src={cover}
                  className="thumb-image fade-in-gallery-image"
                  loader={(
                    <div style={loaderStyles}>
                      <span style={loaderHelper}></span>
                      <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
                    </div>
                  )}
                />
              </div>
              <div className="image-section-title">
              <h2>{section.title}</h2>
              <span>{section.length}</span>
              </div>
          </Link>
        </div>
      )
    });
  }

  // buildBreadcrumb() {
    // const { section, category } = this.props;
  // }

  render() {
    const { match: { params: { section, category } } } = this.props;
    return (
      <div className="thumbs-section-outer">
        
        <WindowSizeListener
            /*
            TODO: Get debounce to work. Currently at 100
            DEBOUNCE_TIME={4000}
            */
            DEBOUNCE_TIME="1000"
            onResize={windowSize => {
              this.windowSize(windowSize.windowWidth)
            }
          }/>

        {this.breadcrumbs(section, category)}

        <div className="row section-thumbs">
          {this.buildSectionThumbs()}
        </div>

      </div>
    );
  }
}

export default ImageSections;
