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
        <h1 style={{marginTop: -330}}  className="display-1">LESOPRODAJA BOBI</h1>
          <h3>Puklič pa prpelm</h3>
          <p>Od ljudi za ljudi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slika2} style={SlikaSize}  alt="les" fluid />
        <Carousel.Caption>
          <h1>PUCEN PA DOBR, KUA ČŠ BULŠGA</h1>
          <h3>Če ne pokličš, ti bo žou</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slika3} style={SlikaSize}  alt="les" fluid />
        <Carousel.Caption>
          <h1 style={{marginTop: -230}}>Naravna Moč, Oblikovana v Lesu.</h1>
          <h3>Ti sam kup, al se splača</h3>
          <p>
            Popolna ročna obdelava
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;