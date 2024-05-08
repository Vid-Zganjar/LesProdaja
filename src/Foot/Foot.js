import React from "react";
import { SocialIcon } from 'react-social-icons'



const Foot = () => (
 
  <footer className="text-white text-center text-lg-start bg-dark">
    <div className="container p-4">
      <div className="row">
        
        <hr className="clearfix w-100 d-md-none pb-0" />
<div style={{marginBottom: -50, paddingTop:20}}>
        <div className="d-flex flex-column">
          <div className="mt-4">
              <i style={{padding:10}}><SocialIcon  network="tiktok" url="" /></i>

              <i style={{padding:10}}><SocialIcon network="facebook" url="" /></i>

              <i style={{padding:10}}><SocialIcon network="instagram" url="" /></i>

            <i style={{padding:10}}><SocialIcon network="snapchat" url="" /></i>
          </div>
        </div>
        </div>
        <div className="d-flex justify-content-center">
          

          <ul className="fa-ul" >
          <li className="mb-3">
            <span className="fa-li">
              <i className="fas fa-home"></i>
            </span>
            <span className="ms-2">Šentjanž 88, 8297 Šentjanž</span>
          </li>
          <li className="mb-3">
            <span className="fa-li">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="ms-2">kr.pis@misl-si.com</span>
          </li>
          <li className="mb-3">
            <span className="fa-li">
              <i className="fas fa-phone"></i>
            </span>
            <span className="ms-2">+386 040 055 005</span>
          </li>
        </ul>
      </div>
<div className="d-flex justify-content-end" style={{marginTop: -170}}>
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
