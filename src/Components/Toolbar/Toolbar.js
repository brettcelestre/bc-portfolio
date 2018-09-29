import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      zoomWidth: { width: 'auto' }
    }

    this.toolbarInfoToggle = this.toolbarInfoToggle.bind(this);
  }

  componentWillUpdate(){
    // TODO: Figure out what I was doing here and complete it

    // if (this.props.imageZoomState) {
    //   this.setState({
    //     zoomWidth: { width: this.props.imageData.width}
    //   });
    // } else {
    //   this.setState({
    //     zoomWidth: { width: 'auto'}
    //   });
    // }
  }

  toolbarInfoToggle() {
    // TODO: Attach description to title-box underneath name
    //    have the toolbar height extend to make room, animate quickly
  }

  render() {
    const galleryPosition = this.props.imageData.index + 1;

    if (this.props.imageZoomState) {
      return(<span></span>)
    }

    return (
      <div 
        className="toolbar" 
        onMouseEnter={this.props.imageData.description ? this.toolbarInfoToggle : null}
        // TODO: onMouseLeave={this.someOtherHandler}
        >

        <div className="toolbar-desktop">
          <div className="title-box">
            <span className="title">
              {this.props.imageData.name}
            </span>
            <span className="image-details">
              {this.props.imageData.date}
              {/* 
                // TODO: Add image description only during mouse hover
                <span className="description">{this.props.imageData.description} 
              */}
            </span>
          
            <div className="gallery-index-box">
              <div className="gallery-index">
                {galleryPosition}/{this.props.imageData.galleryLength}
              </div>
            </div>
          
          </div>

        </div>
      </div>
    );
  }
}

export default Toolbar;
