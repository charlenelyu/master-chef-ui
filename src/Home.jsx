import React from 'react';
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
    return (
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <div className="out-container" style={{ position: 'relative' }}>
              <img src="https://res.cloudinary.com/masterchef/image/upload/v1596678579/home1_qcqnhq.jpg" alt="hp1"/>
              <span>Master Chef</span>
            </div>
          </div>
          <div>
            <div className="out-container" style={{ position: 'relative' }}>
              <img src="https://res.cloudinary.com/masterchef/image/upload/v1596678583/home2_defwnw.jpg" alt="hp2"/>
              <span>Master Chef</span>
            </div>
          </div>
          <div>
            <div className="out-container" style={{ position: 'relative' }}>
              <img src="https://res.cloudinary.com/masterchef/image/upload/v1596678580/home3_sbx61y.jpg" alt="hp3"/>
              <span>Master Chef</span>
            </div>
          </div>
          <div>
            <div className="out-container" style={{ position: 'relative' }}>
              <img src="https://res.cloudinary.com/masterchef/image/upload/v1596678581/home4_rg4dtc.jpg" alt="hp4"/>
              <span>Master Chef</span>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
