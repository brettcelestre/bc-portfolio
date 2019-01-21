
import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import PropTypes from 'prop-types';
import Img from 'react-image';
import ReactSVG from 'react-svg';
// import { Link, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import { keyHandler, KEYPRESS } from 'react-key-handler';

import spinner from '../../assets/img/spinner.gif';
import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';
const arrowLeft = require('../../assets/svg/ios-arrow-left.svg');
const arrowRight = require('../../assets/svg/ios-arrow-right.svg');

const navigationWidth = 137;

const galleryData ={
  artwork: {
    collage: require('../../assets/data/artwork_collage.js'),
    digital: require('../../assets/data/artwork_digital.js'),
    // drawings: require('../../assets/data/artwork_drawings.js'),
    sketches: require('../../assets/data/artwork_sketches.js')
  },
  photography: {
    film: {
      desk: require('../../assets/data/photography_film_desk.js'),
      'black-&-white': require('../../assets/data/photography_film_black-&-white.js'),
      nature: require('../../assets/data/photography_film_nature.js'),
      places: require('../../assets/data/photography_film_places.js'),
      things: require('../../assets/data/photography_film_things.js'),
      people: require('../../assets/data/photography_film_people.js')
    },
    client: require('../../assets/data/photography_client.js'),
    digital: {
      // 'everyday-life': require('../../assets/data/photography_digital_everyday-life.js'),
      nature: require('../../assets/data/photography_digital_nature.js'),
      people: require('../../assets/data/photography_digital_people.js'),
      places: require('../../assets/data/photography_digital_places.js')
      // things: require('../../assets/data/photography_digital_things.js')
    }
  },
  spatial: require('../../assets/data/spatial.js')
}

let images = {
  artwork: {
    collage: {},
    digital: {},
    drawings: {},
    sketches: {}
  },
  photography: {
    film: {
      desk: {},
      'black-&-white': {},
      'everyday-life': {},
      nature: {},
      people: {},
      places: {},
      things: {}
    },
    client: {},
    digital: {
      'everyday-life': {},
      people: {},
      nature: {},
      places: {},
      things: {}
    }
  },
  spatial: {},
  'short-films': {}
}

// Formats piece name as JPG file name
const buildFileName = (title) => {
  if (title.toString().includes(' ')) {
    return title.split(' ').join('_');
  }
  return title;
}

const requireAllImages = (data) => {
  Object.keys(data).forEach((section) => {
    // Single Layer deep
    if ( section === 'spatial' || section === 'short-films') {
      galleryData[section].data.forEach((piece) => {
        const name = buildFileName(piece.title);
        images[section][piece.urlTitle] = {
          Small: require(`../../assets/gallery/${section}/${name}_Small.jpg`),
          Medium: require(`../../assets/gallery/${section}/${name}_Medium.jpg`),
          Large: require(`../../assets/gallery/${section}/${name}_Large.jpg`)
        }
      });
    // Two Layers Deep
    } else {
      Object.keys(galleryData[section]).forEach((category) => {
        // Is only a category
        if ( galleryData[section][category].data) {
          galleryData[section][category].data.forEach((piece) => {
            const name = buildFileName(piece.title);
            images[section][category][piece.urlTitle] = {
              Small: require(`../../assets/gallery/${section}/${category}/${name}_Small.jpg`),
              Medium: require(`../../assets/gallery/${section}/${category}/${name}_Medium.jpg`),
              Large: require(`../../assets/gallery/${section}/${category}/${name}_Large.jpg`)
            }
          });

        // Has a subcategory
        } else if ( typeof galleryData[section][category] === 'object' ) {
          Object.keys(galleryData[section][category]).forEach((subCategory) => {
            galleryData[section][category][subCategory].data.forEach((piece) => {
              const name = buildFileName(piece.title);
              images[section][category][subCategory][piece.urlTitle] = {
                Small: require(`../../assets/gallery/${section}/${category}/${subCategory}/${name}_Small.jpg`),
                Medium: require(`../../assets/gallery/${section}/${category}/${subCategory}/${name}_Medium.jpg`),
                Large: require(`../../assets/gallery/${section}/${category}/${subCategory}/${name}_Large.jpg`)
              }
            });
          });
        }
      });
    }
  });
}

requireAllImages(galleryData);
class ImageViewer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props)

    const { section, category, subCategory, piece } = props.match.params;
    const currentImageData = this.findImageData(section, category, subCategory, piece);
    // Finds gallery index fom current image
    const startIndex = this.findGalleryIndex(section, category, subCategory, currentImageData.title);
    
    this.state = {
      imageData: currentImageData,
      index: startIndex,
      section: section,
      category: category,
      subCategory: subCategory,
      galleryLength: this.findGalleryLength(section, category, subCategory),
      name: currentImageData.title,
      date: currentImageData.date,
      description: currentImageData.description,
      size: currentImageData.size,
      currentSize: this.setWindowSize(window.innerWidth),
      loading: '"../../assets/svg/load-c.svg"',
      zoom: false
    }
        
    this.setWindowSize = this.setWindowSize.bind(this);
    this.loading = this.loading.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.zoomImageState = this.zoomImageState.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.previousImg = this.previousImg.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.findImageData = this.findImageData.bind(this);
    this.buildZoomImage = this.buildZoomImage.bind(this);
    this.findGalleryIndex = this.findGalleryIndex.bind(this);
    this.findGalleryLength = this.findGalleryLength.bind(this);
    this.getCurrentGalleryData = this.getCurrentGalleryData.bind(this);
    // this.dragImage = this.dragImage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPressed, true);
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeyPressed, true);
  }

  componentDidUpdate() {
    // Scrolls to to center of zoomed image
    if (this.state.zoom) {
      const imageViewerBox = document.getElementById('image-viewer-box');
      const zoomImage = document.getElementById('zoom-image');
      imageViewerBox.scrollLeft = (zoomImage.offsetWidth - imageViewerBox.offsetWidth) / 2;
      imageViewerBox.scrollTop = (zoomImage.offsetHeight - imageViewerBox.offsetHeight) / 2;
    }

    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
    return true;
  }

  loading() {
    const loaderStyles = {
      height: "100%",
      width: "100%",
      textAlign: "center",
      position: "fixed",
      top: "0",
      opacity: ".44"
    }

    const loadingSpinnerStyles = {
      width: "44px",
      height: "44px",
      verticalAlign: "middle"
    }

    const loaderHelper = {
      display: "inline-block",
      height: "100%",
      verticalAlign: "middle"
    }
    return (
      <div style={loaderStyles}>
        <span style={loaderHelper}></span>
        <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
      </div>
    )
  }

  setWindowSize(width){
    width -= navigationWidth; // Adjusts for navigation 
    if ( width >= 1100 ) {
      return 'Large';
    } else if ( width <= 1099 && width >= 800) {
      return 'Medium';
    } else if ( width <= 799) {
      return 'Small';
    }
  }

  findGalleryLength (section, category = null, subCategory = null) {
    if (subCategory) {
      return galleryData[section][category][subCategory].data.length;
    } else if ( category ) {
      return galleryData[section][category].data.length;
    } else {
      return galleryData[section].data.length;
    }
  }

  buildSRC(category, piece, size) {
    const fileTitle = piece.split(' ').join('_');
    return `../../assets/gallery/${category}/${fileTitle}_${size}.jpg`;
  }

  findImageData(section, category = null, subCategory = null, name) {
    if (subCategory) {
      return galleryData[section][category][subCategory].data.find((piece) => {
        return name === piece.urlTitle;
      });
    } else if ( category ) {
      return galleryData[section][category].data.find((piece) => name === piece.urlTitle);
    } else {
      return galleryData[section].data.find((piece) => name === piece.urlTitle);
    }
  }

  findGalleryIndex(section, category = null, subCategory = null, targetTitle) {
    if (subCategory) {
      return galleryData[section][category][subCategory].data.findIndex(piece => piece.urlTitle === targetTitle);
    } else if ( category ) {
      return galleryData[section][category].data.findIndex(piece => piece.urlTitle === targetTitle);
    } else {
      return galleryData[section].data.findIndex(piece => piece.urlTitle === targetTitle);
    }
  }

  windowSize(width, height) {
    if (!this.state.zoom) {                   //  Makes sure you're not zoomed in
      if ( window.innerWidth > 1024) {        // Adjusts for desktop styles
        width -= navigationWidth;             // Navigation
        height -= 50                          // Toolbar
      } else if (window.innerWidth <= 1023) { // Adjusts for tablet styles
        height -= 110;                        // Navigation + Toolbar
      }

      const { section, category, subCategory, piece } = this.props.match.params;
      const currentImageData = this.findImageData(section, category, subCategory, piece);
      const currentWindowSize = this.state.currentSize;

      // We need to check width first, then inside each on check the height
      // TODO: I should also check the size of the artwork, it could be really wide or tall
      //    If a the screen is really wide and not very tall, and the image was the same ratio
      //    I could fit a large size image inside that frame.

      // Large Width  | Large -
      if ( width >= 1100 && currentWindowSize !== 'large' ) {

        if (height >= 900 && currentWindowSize !== 'large') {
          this.setState({currentSize: 'Large', imageOrientation: currentImageData.orientation});
          return;
        } else if (height >= 600 && currentWindowSize !== 'medium') {
          this.setState({currentSize: 'Medium', imageOrientation: currentImageData.orientation});
          return;
        } else if (height <= 599 && currentWindowSize !== 'small') {
          this.setState({currentSize: 'Small', imageOrientation: currentImageData.orientation});
          return;
        }

      // Medium Width  | Medium - Small
      } else if ( width >= 800 && currentWindowSize !== 'medium' ) {

        if (height >= 900 && currentWindowSize !== 'large') {
          this.setState({currentSize: 'Large',imageOrientation: currentImageData.orientation});
          return;
        } else if (height >= 600 && currentWindowSize !== 'medium') {
          this.setState({currentSize: 'Medium',imageOrientation: currentImageData.orientation});
          return;
        } else if (height <= 599 && currentWindowSize !== 'small') {
          this.setState({currentSize: 'Small',imageOrientation: currentImageData.orientation});
          return;
        }

      // Small Width  | Small - 
      } else if ( width <= 799 && currentWindowSize !== 'small' ) {

        if (height >= 900 && currentWindowSize !== 'large') {
          this.setState({currentSize: 'Large',imageOrientation: currentImageData.orientation});
          return;
        } else if (height >= 600 && currentWindowSize !== 'medium') {
          this.setState({currentSize: 'Medium',imageOrientation: currentImageData.orientation});
          return;
        } else if (height <= 599 && currentWindowSize !== 'small') {
          this.setState({currentSize: 'Small',imageOrientation: currentImageData.orientation});
          return;
        }
      }
    }
  }

  galleryWheel(direction) {
      const path = this.props.history.location.pathname.split('/');
      let section, category, subCategory, piece;
      // Deconstructs current path from props
      if (path.length === 5) {
        section = path[1];
        category = path[2];
        subCategory = path[3];
        piece = path[4];
      } else if ( path.length === 4) {
        section = path[1];
        category = path[2];
        piece = path[3];
      } else if ( path.length === 3) {
        section = path[1];
        piece = path[2];
      }

    const currentGalleryData = this.getCurrentGalleryData(section, category, subCategory).data;
    const currentGalleryLength = currentGalleryData.length - 1;
    let currentIndex =  this.findGalleryIndex(section, category, subCategory, piece);

    switch (direction) {
      case 'next':
        if ( currentIndex < currentGalleryLength ) {
          const { urlTitle } = currentGalleryData[++currentIndex];
          this.props.history.push(urlTitle);
        }
        break;
      case 'previous':
        if ( currentIndex > 0 ) {
          const { urlTitle } = currentGalleryData[--currentIndex];
          this.props.history.push(urlTitle);
        }
        break;
      default:
        break;
    }
  }

  getCurrentGalleryData(section, category, subCategory) {
    if (subCategory) {
      return galleryData[section][category][subCategory];
    } else if (category) {
      return galleryData[section][category];
    } else {
      return galleryData[section];
    }
  }

  zoomImageState = (imageData) => {
    if (this.state.zoom) {
      this.setState({
        zoom: false,
      });

    } else {
      this.setState({
        zoom: true,
      });
    }
  }

  buildImageSRC(section, category = null, subCategory = null, piece) {
    if (subCategory) {
      return images[section][category][subCategory][piece];
    } else if (category) {
      return images[section][category][piece];
    } else {
      return images[section][piece];
    }
  }

  buildZoomImage(section, category, subCategory, piece, index) {
    if (this.state.zoom) {
      const newHeight = this.getCurrentGalleryData(section, category, subCategory).data[index].sizes['Large'].height;
      let zoomDimensions = 'Large';
      if ( window.innerWidth <= 799) {   // Mobile - Loads medium size image
        zoomDimensions = 'Medium';
      }

      return(
        <img
          src={this.buildImageSRC(section, category, subCategory, piece)['Large']}
          width={this.getCurrentGalleryData(section, category, subCategory).data[index].sizes[zoomDimensions].width}
          height={this.getCurrentGalleryData(section, category, subCategory).data[index].sizes[zoomDimensions].height}
          className="zoom-image fade-in-zoom-image"
          id="zoom-image"
          onClick={this.zoomImageState}
        />
      );
    }
    return;
  }

  // TODO: Get touchEvent's working for changing images for mobile/tablet
  // dragImage(e) {
  //   // CHECK IF MOBILE FIRST
  //   console.log('gragImage');
  //   console.log('>> e - ', e);
  // }

  previousImg() {
    this.galleryWheel('previous');
  }

  nextImg() {
    this.galleryWheel('next');
  }

  onKeyPressed(e) {
    if ( e.keyCode == '37' && this.state.zoom == false) this.previousImg(); // left arrow
    if ( e.keyCode == '39' && this.state.zoom == false) this.nextImg(); // right arrow
    if ( e.keyCode == '187' || e.keyCode == '189' && this.state.zoom == false) this.zoomImageState();
  }

  render() {
    const { section, category, subCategory, piece } = this.props.match.params;
    const imageData = this.findImageData(section, category, subCategory, piece);
    const currentGalleryLength = this.getCurrentGalleryData(section, category, subCategory).data.length;
    const currentIndex =  this.findGalleryIndex(section, category, subCategory, piece) + 1;

    // If Tablet or Mobile load arrow colors. Otherwise, arrows should be black
    let arrowsColor = 'arrow-background';
    const windowWidth = window.innerWidth;
    if ( 1024 >= windowWidth) {  // Tablet / Mobile
      arrowsColor = imageData.arrows === 'light' ? 'arrows-light' : 'arrows-dark';
    }

    // Update orientation
    let width = window.innerWidth;
    let height = window.innerHeight;
    if ( window.innerWidth > 1024) {          // Adjusts for desktop styles
      width -= navigationWidth;               // Navigation
      height -= 50                            // Toolbar
    } else if (window.innerWidth <= 1023) {   // Adjusts for tablet styles
      height -= 110;                          // Navigation + Toolbar
    }
    
    // Considers aspect ratio of window
    const imgWidth = imageData.sizes[this.state.currentSize].width;
    const imgHeight = imageData.sizes[this.state.currentSize].height;
    let currentOrientation = (height/width >= imgHeight/imgWidth) ? 
      'gallery-image landscape fade-in-gallery-image' :
      'gallery-image portrait fade-in-gallery-image';

    return (
      <div className={this.state.zoom === false ? "image-viewer" : "image-viewer-zoom image-viewer"} id="image-viewer-box" tabIndex="0">
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
         DEBOUNCE_TIME="500"
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        {this.buildZoomImage(section, category, subCategory, piece, (currentIndex - 1))}

        <div className={this.state.zoom ? "image-hide" : "image-box"}>
          
          <span className="image-vertical-spacer"></span>

          <div className="previous-button-box"
            onClick={this.previousImg}>
            <ReactSVG
              path={arrowLeft}
              style={{width: 30, height: 90}}
              className={this.state.zoom ? "image-hide" : 
              (currentIndex === 1 ?
                  `previous-arrow disable-navigation ${arrowsColor}` :
                  `previous-arrow ${arrowsColor}`)}
              wrapperClassName="previous-arrow"
            />
          </div>

          <div className="next-button-box"
            onClick={this.nextImg}>
            <ReactSVG
              path={arrowRight}
              style={{width: 30, height: 90}}
              className={this.state.zoom ? "image-hide" : 
                (currentGalleryLength === currentIndex ? 
                    `next-arrow disable-navigation ${arrowsColor}` :
                    `next-arrow ${arrowsColor}`)}
              wrapperClassName="next-arrow"
            />
          </div>

          <Img
            src={this.buildImageSRC(section, category, subCategory, piece)[this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className={currentOrientation}
            id="gallery-image"
            alt={this.state.name}
            onClick={this.zoomImageState}
            loader={this.loading()}
            // TODO: Testing Tablet/Mobile image swiping
            // onMouseDown={this.dragImage}
            // onMouseUp={this.toggleMouseDown}
          />

          {/* Background Previous Box */}
          <div
            className={this.state.zoom ? "image-hide" : 
              (currentIndex === 1 ? "previous disable-navigation" : "previous")}
            onClick={this.previousImg}>
          </div>

          {/* Background Next box */}
          <div
            className={this.state.zoom ? "image-hide" : 
              (currentGalleryLength === currentIndex ? "next disable-navigation" : "next")}
            onClick={this.nextImg}>
          </div>
        </div>

        <Toolbar 
          imageData={imageData}
          imageZoom={this.zoomImageState}
          imageZoomState={this.state.zoom}
          imageHeight={this.state.height}
          galleryLength={currentGalleryLength}
          currentIndex={currentIndex}
        />
      </div>
    );
  }
}

export default ImageViewer;
