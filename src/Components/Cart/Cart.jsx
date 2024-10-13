import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./Cart.module.css";
import barShop from "../../Assets/Images/barShop.png";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <main>
      <div className={`${style.background}`}>
        <h1>
          <Link className={`${style.head}`}>Cart</Link></h1>
        <div className="row mt-4">
          <div className="col mt-4 ">
            <a
              href="/"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Home
            </a>
          </div>

          <div className="col mt-4">
            <a
              href="/cart"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Cart
            </a>
          </div>
        </div>
      </div>

      <table className={`${style.producttable}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <br></br>
            <th>Quantity</th>
            <br></br>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, id) => (
            <tr key={id}>
              <td>
                <div className={`${style.productitem}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    width="100"
                  />
                  <span>{product.title}</span>
                </div>
              </td>
              <td>${product.price}</td>
              <td>
                <input type="number" value="1" min="1" />
              </td>
              <td>${product.price}</td>
              <td>
                <button className={`${style.deletebtn}`}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`${style.carttotals}`}>
        <h2>Cart Totals</h2>
        <div className={`${style.totalsdetails}`}>
          <div className={`${style.subtotal}`}>
            <span>Subtotal</span>
            <span>
              ${cart.reduce((total, product) => total + product.price, 0)}
            </span>
          </div>
          <div className={`${style.subtotal}`}>
            <span>Total</span>
            <span className={`${style.totalprice}`}>
              ${cart.reduce((total, product) => total + product.price, 0)}
            </span>{" "}
            {/* Dynamic Total */}
          </div>
          <button className="btn active mt-5">Check Out</button>
        </div>
      </div>
      <div className={`${style.barShop} expand-lg bg-body`}>
        <img src={barShop} className={style.barShop} alt="barShop.png" />
      </div>
    </main>
  );
}
