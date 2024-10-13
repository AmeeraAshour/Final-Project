import React, { useState } from "react";
import style from "./CheckOut.module.css";
import barShop from "../../Assets/Images/barShop.png";
import { Link } from "react-router-dom";

export default function CheckOut() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleSelect = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <main>
      <div className={`${style.background}`}>
        <div className={`${style.cardoverlay}`}>
          <h1 >
            <Link className={`${style.head}`}>CheckOut </Link>
          </h1>
        </div>
        <div className="row mt-3">
          <div className="col mt-4 ">
            <a
              href="/"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover d-block"
            >
              Home
            </a>
          </div>

          <div className="col mt-4 ">
            <a
              href="/checkout"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover d-block"
            >
              CheckOut
            </a>
          </div>
        </div>
      </div>

      <div class="container px-1 text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <h1>Billing details</h1>
              <form>
                <div className={`${style.formgroupname}`}>
                  <label htmlFor="name"> First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your first name"
                  />
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="name">Company Name (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="subject">Country/Region</label>
                  <input
                    id="country"
                    value={selectedCountry}
                    onChange={handleSelect}
                    className="form-control"
                    placeholder="Enter your country/region"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="subject">Street</label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Enter street address"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="name">Town/City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="town"
                    placeholder="Enter town/city name"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="subject">Province</label>
                  <input
                    type="province"
                    onChange={handleSelect}
                    className="form-control"
                    id="province"
                    placeholder="Enter subject"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="subject">ZIP code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip code"
                    placeholder="Enter zip code"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="tel">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className={`${style.formgroup}`}>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <div className="row">
                <div className="col-sm-6 mb-1">
                  <div className={`${style.cardbank}`}>
                    <div className={`${style.cardbody}`}>
                      <h5 className="card-title">Product</h5>
                      <p className={`${style.cardtextbank}`}>
                        Asgaard Sofa x 1
                      </p>
                      <h5 className="card-text">Subtotal </h5>
                      <h5 className="card-text">Total</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-1 ">
                  <div className={`${style.cardbank1}`}>
                    <div className={`${style.cardbody}`}>
                      <h5 className="card-title">Subtotal</h5>
                      <p className="card-text">Rs.250,000.00 </p>
                      <p className="card-text">Rs.250,000.00</p>
                      <h4 className={`${style.cardtext}`}>Rs.250,000.00 </h4>
                    </div>
                  </div>
                </div>
                <div className="card w-100 mb-3">
                  <div className={`${style.cardbody}`}>
                    <ul class={`${style.listgroup}`}>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="radio"
                          name="listGroupRadio"
                          value=""
                          id="firstRadio"
                          checked
                        />
                        <label className="form-check-label" for="firstRadio">
                          Direct Bank Transfer
                        </label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Lorem, ipsum dolor sit amet consectetur
                          adipisicing elit. Aliquam non similique obcaecati
                          sapiente cumque labore perferendis odio excepturi
                          laudantium architecto. Illo sunt excepturi totam
                          architecto ut alias distinctio saepe necessitatibus.
                        </p>
                      </li>

                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="radio"
                          name="listGroupRadio"
                          value=""
                          id="secondRadio"
                        />
                        <label className="form-check-label" for="secondRadio">
                          Direct Bank Transfer
                        </label>
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="radio"
                          name="listGroupRadio"
                          value=""
                          id="thirdRadio"
                        />
                        <label className="form-check-label" for="thirdRadio">
                          Cash On Delivery
                        </label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sit eius reprehenderit quasi iste maxime
                          impedit! Quos ea aliquid cupiditate dolore dolores
                          odit doloribus consequatur? Veniam perspiciatis
                          tempore ex maxime molestiae?
                        </p>
                      </li>
                    </ul>
                    <button
                      type="button"
                      class="btn active"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <h4>Place Order</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.barShop} expand-lg bg-body`}>
        <img src={barShop} className={style.barShop} alt="barShop.png" />
      </div>
    </main>
  );
}
