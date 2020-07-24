
import React, { Component } from 'react';
import './Dust.css';

const dustImgs = [
  require('../../assets/img/dust-4.png'),
  require('../../assets/img/dust-5.png'),
  require('../../assets/img/dust-6.png'),
  require('../../assets/img/dust-7.png'),
  require('../../assets/img/dust-8.png'),
  require('../../assets/img/dust-9.png')
];

const intenseDustImgs = [
  require('../../assets/img/dust-1.png'),
  require('../../assets/img/dust-2.png'),
  require('../../assets/img/dust-3.png'),
  require('../../assets/img/dust-10.png')
];

const allDustImgs = [
  ...dustImgs,
  ...intenseDustImgs
]

class Dust extends Component {
  constructor(props){
    super(props)
    this.state = {
      parentHeight: null,
      parentWidth: null
    }
  }

  componentDidMount() {
    const parentHeight = document.getElementById('dust-container').parentNode.offsetHeight;
    const parentWidth = document.getElementById('dust-container').parentNode.offsetWidth;
    this.setState({
      parentHeight,
      parentWidth
    })
  }

  dustGenerator = ()  => {
    const { parentHeight, parentWidth } = this.state;
    const { frequency, intensity } = this.props;
    if (parentHeight && parentWidth) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      const dustCollection = [];
      for (let d = 0; d < frequency; d++) {
        function randomDust(i) {
          if (intensity) {
            return allDustImgs[i];
          }
          return dustImgs[i];
        }

        const dustStyles = {
          position: "absolute",
          top: getRandomInt(parentHeight),
          left: getRandomInt(parentWidth),
          zIndex: 2
        }
        dustCollection.push(<img key={`d-p-${d}`}src={randomDust(getRandomInt(dustImgs.length))} style={dustStyles} alt="dust"/>);
      }
      return dustCollection;
    }
  }

  render() {
    const { dustGenerator } = this;
    const { parentHeight, parentWidth } = this.state;
    let dustContainerStyles = {}
    if (parentHeight && parentWidth) {
      dustContainerStyles = {
        height: parentHeight,
        width: parentWidth
      }
    }
    return(
      <div id="dust-container" className="dust-container" style={dustContainerStyles}>
        {dustGenerator()}
      </div>
    )
  }
}

export default Dust;
