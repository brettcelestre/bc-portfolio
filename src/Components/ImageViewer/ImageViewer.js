
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router';

import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';
const arrow = require('../../assets/svg/ios-arrow-left.svg');

const galleryData = {
  collage: require('../../assets/data/collage.js'),
  digital: require('../../assets/data/digital-art.js')
};

// This needs to update to take in any SECTION
const artwork = {
  collage: {
    "McCauley At War": {
      Small: require('../../assets/gallery/collage/McCauley_At_War_Small.jpg'),
      Medium: require('../../assets/gallery/collage/McCauley_At_War_Medium.jpg'),
      Large: require('../../assets/gallery/collage/McCauley_At_War_Large.jpg')
    },
    "Valley": {
      Small: require('../../assets/gallery/collage/Valley_Small.jpg'),
      Medium: require('../../assets/gallery/collage/Valley_Medium.jpg'),
      Large: require('../../assets/gallery/collage/Valley_Large.jpg')
    },
    "American Indian": {
      Small: require('../../assets/gallery/collage/American_Indian_Small.jpg'),
      Medium: require('../../assets/gallery/collage/American_Indian_Medium.jpg'),
      Large: require('../../assets/gallery/collage/American_Indian_Large.jpg')
    }
  },
  digital: {
    AJ: {
      Small: require('../../assets/gallery/digital-art/AJ_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/AJ_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/AJ_Large.jpg')
    },
    Dufrense: {
      Small: require('../../assets/gallery/digital-art/Dufrense_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/Dufrense_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/Dufrense_Large.jpg')
    },
    "For Reverend Green": {
      Small: require('../../assets/gallery/digital-art/For_Reverend_Green_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/For_Reverend_Green_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/For_Reverend_Green_Large.jpg')
    },
    "For The Last Fucking Time": {
      Small: require('../../assets/gallery/digital-art/For_The_Last_Fucking_Time_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/For_The_Last_Fucking_Time_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/For_The_Last_Fucking_Time_Large.jpg')
    },
    "Jeanne-Marie": {
      Small: require('../../assets/gallery/digital-art/Jeanne-Marie_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/Jeanne-Marie_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/Jeanne-Marie_Large.jpg')
    },
    "Noah Lennox": {
      Small: require('../../assets/gallery/digital-art/Noah_Lennox_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/Noah_Lennox_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/Noah_Lennox_Large.jpg')
    },
    Progress: {
      Small: require('../../assets/gallery/digital-art/Progress_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/Progress_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/Progress_Large.jpg')
    },
    Sleep: {
      Small: require('../../assets/gallery/digital-art/Sleep_Small.jpg'),
      Medium: require('../../assets/gallery/digital-art/Sleep_Medium.jpg'),
      Large: require('../../assets/gallery/digital-art/Sleep_Large.jpg')
    }
  }
};

class ImageViewer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  componentWillMount() {
    // Finds window size
    this.windowSize(window.innerWidth, window.innerHeight)
    // Sets first image
    // this.setState({
    //   galleryLength: galleryData[this.state.gallery].data.length,
    //   src: `${galleryData[this.state.gallery].data[this.state.index].src}`,
    //   name: galleryData[this.state.gallery].data[this.state.index].title,
    //   description: galleryData[this.state.gallery].data[this.state.index].description,
    //   date: galleryData[this.state.gallery].data[this.state.index].date,
    //   width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
    //   height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height});
  }

  componentDidUpdate() {
    // let currentPath = this.props.location.pathname;
    let newSection = this.props.match.params.section;
    let newCategory = this.props.match.params.category;

    console.log('newSection = ', newSection);
    console.log('newCategory = ', newCategory);
    console.log('this.state.gallery = ', this.state.gallery);

    // let currentPath = this.props.location.pathname.split('/')[2] === 
    //   'crossHatching' ? 'cross-hatching' : this.props.location.pathname.split('/')[2];
      // console.log('current path = ', currentPath); 

    // Updates gallery data if selected section is different that current
    if ( newSection !== this.state.gallery){

      // if ( newCategory !== )


      // this.setState({
        // gallery: newSection,
    //     index: 0,
    //     width: 0,
    //     height: 0,
    //     name: '',
    //     date: '',
    //     description: '',
    //     zoom: false
      // });
      
      // this.setState({
      //   galleryLength: galleryData[newSection].data.length,
      //   name: galleryData[newSection].data[0].title,
      //   description: galleryData[newSection].data[0].description,
      //   date: galleryData[newSection].data[0].date,
      //   width: galleryData[newSection].data[0].sizes[this.state.currentSize].width,
      //   height: galleryData[newSection].data[0].sizes[this.state.currentSize].height
      // });
      
      
    //   const currentImage = this.buildImageName(this.props.match.params.piece);
    //   const currentIndex = galleryData[currentPath].data.findIndex(piece => piece.title === currentImage);
      
    //   if (currentImage !== this.state.name) {
    //     this.setState({
    //       gallery: currentPath,
    //       index: galleryData[currentPath].data.findIndex(piece => piece.title === currentImage),
    //     })
  
    //     this.setState({
    //       galleryLength: galleryData[currentPath].data.length,
    //       name: galleryData[currentPath].data[currentIndex].title,
    //       description: galleryData[currentPath].data[currentIndex].description,
    //       date: galleryData[currentPath].data[currentIndex].date,
    //       width: galleryData[currentPath].data[currentIndex].sizes[this.state.currentSize].width,
    //       height: galleryData[currentPath].data[currentIndex].sizes[this.state.currentSize].height
    //     });
    //   }
    }
    
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  constructor(props){
    super(props)    
    const currentImageData = this.findImageData(props.match.params.category, props.match.params.piece);
    const startIndex = galleryData[props.match.params.category].data.findIndex(piece => piece.title === currentImageData.title);


    // console.log('currentImage = ', currentImageData.title);
    // console.log('section = ', props.match.params.category);
    // console.log('piece = ', props.match.params.piece);
    // console.log('startSrc = ', startSrc);

    // console.log('IMAGE VIEWER this.props.route.zoom = ', this.props.route.zoom);
    
    this.state = {
      index: startIndex,
      gallery: props.match.params.category,
      galleryLength: galleryData[props.match.params.category].data.length,
      name: currentImageData.title,
      date: currentImageData.date,
      description: currentImageData.description,
      size: currentImageData.size,
      // currentSize: this.windowSize(window.innerWidth, window.innerHeight, true),
      currentSize: 'na',
      // width: currentImageData.sizes[startSize].width,
      // height: currentImageData.sizes[startSize].height,
      src: startSrc,
      loading: '"../../assets/svg/load-c.svg"',
      zoom: false,
    }


    const startSizeFunction = () => {
      const size = this.windowSize(window.innerWidth, window.innerHeight, true)
      console.log('>> size = ', size);
      return size.charAt(0).toUpperCase() + size.slice(1);
    };
    const startSize = startSizeFunction();
    const startSrc = this.buildSRC(props.match.params.category, currentImageData.title, startSize);

    this.setState({
      width: currentImageData.sizes[startSize].width,
      height: currentImageData.sizes[startSize].height,
    })

    console.log('===========================')
    console.log(' startSize = ', startSize);
    console.log(' current width = ', currentImageData.sizes[startSize].width);
    console.log(' current height = ', currentImageData.sizes[startSize].height);
    
    console.log('CONSTRUCTOR index = ', this.state.index);
    // this.setWindowSize(window.innerWidth, window.innerHeight)
    console.log('CONSTRUCTOR currentSize = ', this.state.currentSize);
    
    // this.startSize = this.startSize.bind(this);
    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.zoomImageState = this.zoomImageState.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.findImageData = this.findImageData.bind(this);
    this.buildZoomImage = this.buildZoomImage.bind(this);
  }

  // startSize() {
  //   const size = this.windowSize(window.innerWidth, window.innerHeight, true)
  //   return size.charAt(0).toUpperCase() + size.slice(1);
  // }

  buildSRC(category, piece, size) {
    const fileTitle = piece.split(' ').join('_');
    return `../../assets/gallery/${category}/${fileTitle}_${size}.jpg`;
  }

  findImageData(category, name) {
    const x = name.split('-').join(' ');
    return galleryData[category].data.find((piece) => {
      return x === piece.title.toLowerCase();
    });
  }

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height, set) {
    // Adjusts for navigation and toolbar
    height -= 43;    

    console.log('window size width = ', width);
    console.log('window size height = ', height);

    // Makes sure you're not zoomed in
    if (set || !this.state.zoom) {

      // We need to check width first, then inside each on check the height

      // Large Width
      if (height >= 900 && (this.state.currentSize !== 'large' || set)) {
        if (set) return 'Large';
        this.setState({currentSize: 'Large'});
        console.log('windowSize = Large');
        return;
      }
      // Medium
      if (height >= 600 && (this.state.currentSize !== 'medium' || set)) {
        if (set) return 'Medium';
        this.setState({currentSize: 'Medium'});
        console.log('windowSize = Medium');
        return;
      }
      // Small
      if (height <= 599 && (this.state.currentSize !== 'small' || set)) {
        if (set) return 'Small';
        this.setState({currentSize: 'Small'});
        console.log('windowSize = Small');
        return;
      }
    }
  }

  galleryWheel(direction) {
    switch(direction) {
      case 'previous':
        if ( this.state.index > 0 ) {
          --this.state.index;
        }
        this.setState({
          index: this.state.index,
          name: galleryData[this.state.gallery].data[this.state.index].title,
          // name: this.findImageName(props.match.params.section, props.match.params.piece),
          description: galleryData[this.state.gallery].data[this.state.index].description,
          size: galleryData[this.state.gallery].data[this.state.index].size,
          date: galleryData[this.state.gallery].data[this.state.index].date,
          width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
          height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height
        });
        break;
      case 'next':
        if ( this.state.index < (galleryData[this.state.gallery].data.length-1) ) {
          ++this.state.index;
        }
        this.setState({
          index: this.state.index,
          name: galleryData[this.state.gallery].data[this.state.index].title,
          // name: this.findImageName(props.match.params.section, props.match.params.piece),
          description: galleryData[this.state.gallery].data[this.state.index].description,
          size: galleryData[this.state.gallery].data[this.state.index].size,
          date: galleryData[this.state.gallery].data[this.state.index].date,
          width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
          height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height
        });
        break;
    }

    // Creates a new path out of gallery data and then redirects
    let imageUrl = galleryData[this.state.gallery].data[this.state.index].title.toLowerCase().split(' ').join('-');
    console.log('wheel imageUrl = ', imageUrl);
    let currentGallery = this.state.gallery;
    // Updates gallery
    this.setState({
      gallery: currentGallery
    })
    const x = `/artwork/${currentGallery}/${imageUrl}`;
    console.log('x = ', x);
    this.props.history.push(x);
  }

  zoomImageState = () => {
    if (this.state.zoom) {
      
      // Finds current size of window
      let windowSize;
      const currentSize = window.innerHeight - 43;

      // TODO
      // THIS IS WRONG
      // INVOKE windowSize() - with params

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
        width: galleryData[this.state.gallery].data[this.state.index].sizes[windowSize].width,
        height: galleryData[this.state.gallery].data[this.state.index].sizes[windowSize].height
      });
    } else {
      this.setState({
        zoom: true,
        width: galleryData[this.state.gallery].data[this.state.index].sizes['Large'].width,
        height: galleryData[this.state.gallery].data[this.state.index].sizes['Large'].height
      });
    }
  }

  buildZoomImage() {
    if (this.state.zoom) {
      return(
        <img
          src={artwork[this.state.gallery][this.state.name]['Large']}
          width={galleryData[this.state.gallery].data[this.state.index].sizes['Large'].width}
          height={galleryData[this.state.gallery].data[this.state.index].sizes['Large'].height}
          className="zoom-image"
          alt={this.state.name}
          title={this.state.name}
        />
      );
    }
    return;
  }

  previous() {
    this.galleryWheel('previous');
  }

  next() {
    this.galleryWheel('next');
  }

  onKeyPressed(e) {
    // left arrow
    if ( e.keyCode == '37' && this.state.zoom == false) this.previous();
    // right arrow
    if ( e.keyCode == '39' && this.state.zoom == false) this.next();
    if ( e.keyCode == '187' || e.keyCode == '189' && this.state.zoom == false) this.zoomImageState();
  }

  render() {
    window.addEventListener("keydown", this.onKeyPressed, true);

    const { match, location, history } = this.props;

    console.log('RENDER this.state.index = ', this.state.index);

    return (
      <div className="image-viewer" tabIndex="0">
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div id='zoom-box' className={this.state.zoom ? "zoom-box" : "zoom-box-hide"} onClick={this.zoomImageState}>
          {this.buildZoomImage()}
        </div>

        <div className={this.state.zoom ? "image-hide" : "image"}>
          <img
            src={artwork[this.state.gallery][this.state.name][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className="gallery-image"
            alt={this.state.name}
            title={this.state.name}
            onClick={this.zoomImageState}
            draggable="true"
          />
        </div>

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
              className={this.state.index === (galleryData[this.state.gallery].data.length-1) ? "next disable-navigation" : "next"}
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
