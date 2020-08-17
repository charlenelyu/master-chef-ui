import React from 'react';
import { Carousel } from 'antd';

export default function Home() {
  return (
    <div className="carousel" style={{ position: 'relative' }}>
      <Carousel autoplay>
        <div>
          <img src="https://res.cloudinary.com/masterchef/image/upload/v1597638908/hero_1_u23rqp.jpg" alt="hp1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/masterchef/image/upload/v1597638908/hero_2_m4mgnw.jpg" alt="hp2" />
        </div>
      </Carousel>
      <span>Share Your Recipes At Master Chef</span>
    </div>
  );
}
