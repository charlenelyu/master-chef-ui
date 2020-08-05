import React from "react";
import { Carousel } from 'antd';

export default class Home extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  render() {
    const contentStyle = {
      height: '100%',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };

    return (
      <Carousel autoplay>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/uWto6lVecIR4QMlkh0Un3zQ4jJprrHUoqt5jAApnAnHq2dfPhk_hhXb8dW-EO4NeHmSEOzjQPbTYeb5bjh4wIKHGAryc2ZHIfrE3cvdvV8tZP4_HP4Wwam3E8Smxi9rIktfHMtlevBasnUX--kp6VQ"/>
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    )
  }
}