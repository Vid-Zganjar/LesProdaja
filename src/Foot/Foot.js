import React from "react";
import { SocialIcon } from 'react-social-icons'



const Foot = () => (
 
  <footer className="container-fluid text-white  bg-dark ">
    <div className="container-sm">
    <div className="">
      
          <div style={{marginBottom: -50, paddingTop:70}}>
            <div className="">
              
                <i style={{padding:30}}><SocialIcon  network="tiktok" url="" /></i>
                
                <i style={{padding:30}}><SocialIcon network="facebook" url="" /></i>
              <br />
              <br />
                <i style={{padding:30}}><SocialIcon network="instagram" url="" /></i>
                
                <i style={{padding:30}}><SocialIcon network="snapchat" url="" /></i>
                
            </div>
        </div>
      </div>
    </div>
    
<div className="container-sm">
    <div className="d-flex justify-content-end" style={{marginTop:-150}}>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Ure k delam</h5>

            <table className="table text-center table-dark">
              <tbody className="fw-normal">
                <tr>
                  <td>Pon - Čet:</td>
                  <td>8:00 - 16:00</td>
                </tr>
                <tr>
                  <td>Pet - Sob:</td>
                  <td>8:00 - 12:00</td>
                </tr>
                <tr>
                  <td>Nedela:</td>
                  <td>FREJ!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
  
 
  
  <div className="text-center p-3">
      © 2020 Copyright: 
      <a className="text-white" href="https://zganjar.wordpress.com/">
        Balin Majster d.o.o.
      </a>
    </div>
  </footer>
);

export default Foot;
