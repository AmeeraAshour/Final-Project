import React from "react";
import style from "./Contact.module.css";
import barShop from "../../Assets/Images/barShop.png";
import { Link } from "react-router-dom";

import { BsTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

export default function Contact() {
  return (
    <main>
      <div className={`${style.background}`}>
        <h1 className={`${style.cardoverlay}`}>
          <Link className={`${style.head}`}>Contact </Link>
        </h1>
        <div className="row mt-3">
          <div className="col mt-4">
            <a
              href="/"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Home
            </a>
          </div>
          <div className="col mt-4">
            <a
              href="/contact"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Contact
            </a>
          </div>
          </div>
      </div>
      <div>
        <h1 className={`${style.cardname}`}>Get In Touch With Us</h1>
        <p className={`${style.cardpar}`}>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!{" "}
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2 text-center d-flex flex-column align-items-center ">
            <div>
              <h2 className="fw-bold">
                <i>
                  <BsGeoAltFill />
                </i>
                Address
              </h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h2 className="fw-bold">
                <i>
                  <BsTelephoneFill />
                </i>
                Phone
              </h2>
              <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <h4 className="fw-bold">
                <i>
                  <BsFillClockFill />
                </i>
                Working Time
              </h4>
              <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-center"></div>
          <div className="col-md-6">
            <form>
              <div className={`${style.formgroup}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className={`${style.formgroup}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className={`${style.formgroup}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>
              <div className={`${style.formgroup}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className={`${style.centeredbutton}`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${style.barShop} expand-lg bg-body`}>
        <img src={barShop} className={style.barShop} alt="barShop.png" />
      </div>
    </main>
  );
}
