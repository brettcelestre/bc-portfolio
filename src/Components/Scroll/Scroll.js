
import React, { Component } from 'react';
import './Scroll.css';

// let scrollAmount = 70;
// function animateSquare (){
//   const canvas = document.getElementById('scroll-canvas');
//   const ctx = canvas.getContext('2d');
//   // ctx.clearRect(0, 0, 10, 10);
  
//   // ctx.fillRect(10, 0, 10, 10);
//   // ctx.fillRect(30, 0, 10, 10);
//   // ctx.fillRect(50, 0, 10, 10);
  
//   scrollAmount -= 10;
  
  
//   // ctx.save();
//   // ctx.restore();
//   // ctx.beginPath();
//   ctx.fillRect(scrollAmount, 0, 10, 10);
//   ctx.fillStyle = 'black';
//   console.log("ji");
//   // ctx.translate(scrollAmount, 0);
//   // ctx.closePath();

//   // window.requestAnimationFrame(animateSquare);
// }

class Scroll extends Component {
  constructor(props){
    super(props)
    this.state = {
      parentHeight: null,
      parentWidth: null
    }
  }

  componentDidMount = () => {
    // const { animateSquare } = this;
    // window.requestAnimationFrame(animateSquare);
    // setInterval(animateSquare, 500);

    // const canvas = document.getElementById('scroll-canvas');
    // const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'black';
    // // ctx.fillRect(10, 0, 10, 10);
    // // ctx.fillRect(30, 0, 10, 10);
    // // ctx.fillRect(50, 0, 10, 10);
    // let scrollAmount = 70;
    
    // ctx.beginPath();
    // ctx.fillRect(scrollAmount, 0, 10, 10);
    // ctx.moveTo(50,0);

    // setTimeout(animateSquare, 1000);

    // var iintervalCtxd = setInterval(animateSquare(sq1), 10);
    // function animateSquare (ctx, intervalCtx){
    //   if (scrollAmount == 0) {
    //     clearInterval(intervalCtx);
    //   } else {
    //     scrollAmount--; 
    //     // ctx.style.top = pos + 'px'; 
    //     // ctx.style.left = scrollAmount + 'px'; 
    //   }
    // }

    const { showInfo } = this.props;
    // const scrollBoxStyles = showInfo ? "scroll-box scroll-box-zoom" : "scroll-box";
    const scrollBoxStyles = "scroll-box";

    // Generate 4 squares
    const scrollCanvas = document.getElementById('scroll-container');
    const box1 = document.createElement("div");
    box1.classList.add(scrollBoxStyles);
    const box2 = document.createElement("div");
    box2.classList.add(scrollBoxStyles);
    const box3 = document.createElement("div");
    box3.classList.add(scrollBoxStyles);
    const box4 = document.createElement("div");
    box4.classList.add(scrollBoxStyles);
    scrollCanvas.appendChild(box1);
    setTimeout(() => {
      scrollCanvas.appendChild(box2);
    }, 1500);
    setTimeout(() => {
      scrollCanvas.appendChild(box3);
    }, 3000);
    setTimeout(() => {
      scrollCanvas.appendChild(box4);
    }, 4500);
    // <div className="scroll-box-1"></div>
  }

  // animateSquare = (ctx) => {
  //   if (pos == 350) {
  //     clearInterval(id);
  //   } else {
  //     pos++; 
  //     elem.style.top = pos + 'px'; 
  //     elem.style.left = pos + 'px'; 
  //   }
  // }

  render() {
    const { height, width, showInfo } = this.props;
    const { scrollGenerator } = this;
    // const scrollHieght = height / 2 + 15;
    // const scrollContainerStyles = {
    //   top: showInfo ? `${scrollHieght}px` : "30px"
    // };

    // const scrollClass = height / 2 + 15;
    // const scrollContainerStyles = {
    //   top: showInfo ? `${scrollHieght}px` : "30px"
    // };
   
    // style={scrollContainerStyles}

    return(
      <div id="scroll-container" className={showInfo ? "scroll-container" : "scroll-container"} >
      {/* <div id="scroll-container" className="scroll-container" > */}
        {/* <canvas id="scroll-canvas"></canvas> */}
        {/* <div className="scroll-box-1"></div> */}
        {/* scroll */}
      </div>
    )
  }
}

export default Scroll;
