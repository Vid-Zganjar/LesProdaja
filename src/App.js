
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Kazalo.js";
import Slider from "./Slide/Slider.js";
import Card from "./Card/Kartica.js";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import slika1 from "./Card/img/hiska.jpg";
import slika2 from "./Card/img/skatla.jpg";
import slika3 from "./Card/img/zlice.jpg";
import Foot from "./Foot/Foot.js"

function App() {
  return (
    <>
      <Navbar />
      <Slider></Slider>
      <Form>
        <Row>
          <Col>
            <Card SlikaSrc={slika1} />
          </Col>
          <Col>
            <Card SlikaSrc={slika2} />
          </Col>
          <Col>
            <Card SlikaSrc={slika3} />
          </Col>
        </Row>
      </Form>
      <Foot />
    
    </>
  );
}

export default App;
