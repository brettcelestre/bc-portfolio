import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import arrow from '../../assets/img/toolbar-arrow.png';
import person from '../../assets/svg/ios-person.svg';
import Scroll from '../Scroll/Scroll';
import Img from 'react-image';

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      zoomWidth: { width: 'auto' },
      descriptionHeight: 0,
      
      showInfo: false,
      // showInfo: true,

      showThumbs: false,
      scrollThumbsPreview: false,
      // scrollThumbsPreview: true,
      isMobile: this.findWindowSize()
    }

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
          heightAdjustment = 10;
          break;
        default:
          break;
      }
      const desc = document.getElementsByClassName('image-description');
      const test = desc[0].clientHeight + heightAdjustment;
      // console.log('test: ', test);
      if (test !== this.state.descriptionHeight) {
        this.setState({
          isMobile,
          descriptionHeight: desc[0].clientHeight + heightAdjustment
        });
      }
    }
  }

  findWindowSize = () => {
    const windowWidth = window.innerWidth;
    if ( windowWidth > 1024) {
      return 'desktop';
    } else if (415 <= windowWidth && windowWidth  <= 1023) {
      return 'tablet';
    } else if (windowWidth <= 414) {
      return 'mobile';
    }
  }

  toolbarExpand = () => {
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
        // console.log('descriptionHeight: ', this.state.descriptionHeight);
        // console.log('update: ', desc[0].clientHeight + heightAdjustment);
        this.setState({
          showInfo: true,
          isMobile,
          descriptionHeight: desc[0].clientHeight + heightAdjustment
        });
    }
  }

  toolbarContract = () => {
    if ( this.findWindowSize() === 'desktop' ) {
      this.setState({
        showInfo: false,
        isMobile: false,
        descriptionHeight: 0
      });
    }
  }

  toolbarInfoToggle = (where) => {
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
            heightAdjustment = 10;
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

  displayResetBox = () => {
    if (this.state.showInfo) {
      return(
        <div className="toolbar-reset-box"
          onClick={this.toolbarInfoToggle}>
        </div>
      )
    }
    return;
  }

  resetToolbarHeight = () => {
    this.setState({
      descriptionHeight: 0
    })
  }

  buildDate = (showInfo) => {
    if (!this.props.imageData.year &
        !this.props.imageData.month &
        !this.props.imageData.day) {
      return false;
    }
    if (!!this.props.imageData.month) {
      return (
        <span>{this.props.imageData.year} | <span className={showInfo ? 'month-focus' : ''}>{this.props.imageData.month}</span>
        </span>
      );
    }
    return `${this.props.imageData.year}`;
  }

  includeSize = () => {
    if (this.props.imageData.size) {
      return ` - ${this.props.imageData.size}`;
    }
    return '';
  }

  includePeople = () => {
    if (this.props.imageData.taggedPeople) {
      return (
        <span className="tagged-people">
          <img src={person} className="tagged-person-icon" /> {this.props.imageData.taggedPeople.map(p => p)}
        </span>
      )
    }
    return '';
  }

  toggleScrollThumbsPreview = () => {
    const { scrollThumbsPreview } = this.state;
    this.setState({
      scrollThumbsPreview: !scrollThumbsPreview
    });
  }

  showScrollThumbsPreview = () => {
    const { showInfo } = this.state;
    this.setState({
      scrollThumbsPreview: true
    });
  }

  hideScrollThumbsPreview = () => {
    this.setState({
      scrollThumbsPreview: false
    });
  }

  loadingPreview = (x) => {
    return (<div className="loading-preview-image">{x}</div>)
  }

  render() {
    const { startSlideshow, galleryData, imageData, galleryPath, currentSize } = this.props;
    const { toggleScrollThumbsPreview, showScrollThumbsPreview, hideScrollThumbsPreview, loadingPreview } = this;
    const { showInfo, showThumbs, scrollThumbsPreview, descriptionHeight } = this.state;
    if ( this.props.imageZoomState) return null;

    // const desktopResting = 50;
    const desktopResting = 50;
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
        toolbarHeight = desktopResting + descriptionHeight;
        indexHeight = desktopResting + (descriptionHeight / 2);

        // Scroll Height
        // indexHeight = desktopResting + descriptionHeight;
        break;
      case 'tablet':
        mobileTabletBar = 'toolbar-pull-bar';
        toolbarHeight = 50 + descriptionHeight;
        indexHeight = desktopResting + (descriptionHeight / 2);
        
        // Scroll Height
        // indexHeight = desktopResting + descriptionHeight;
        break;
      case 'mobile':
        mobileTabletBar = 'toolbar-pull-bar';
        dateClassNames += ' image-date-mobile';
        toolbarHeight = 62 + descriptionHeight;
        indexHeight = 48 + (descriptionHeight / 2);
        
        // Scroll Height
        // indexHeight = 48 + descriptionHeight;
        break;
      default:
        break;
    }

    let toolbarStyles = {
      height: `${toolbarHeight}px`,
    };
    if (this.state.showInfo) {
      mobileTabletBar +=  ' toolbar-down-arrow';
    }

    let indexStyles = {
      height: `${indexHeight}px`
    };

    const indexHoverStyles = {
      paddingTop: `${indexHeight / 2 }px`
    }

    return (
      <div 
      className="toolbar"
      onMouseEnter={this.toolbarExpand}
      onMouseLeave={this.toolbarContract}
      onClick={this.toolbarInfoToggle}
      // onMouseEnter={toggleScrollThumbsPreview}
      >

        <div className={toollbarClassNames} style={toolbarStyles}>

          <div className="toolbar-pull-box">
            <div className={mobileTabletBar}>
              <img src={arrow} />
            </div>
          </div>

          <div className="title-box">

            {/* <div 
              className={this.state.showInfo ? `${titleClassNames} title-focus` : `${titleClassNames}`}>
              {this.props.imageData.title}
            </div> */}

            <div className={this.state.showInfo ? `image-date-focus ${dateClassNames}` : `${dateClassNames}`}>
              {this.buildDate(this.state.showInfo)}
            </div>

            <div className={this.state.showInfo ? "image-description description-focus" :"image-description"}>
              <span className="image-info">
                {this.props.imageData.info}
                {this.includeSize()}

                {/* Testing Tagged People */}
                {/* {this.props.imageData.taggedPeople && (
                  this.includePeople()
                )} */}
                <br />
                {/* {this.props.imageData.info}{this.includeSize()}<br /> */}
              </span>
              <div className="description-details-spacer"></div>
              <span className="image-description-details">
                {this.props.imageData.description}
              </span>
            </div>
          
            {/* <div className="slideshow-button" onClick={startSlideshow}>
              Slideshow
            </div> */}

            {/* <div className="gallery-thumb-box" style={toolbarStyles} onClick={showThumbScroll}> */}
              {/* <Scroll showInfo={this.state.showInfo} height={indexHeight} /> */}
              {/* <div className={showInfo ? "thumb-box-animation" : "hide"}>
                
              </div> */}
            {/* </div> */}
            
            {/* {scrollThumbsPreview && (
              <div className="scroll-thumbs-preview-container" onMouseLeave={toggleScrollThumbsPreview}>
                BOX
              </div>
            )} */}

            {/* 

            Thumb Scroll below

            <div
              className={`scroll-thumbs-preview-container ${scrollThumbsPreview ? "preview-show" : ""}`}
              onMouseEnter={showScrollThumbsPreview} 
              onMouseLeave={hideScrollThumbsPreview}
              >
                {scrollThumbsPreview && galleryData.map((image) => {
                  // console.log("  >> image.title ", image.title);
                  // console.log("  >> galleryPath = ", galleryPath);
                  const { section, category, subCategory, piece } = galleryPath;
                  const linkUrl = () => {
                    if (section && category && subCategory) {
                      return `/${section}/${category}/${subCategory}/${image.urlTitle}`;
                    }
                    if (section && category) {
                      return `/${section}/${category}/${image.urlTitle}`;
                    }
                  };

                  const link = linkUrl();

                  // return <div>testing</div>;
                  // return (
                  //   <Link to={link} replace className="thumb-preview-container">
                  //     {loadingPreview()}
                  //   </Link>);
                  return (
                    <Link to={link} replace className="thumb-preview-container">
                      <Img 
                        src={buildImageSRC(section, category, subCategory, image.urlTitle)[currentSize]}
                        className="thumb-preview-image"
                        loading={loadingPreview}
                        key={`${image.urlTitle}-thumb`}
                        />
                    </Link>);
                })}
                <div className="thumb-gallery-spacer"></div>
            </div> */}

            <div 
              className="gallery-index-box" 
              style={indexStyles}
              onClick={showScrollThumbsPreview}
              onMouseEnter={showScrollThumbsPreview}
              onMouseLeave={hideScrollThumbsPreview}
              >
              <div className="gallery-index">
                {this.props.currentIndex}/{this.props.galleryLength}
              </div>
              {/* <Scroll showInfo={this.state.showInfo} height={indexHeight} /> */}
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
