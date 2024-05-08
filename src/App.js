
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Kazalo.js";
import Home from "./Home.js";
import Foot from "./Foot/Foot.js";

import { Routes, Route, Switch } from 'react-router-dom';
import About from './About/About.js';
import Trgovina from './Shop/Artikelj1.js';



function App() {
  return (
    <>
     
     <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trgovina" element={<Trgovina />} />
       </Routes>
        
         
       
      
      <Foot />
     
    </>
  );
}


export default App;
