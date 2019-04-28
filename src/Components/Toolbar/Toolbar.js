import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      zoomWidth: { width: 'auto' },
      descriptionHeight: 0,
      showInfo: false,
      isMobile: this.findWindowSize()
    }

    this.findWindowSize = this.findWindowSize.bind(this);
    this.toolbarInfoToggle = this.toolbarInfoToggle.bind(this);
    this.resetToolbarHeight = this.resetToolbarHeight.bind(this);
    this.includeSize = this.includeSize.bind(this);
    this.toolbarExpand = this.toolbarExpand.bind(this);
    this.toolbarContract = this.toolbarContract.bind(this);
  }

  componentDidUpdate() {
    if ( this.state.descriptionHeight !== 0) {
      let heightAdjustment;
      let isMobile = false;
      switch (this.findWindowSize()) {
        case 'desktop':
          heightAdjustment = 0;
          break;
        case 'tablet':
          heightAdjustment = 0;
          break;
        case 'mobile':
          isMobile = true;
          heightAdjustment = 30;
          break;
        default:
          break;
      }
      const desc = document.getElementsByClassName('image-description');
      const test = desc[0].clientHeight + heightAdjustment;
      if (test !== this.state.descriptionHeight) {
        this.setState({
          isMobile,
          descriptionHeight: desc[0].clientHeight + heightAdjustment
        });
      }
    }
  }

  findWindowSize() {
    const windowWidth = window.innerWidth;
    if ( windowWidth > 1024) {
      return 'desktop';
    } else if (415 <= windowWidth && windowWidth  <= 1023) {
      return 'tablet';
    } else if (windowWidth <= 414) {
      return 'mobile';
    }
  }

  toolbarExpand() {
    if ( this.findWindowSize() === 'desktop' ) {
        let heightAdjustment;
        let isMobile = false;
        switch (this.findWindowSize()) {
          case 'desktop':
            heightAdjustment = 0;
            break;
          case 'tablet':
            heightAdjustment = 0;
            break;
          case 'mobile':
            isMobile = true;
            heightAdjustment = 30;
            break;
          default:
            break;
        }
        const desc = document.getElementsByClassName('image-description');
        this.setState({
          showInfo: true,
          isMobile,
          descriptionHeight: desc[0].clientHeight + heightAdjustment
        });
    }
  }

  toolbarContract() {
    if ( this.findWindowSize() === 'desktop' ) {
      this.setState({
        showInfo: false,
        isMobile: false,
        descriptionHeight: 0
      });
    }
  }

  toolbarInfoToggle(where) {
    const size = this.findWindowSize();
    if ( size === 'tablet' || size === 'mobile' ) {
      if (this.state.showInfo) {
        this.setState({
          showInfo: false,
          isMobile: false,
          descriptionHeight: 0
        });
      } else {
        let heightAdjustment;
        let isMobile = false;
        switch (this.findWindowSize()) {
          case 'desktop':
            heightAdjustment = 0;
            break;
          case 'tablet':
            heightAdjustment = 0;
            break;
          case 'mobile':
            isMobile = true;
            heightAdjustment = 30;
            break;
          default:
            break;
        }
        const desc = document.getElementsByClassName('image-description');
        this.setState({
          showInfo: true,
          isMobile,
          descriptionHeight: desc[0].clientHeight + heightAdjustment
        });
      }
    }
  }

  displayResetBox(){
    if (this.state.showInfo) {
      return(
        <div className="toolbar-reset-box"
          onClick={this.toolbarInfoToggle}>
        </div>
      )
    }
    return;
  }

  resetToolbarHeight(){
    this.setState({
      descriptionHeight: 0
    })
  }

  includeSize(){
    if (this.props.imageData.size) {
      return ` - ${this.props.imageData.size}`;
    }
    return '';
  }

  render() {
    if ( this.props.imageZoomState) return null;

    let toolbarHeight,
        indexHeight,
        mobileTabletBar,
        toollbarClassNames = 'toolbar-bar',
        titleClassNames = 'title',
        dateClassNames = 'image-date';
    switch (this.findWindowSize()) {
      case 'desktop':
        toollbarClassNames += ' toolbar-bar-desktop';
        titleClassNames += ' title-desktop';
        dateClassNames += ' image-date-desktop';
        mobileTabletBar = 'disable-display';
        toolbarHeight = 50 + this.state.descriptionHeight;
        indexHeight = 43 + (this.state.descriptionHeight / 2);
        break;
      case 'tablet':
        mobileTabletBar = 'toolbar-pull-bar';
        toolbarHeight = 50 + this.state.descriptionHeight;
        indexHeight = 43 + (this.state.descriptionHeight / 2);
        break;
      case 'mobile':
        mobileTabletBar = 'toolbar-pull-bar';
        toolbarHeight = 62 + this.state.descriptionHeight;
        indexHeight = 48 + (this.state.descriptionHeight / 2);
        break;
      default:
        break;
    }

    let toolbarStyles = {
      height: `${toolbarHeight}px`,
    };

    let indexStyles = {
      height: `${indexHeight}px`,
    };

    return (
      <div 
      className="toolbar"
      onMouseEnter={this.toolbarExpand}
      onMouseLeave={this.toolbarContract}
      onClick={this.toolbarInfoToggle}>

        <div className={toollbarClassNames} style={toolbarStyles}>

          <div className="toolbar-pull-box">
            <div className={mobileTabletBar}>
            </div>
          </div>

          <div className="title-box">

            <div 
              className={this.state.showInfo ? `${titleClassNames} title-focus` : `${titleClassNames}`}>
              {this.props.imageData.title}
            </div>

            <div className={this.state.showInfo ? `${dateClassNames} image-date-focus` : `${dateClassNames}`}>
              {this.props.imageData.date}
            </div>

            <div className={this.state.showInfo ? "image-description description-focus" :"image-description"}>
              <span className="image-info">
                {this.props.imageData.info}{this.includeSize()}<br />
              </span>
              <div className="description-details-spacer"></div>
              <span className="image-description-details">
                {this.props.imageData.description}
              </span>
            </div>
          
            <div className="gallery-index-box" style={indexStyles}>
              <div className="gallery-index">
                {this.props.currentIndex}/{this.props.galleryLength}
              </div>
            </div>
          
          </div>
        </div>

        <div 
          className={this.state.showInfo ? "fade-show image-fade" :"fade-show fade-no-show"}
          onClick={this.toolbarInfoToggle}>
        </div>

      </div>
    );
  }
}

export default Toolbar;
