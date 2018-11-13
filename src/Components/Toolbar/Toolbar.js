import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      zoomWidth: { width: 'auto' },
      descriptionHeight: 0
    }

    this.toolbarInfoToggle = this.toolbarInfoToggle.bind(this);
    this.resetToolbarHeight = this.resetToolbarHeight.bind(this);
  }

  toolbarInfoToggle() {
    const desc = document.getElementsByClassName('description');
    this.setState({
      descriptionHeight: desc[0].scrollHeight
    })
  }

  resetToolbarHeight(){
    this.setState({
      descriptionHeight: 0
    })
  }

  render() {

    let toolbarHeight = 50 + this.state.descriptionHeight;
    let indexHeight = 43 + (this.state.descriptionHeight / 2);

    let toolbarStyles = {
      height: `${toolbarHeight}px`,
    };

    let indexStyles = {
      height: `${indexHeight}px`,
    };

    return (
      <div 
        className="toolbar"
        style={toolbarStyles}
        onMouseEnter={this.toolbarInfoToggle}
        onMouseLeave={this.resetToolbarHeight}>

        <div className="toolbar-desktop">
          <div className="title-box">

            <span className="title">
              {this.props.imageData.title}
            </span>

            <span className="image-details">
              {this.props.imageData.date}
            </span>

            <div className="description">
              {this.props.imageData.info} - {this.props.imageData.size}<br />
              <div className="description-details-spacer"></div>
              {this.props.imageData.description}
            </div>
          
            <div className="gallery-index-box" style={indexStyles}>
              <div className="gallery-index">
                {this.props.currentIndex}/{this.props.galleryLength}
              </div>
            </div>
          
          </div>
        </div>
        
      </div>
    );
  }
}

export default Toolbar;
