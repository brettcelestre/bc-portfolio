
import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router';

import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';
const arrow = require('../../assets/svg/ios-arrow-left.svg');

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

// Stores basic sections
const sectionObject = Object.keys(galleryData);

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
        images[section][piece.title] = {
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
            images[section][category][piece.title] = {
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
              images[section][category][subCategory][piece.title] = {
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

  componentDidMount() {
    alert(this.state.currentSize);
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  componentDidUpdate() {
    const { section, category, subCategory, piece } = this.props.match.params;
 
    // Updates gallery data if selected section is different that current
    if ( section !== this.state.section){
      // Finds current image data from URL
      const currentImageData = this.findImageData(section, category, subCategory, piece);
      // Finds gallery index fom current image
      const startIndex = this.findGalleryIndex(section, category, subCategory, currentImageData.title);
      // Figures out if this is a portrait or landscape ratio
      const height = window.innerHeight - 50; // Adjusts for Toolbar
      const width = window.innerWidth - 155; // Adjusts for navigation
      const newWidth = currentImageData.sizes[this.state.currentSize].width;
      const newHeight = currentImageData.sizes[this.state.currentSize].height;
      // Updates state with current data
      this.setState({
        imageData: currentImageData,
        index: 0,
        section: section,
        category: category,
        subCategory: subCategory,
        galleryLength: this.findGalleryLength(section, category, subCategory),
        name: currentImageData.title,
        date: currentImageData.date,
        description: currentImageData.description,
        size: currentImageData.size,
        imageOrientation: height/width >= newHeight/newWidth ? 'portrait' : 'landscape',
        zoom: false,
        width: newWidth,
        height: newHeight,
      });
    }
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  constructor(props){
    super(props)

    const { section, category, subCategory, piece } = props.match.params;
    // Finds current image data from URL
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
      // TODO: Update this load dynamically
      imageOrientation: 'landscape',
      loading: '"../../assets/svg/load-c.svg"',
      zoom: false,
    }
        
    this.setWindowSize = this.setWindowSize.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.zoomImageState = this.zoomImageState.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.findImageData = this.findImageData.bind(this);
    this.buildNextArrowClassName = this.buildNextArrowClassName.bind(this);
    this.buildZoomImage = this.buildZoomImage.bind(this);
    this.findGalleryIndex = this.findGalleryIndex.bind(this);
    this.findGalleryLength = this.findGalleryLength.bind(this);
    this.getCurrentGalleryData = this.getCurrentGalleryData.bind(this);
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
        return name === piece.title.split(' ').join('-').toLowerCase()
      });
    } else if ( category ) {
      return galleryData[section][category].data.find((piece) => name === piece.title.split(' ').join('-').toLowerCase());
    } else {
      return galleryData[section].data.find((piece) => name === piece.title.split('-').join(' ').toLowerCase());
    }
  }

  findGalleryIndex(section, category = null, subCategory = null, targetTitle) {
    if (subCategory) {
      return galleryData[section][category][subCategory].data.findIndex(piece => piece.title === targetTitle);
    } else if ( category ) {
      return galleryData[section][category].data.findIndex(piece => piece.title === targetTitle);
    } else {
      return galleryData[section].data.findIndex(piece => piece.title === targetTitle);
    }
  }

  windowSize(width, height) {
    const { section, category, subCategory, piece } = this.props.match.params;

    // Check if you're setting the image size / Makes sure you're not zoomed in
    if (!this.state.zoom) {

      height -= 50; // Adjusts for Toolbar
      width -= 155; // Adjusts for navigation 
      
      // Finds current image data from URL
      const currentImageData = this.findImageData(section, category, subCategory, piece);
      const imgWidth = currentImageData.sizes[this.state.currentSize].width;
      const imgHeight = currentImageData.sizes[this.state.currentSize].height;

      // Stores orientation so windowSize only runs setState once
      let currentOrientation = (height/width >= imgHeight/imgWidth) ? 'portrait' : 'landscape';

      // We need to check width first, then inside each on check the height
      // TODO: I should also check the size of the artwork, it could be really wide or tall
      //    If a the screen is really wide and not very tall, and the image was the same ratio
      //    I could fit a large size image inside that frame.

      // Large Width  | Large -
      if ( width >= 1100 && this.state.currentSize !== 'large' ) {

        // Large Height
        if (height >= 900 && this.state.currentSize !== 'large') {
          this.setState({currentSize: 'Large', imageOrientation: currentOrientation});
          return;
        } else if (height >= 600 && this.state.currentSize !== 'medium') {
          this.setState({currentSize: 'Medium', imageOrientation: currentOrientation});
          return;
        } else if (height <= 599 && this.state.currentSize !== 'small') {
          this.setState({currentSize: 'Small', imageOrientation: currentOrientation});
          return;
        }

      // Medium Width  | Medium - Small
      } else if ( width >= 800 && this.state.currentSize !== 'medium' ) {

        // Large Height
        if (height >= 900 && this.state.currentSize !== 'large') {
          this.setState({currentSize: 'Large',imageOrientation: currentOrientation});
          return;
        } else if (height >= 600 && this.state.currentSize !== 'medium') {
          this.setState({currentSize: 'Medium',imageOrientation: currentOrientation});
          return;
        } else if (height <= 599 && this.state.currentSize !== 'small') {
          this.setState({currentSize: 'Small',imageOrientation: currentOrientation});
          return;
        }

      // Small Width  | Small - 
      } else if ( width <= 799 && this.state.currentSize !== 'small' ) {

        if (height >= 900 && this.state.currentSize !== 'large') {
          this.setState({currentSize: 'Large',imageOrientation: currentOrientation});
          return;
        } else if (height >= 600 && this.state.currentSize !== 'medium') {
          this.setState({currentSize: 'Medium',imageOrientation: currentOrientation});
          return;
        } else if (height <= 599 && this.state.currentSize !== 'small') {
          this.setState({currentSize: 'Small',imageOrientation: currentOrientation});
          return;
        }
      }
    }
  }

  galleryWheel(direction) {
    // TODO: Fade image out or hide or something

    // Prevents Gallery Wheel from working when on another component
    const insideGallery = sectionObject.some((val) => {
      return val === this.props.history.location.pathname.split('/')[1];
    });
    if (!insideGallery) { 
      return;
    }

    const height = window.innerHeight - 50; // Adjusts for Toolbar
    const width = window.innerWidth - 155; // Adjusts for navigation

    // Updates gallery data depending on the direction
    switch(direction) {
      case 'previous':
        // As long as its not the first image in the gallery
        if ( this.state.index > 0 ) {
          // Finds and sets new image data
          const previousIndex = (this.state.index - 1);
          const newPreviousData = this.getCurrentGalleryData().data[previousIndex];
          const newWidth = newPreviousData.sizes[this.state.currentSize].width;
          const newHeight = newPreviousData.sizes[this.state.currentSize].height;
          this.setState({
            index: previousIndex,
            name: newPreviousData.title,
            description: newPreviousData.description,
            size: newPreviousData.size,
            date: newPreviousData.date,
            width: newWidth,
            height: newHeight,
            imageOrientation: height/width >= newHeight/newWidth ? 'portrait' : 'landscape'
          });
          // Creates a new path out of gallery data and then redirects
          let imageUrl = newPreviousData.title.toLowerCase().split(' ').join('-');
          this.props.history.push(imageUrl);
        }
        break;

      case 'next':
        // As long as its not the last image in the gallery
        if ( this.state.index < (this.getCurrentGalleryData().data.length-1) ) {
          // Finds and sets new image data
          const nextIndex = (this.state.index + 1);
          const newNextData = this.getCurrentGalleryData().data[nextIndex];
          const newWidth2 = newNextData.sizes[this.state.currentSize].width;
          const newHeight2 = newNextData.sizes[this.state.currentSize].height;
          this.setState({
            index: nextIndex,
            name: newNextData.title,
            description: newNextData.description,
            size: newNextData.size,
            date: newNextData.date,
            width: newWidth2,
            height: newHeight2,
            imageOrientation: height/width >= newHeight2/newWidth2 ? 'portrait' : 'landscape'
          });
          // Creates a new path out of gallery data and then redirects
          let imageUrl = newNextData.title.toLowerCase().split(' ').join('-');
          this.props.history.push(imageUrl);
        }
        break;
    }
  }

  getCurrentGalleryData() {
    if (this.state.subCategory) {
      return galleryData[this.state.section][this.state.category][this.state.subCategory];
    } else if (this.state.category) {
      return galleryData[this.state.section][this.state.category];
    } else {
      return galleryData[this.state.section];
    }
  }

  zoomImageState = () => {
    const imageData = this.getCurrentGalleryData().data[this.state.index];
    if (this.state.zoom) {
      // Finds current size of window
      let windowSize;
      const currentSize = window.innerHeight - 43;
      if (currentSize >= 900) {
        windowSize = 'Large';
      } else if (currentSize >= 600) {
        windowSize = 'Medium';
      } else {
        windowSize = 'Small';
      }
      this.setState({
        zoom: false,
        currentSize: windowSize,
        width: imageData.sizes[windowSize].width,
        height: imageData.sizes[windowSize].height
      });
    } else {
      this.setState({
        zoom: true,
        width: imageData.sizes['Large'].width,
        height: imageData.sizes['Large'].height
      });
    }
  }

  buildImageSRC() {
    if (this.state.subCategory) {
      return images[this.state.section][this.state.category][this.state.subCategory][this.state.name];
    } else if (this.state.category) {
      return images[this.state.section][this.state.category][this.state.name];
    } else {
      return images[this.state.section][this.state.name];
    }
  }

  buildZoomImage() {
    if (this.state.zoom) {
      return(
        <img
          src={this.buildImageSRC()['Large']}
          width={this.getCurrentGalleryData().data[this.state.index].sizes['Large'].width}
          height={this.getCurrentGalleryData().data[this.state.index].sizes['Large'].height}
          className="zoom-image"
          alt={this.state.name}
          title={this.state.name}
        />
      );
    }
    return;
  }

  buildNextArrowClassName() {
    if (this.state.subCategory) {
      return this.state.index === (galleryData[this.state.section][this.state.category][this.state.subCategory].data.length-1) ? "next disable-navigation" : "next";
    } else if (this.state.category) {
      return this.state.index === (galleryData[this.state.section][this.state.category].data.length-1) ? "next disable-navigation" : "next";
    } else {
      return this.state.index === (galleryData[this.state.section].data.length-1) ? "next disable-navigation" : "next";
    }
  }

  previous() {
    this.galleryWheel('previous');
  }

  next() {
    this.galleryWheel('next');
  }

  onKeyPressed(e) {
    if ( e.keyCode == '37' && this.state.zoom == false) this.previous(); // left arrow
    if ( e.keyCode == '39' && this.state.zoom == false) this.next(); // right arrow
    if ( e.keyCode == '187' || e.keyCode == '189' && this.state.zoom == false) this.zoomImageState();
  }

  render() {
    window.addEventListener("keydown", this.onKeyPressed, true);

    return (
      <div className="image-viewer" tabIndex="0">
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

        <div id='zoom-box' className={this.state.zoom ? "zoom-box" : "zoom-box-hide"} onClick={this.zoomImageState}>
          {this.buildZoomImage()}
        </div>

        <div className={this.state.zoom ? "image-hide" : "image-box"}>
          <img
            src={this.buildImageSRC()[this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className={this.state.imageOrientation === "portrait" ? "gallery-image portrait" : "gallery-image landscape"}
            id="gallery-image"
            alt={this.state.name}
            title={this.state.name}
            onClick={this.zoomImageState}
            draggable="true"
          />
        </div>


        {/* 
          
          TODO: Enable next/previous buttons

        <div className={this.state.zoom ? "image-hide" : "image-controls"}>
          <div
            className={this.state.index === 0 ? "previous disable-navigation" : "previous"}
            onClick={this.previous}>
            <div className="previous-button-box">
              <ReactSVG
                path={arrow}
                style={{width: 30, height: 30}}
                className="previous-arrow"
                wrapperClassName="previous-arrow"
              />
            </div>
          </div>
          <div
            className={this.buildNextArrowClassName()}
            onClick={this.next}>
            <div className="next-button-box">
              <ReactSVG
                path={arrow}
                style={{width: 30, height: 30}}
                className="next-arrow"
                wrapperClassName="next-arrow"
              />
            </div>
          </div>
        </div> 
        */}

        <Toolbar 
          imageData={this.state} 
          imageZoom={this.zoomImageState}
          imageZoomState={this.state.zoom}
          imageHeight={this.state.height}
        />
      </div>
    );
  }
}

export default ImageViewer;
