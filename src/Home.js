import React from 'react'
import Slider from "./Slide/Slider.js";
import Card from "./Card/Kartica.js";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import slika1 from "./Card/img/hiska.jpg";
import slika2 from "./Card/img/skatla.jpg";
import slika3 from "./Card/img/zlice.jpg";

function Home() {
  return (
    <>
        <Slider></Slider>
        <Form>
            <Row>
            <Col>
                <Card SlikaSrc={slika1} Naslov = "Lesena hišica" Text = "Majhna lesena hišica ponuja očarljiv in prijeten dom v naravi. Zgrajena z ljubeznijo in skrbnostjo, združuje toplino lesa s preprostostjo naravnega okolja. Vsak kotiček je poln značaja, ustvarjen za uživanje v miru in tišini ter povezanost z naravo." />
            </Col>
            <Col>
                <Card SlikaSrc={slika2}  Naslov = "Leseni shranjevalnik" Text ="Leseni shranjevalnik, ali po domače 'škatljica', je preprost, a eleganten kos pohištva, ki ponuja praktično in estetsko rešitev za organizacijo. Ročno izdelan iz kakovostnega lesa, škatljica ponuja varno in privlačno okolje za shranjevanje dragocenih predmetov ali spominov. S svojo naravno lepoto in vzdržljivostjo predstavlja funkcionalen dodatek vsakemu prostoru."/>
            </Col>
            <Col>
                <Card SlikaSrc={slika3} Naslov = "Lesene kuhalnice" Text ="Lesene kuhalnice so nepogrešljiv pripomoček v vsaki kuhinji. Narejene iz trdnega lesa, so oblikovane za udoben oprijem in enostavno uporabo pri kuhanju. Njihova naravna tekstura in toplina lesa dodajata pridih tradicije in kakovosti vsakemu kuharskemu ustvarjanju."/>
            </Col>
            </Row>
        </Form>
      </>
  )
}

export default Home