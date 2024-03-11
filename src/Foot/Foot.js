import React from "react";
import { SocialIcon } from 'react-social-icons'



const Foot = () => (
 
  <footer className="text-white text-center text-lg-start bg-dark">
    <div className="container p-4">
      <div className="row">
        <div className="row mt-4">
          <h5 className="text-uppercase mb-4">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <div class="mt-4">
              <i style={{padding:10}}><SocialIcon  network="tiktok" url="www.vimeo.com" /></i>

              <i style={{padding:10}}><SocialIcon network="facebook" url="www.vimeo.com" /></i>

              <i style={{padding:10}}><SocialIcon network="instagram" url="www.vimeo.com" /></i>

            <i style={{padding:10}}><SocialIcon network="snapchat" url="www.vimeo.com" /></i>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

          <div class="form-outline form-white mb-4">
            <input
              type="text"
              id="formControlLg"
              class="form-control form-control-lg" />
            <label class="form-label" for="formControlLg">
              Search
            </label>
          </div>

          <ul class="fa-ul" >
          <li class="mb-3">
            <span class="fa-li">
              <i class="fas fa-home"></i>
            </span>
            <span class="ms-2">Warsaw, 00-967, Poland</span>
          </li>
          <li class="mb-3">
            <span class="fa-li">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="ms-2">contact@example.com</span>
          </li>
          <li class="mb-3">
            <span class="fa-li">
              <i class="fas fa-phone"></i>
            </span>
            <span class="ms-2">+ 48 234 567 88</span>
          </li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">Opening hours</h5>

        <table class="table text-center text-white">
          <tbody class="fw-normal">
            <tr>
              <td>Mon - Thu:</td>
              <td>8am - 9pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>8am - 1am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>9am - 10pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div><div class="text-center p-3">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
  </footer>
);

export default Foot;
