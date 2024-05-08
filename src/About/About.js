import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bobek from "./bobek.jpg";

function About() {
  return (
    <div className="container">
      <h1 className="mt-5">O meni</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <img src={Bobek} className="img-fluid rounded-circle" alt="bobek" />
        </div>
        <div className="col-md-6">
          <h2>Roberto Bobek</h2>
        <p>Robert Bobek je strasten gozdar, ki že od otroštva živi in dela v globokih gozdovih, obdan s čudovito naravo.
Z več desetletji izkušenj v gozdarstvu je Robert postal mojster svojega poklica, poznavalec vsakega drevesa v gozdu in izjemno spreten v obdelavi lesa.
Njegova delavnost in predanost lesu sta ga pripeljali do tega, da je začel izdelovati čudovite lesene izdelke, kot so unikatni pohištveni kosi, ročno izrezljane skulpture in funkcionalni gospodinjski predmeti.
Poleg izdelovanja izdelkov Robert tudi preprodaja vse vrste lesa, od hrastovega in bukovega do mahagonija in češnjevega lesa, ki jih skrbno izbere v svojem gozdu ali pridobi od lokalnih gozdarjev.
S svojim trgom in občutkom za estetiko je Robert postal prepoznaven kot eden vodilnih lokalnih ponudnikov lesnih izdelkov, njegovi izdelki pa krasijo številne domove in poslovne prostore po vsej regiji.
Njegova strast do lesa je nalezljiva, zato ne samo, da ustvarja čudovite izdelke, ampak tudi deli svoje znanje in ljubezen do naravnega materiala z drugimi navdušenci.
Robert Bobek je več kot le gozdar in prodajalec lesa - je vizionar, ki vidi lepoto in moč v vsakem drevesu ter svoje delo opravlja z največjo spoštovanjem do narave.</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h3>Orodje zmer pr rok</h3>
          <ul>
            <li>Žaglica</li>
            <li>Čopinca</li>
            <li>Motorka</li>
            <li>Traktor</li>
            <li>Rihtala</li>
            <li>Šraufi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
