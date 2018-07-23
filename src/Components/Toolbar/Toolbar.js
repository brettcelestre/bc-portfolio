import React, { Component } from 'react';
import './Toolbar.css';

const zoomIcon = require('../../assets/img/zoom.png');

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedCode: '',
      selectedLanguage: '',
      zoomWidth: { width: 'auto' }
    }
    this.zoomToggle = this.zoomToggle.bind(this);
  }

  componentWillUpdate(){
    // console.log('UPDATE');
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

  zoomToggle() {
    this.props.imageZoom();
  }

  render() {
    console.log('toolbar props.imageData = ', this.props.imageData);

    const galleryPosition = this.props.imageData.index + 1;

    if (this.props.imageZoomState) {
      return(<span></span>)
    }

    return (
      // <div className="toolbar">
      <div className="toolbar">
        <div className="toolbar-desktop">
          <div className="title-box">
            <span className="title">
              {this.props.imageData.name}
            </span>
            <span className="image-details">
              {this.props.imageData.date} {/* - {this.props.imageData.size} */}
              {/* <br /> */}
              {/* <span className="description">{this.props.imageData.description} */}
              {/* </span> */}
            </span>
          
            <div className="gallery-index-box">
              {/* <div className="zoom-button" onClick={this.zoomToggle}>
                <img className="zoom-icon" src={zoomIcon} width="22px" height="22px" />
              </div> */}
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
