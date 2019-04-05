
import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import './SlideShow.css';

class SlideShow extends Component {

  constructor(props){
    super(props)

    const orientation = window.innerWidth < 1024 ? 'landscape' : 'portrait';

    this.state = {
      images: this.props.images,
      index: Math.floor(Math.random() * this.props.images[orientation].length),
      orientation: window.innerWidth < 1024 ? 'landscape' : 'portrait'
    }

    this.setOrientation = this.setOrientation.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  setOrientation() {
    if ( (this.state.orientation !== window.innerWidth) < 1024 ? 'landscape' : 'portrait') {
      this.setState({
        orientation: window.innerWidth < 1024 ? 'landscape' : 'portrait',
        index: 0
      });
    }
  }

  nextImage() {
    const nextIndex = this.state.index + 1;
    const actualNextIndex = nextIndex < (this.state.images[this.state.orientation].length - 1) ? nextIndex : 0;
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
    const orientation = window.innerWidth < 1024 ? 'landscape' : 'portrait';
    return this.props.images[orientation].map((val, i) => {
      return (
        <div onClick={this.goToIndex} 
             key={i} 
             id={i}
             className="slideshow-control-box" 
             style={this.state.index === i ? {backgroundColor: "#e0e0e0"} : {}}></div>
      )
    });
  }

  render() {
    const orientation = window.innerWidth < 1024 ? 'landscape' : 'portrait';

    return(
      <div className="slideshow-container" style={this.props.styles}>
        <WindowResizeListener
          DEBOUNCE_TIME={500}
          onResize={windowSize => {
            this.setOrientation
          }
        }/>

        <img 
          src={this.props.images[orientation][this.state.index]} 
          style={this.props.imageStyles}
          />

        <div className="slideshow-index-controls">
          {this.buildControls()}
        </div>

      </div>
    )
  }
}

export default SlideShow;
