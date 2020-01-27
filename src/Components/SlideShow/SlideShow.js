
import React, { Component } from 'react';
import Img from 'react-image';
import { WindowResizeListener } from 'react-window-resize-listener';
import spinner from '../../assets/img/spinner.gif';
import './SlideShow.css';

const BREAKPOINT = 1025;
const buttons = {
  large: [
    require('../../assets/img/slideshow-button-desktop-1.png'),
    require('../../assets/img/slideshow-button-desktop-2.png'),
    require('../../assets/img/slideshow-button-desktop-3.png'),
    require('../../assets/img/slideshow-button-desktop-4.png')
  ],
  small: [
    require('../../assets/img/slideshow-button-mobile-1.png'),
    require('../../assets/img/slideshow-button-mobile-2.png'),
    require('../../assets/img/slideshow-button-mobile-3.png'),
    require('../../assets/img/slideshow-button-mobile-4.png')
  ]
};

class SlideShow extends Component {

  constructor(props){
    super(props)

    const orientation = window.innerWidth < BREAKPOINT ? 'landscape' : 'portrait';

    this.state = {
      images: this.props.images,
      index: 0,
      orientation: window.innerWidth < BREAKPOINT ? 'landscape' : 'portrait',
      size: window.innerWidth < BREAKPOINT ? 'small' : 'large'
    }

    this.setOrientation = this.setOrientation.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.loading = this.loading.bind(this);
  }

  setOrientation() {
    if ( (this.state.orientation !== window.innerWidth) < BREAKPOINT ? 'landscape' : 'portrait') {
      this.setState({
        orientation: window.innerWidth < BREAKPOINT ? 'landscape' : 'portrait',
        size: window.innerWidth < BREAKPOINT ? 'small' : 'large',
        index: 0
      });
    }
  }

  nextImage() {
    const nextIndex = this.state.index + 1;
    const actualNextIndex = nextIndex < (this.state.images[this.state.orientation][this.state.size].length - 1) ? nextIndex : 0;
    this.setState({
      index: actualNextIndex
    });
  }

  goToIndex(e) {

    this.setState({
      index: Number(e.target.id)
    });
  }

  buildControls(){
    const orientation = window.innerWidth < BREAKPOINT ? 'landscape' : 'portrait';
    const size = window.innerWidth < BREAKPOINT ? 'small' : 'large';
    return this.props.images[orientation][size].map((val, i) => {
      return (
        <div onClick={this.goToIndex} 
          key={i} 
          className={`slideshow-control-box ${this.state.index === i ? 'slideshow-control-selected' : ''}`}
          >
          <img 
            id={i}
            src={buttons[this.state.size][Math.floor(Math.random() * buttons[this.state.size].length)]} 
          />
        </div>
      )
    });
  }

  loading(size) {
    //   t: 660px;
    //   min-height: 300px;
    const loaderStyles = {
      // height: "270px",
      // width: "100%",

      // Bio section large
      height: "630px",
      width: "458.17px",
      textAlign: "center",
      top: "0",
      opacity: ".25"
    }

    const loadingSpinnerStyles = {
      width: "44px",
      height: "44px",
      verticalAlign: "middle"
    }

    const loaderHelper = {
      display: "inline-block",
      height: "235px",
      verticalAlign: "middle"
    }
    return (
      <div style={loaderStyles}>
        <span style={loaderHelper}></span>
        <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
      </div>
    )
  }

  // loading() {
  //   const loaderStyles = {
  //     height: "100%",
  //     width: "100%",
  //     textAlign: "center",
  //     position: "fixed",
  //     top: "0",
  //     opacity: ".25"
  //   }

  //   const loadingSpinnerStyles = {
  //     width: "44px",
  //     height: "44px",
  //     verticalAlign: "middle"
  //   }

  //   const loaderHelper = {
  //     display: "inline-block",
  //     height: "100%",
  //     verticalAlign: "middle"
  //   }
  //   return (
  //     <div style={loaderStyles}>
  //       <span style={loaderHelper}></span>
  //       <img src={spinner} style={loadingSpinnerStyles} alt="spinner"/>
  //     </div>
  //   )
  // }

  render() {
    const { loading } = this;
    const orientation = window.innerWidth < BREAKPOINT ? 'landscape' : 'portrait';
    const size = window.innerWidth < (BREAKPOINT - 2) ? 'small' : 'large';

    // const loader;
    // if (size === 'small') {
    //   // loader = 
    // } else if {
    //   loader = {

    //   }
    //   t: 660px;
    //   min-height: 300px;
    // }

    return(
      <div className="slideshow-container">
        <WindowResizeListener
          DEBOUNCE_TIME={500}
          onResize={windowSize => {
            this.setOrientation
          }
        }/>

        {/* TODO Implement <Img> with proper loader */}
        <Img
          src={this.props.images[orientation][size][this.state.index]} 
          className="bio-images"
          loader={loading(size)}
          />

        <div className="slideshow-index-controls">
          {this.buildControls()}
        </div>

      </div>
    )
  }
}

export default SlideShow;
