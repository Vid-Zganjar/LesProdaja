import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Dimensions } from 'react-native';
import slika1 from './img/les.jpg'
import slika2 from './img/pod.jpg'
import slika3 from './img/dska.jpg'
import "./Slider.css"

const win = Dimensions.get('window');
const SlikaSize ={
  width: win.width+10,
  height: 500
}

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={slika1} style={SlikaSize} alt="les" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slika2} style={SlikaSize}  alt="les" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slika3} style={SlikaSize}  alt="les" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;