import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import style from "./Shop.module.css";
import toast from "react-hot-toast";
import barShop from "../../Assets/Images/barShop.png";
import { BsSliders } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import {
  FaExchangeAlt,
  FaHeart,
  FaShareAlt,

} from "react-icons/fa";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(20);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
    setLoading(false);
  }, []);

  const handleAddToCart = () => {
    addToCart(products);
    toast.success(`${products.title} added to the cart!`);
  };
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 20);
  };

  return (
    <main>
      <ul className={`${style.navbar}`}>
        <BsSliders />
        <ul>Filter</ul>
        <BsFillGridFill />
        <BsViewList />

        <ul className={`${style.showing}`}>showing 1-16 of 32 results</ul>
        <span className={`${style.showsort}`}>
          <label>
            show
            <input type="number" value="number" min="1" />
          </label>
          <ul>
            sort by
            <input value="Default" />
          </ul>
        </span>
      </ul>

      {loading ? (
        <div>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center"
          />
        </div>
      ) : (
        <div className="row gy-4">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="col-lg-4">
              <Link to={`/singleproduct/${product.id}`}>
                <div className={`${style.product}`}>
                  <img
                    src={product.images}
                    alt={product.title}
                    className="img-fluid"
                  />
                  
                    <span className="font-sm text-main">
                      {product.category.name}
                    </span>
                    <h3 className="h5">
                      {""}
                      {product.title.split(" ").splice(0, 2).join(" ")}
                    </h3>
                    <div className="d-flex py-3 justify-content-between align-items-center">
                      <span className={style.price}>{product.price} EGP</span>
                    </div>
                    <div className={`${style.overlay}`}>
                    <button
                      onClick={handleAddToCart}
                      className="btn p-3 mb-2 bg-transparent text-white"
                    > Add to Cart
                    </button>
                    <button className="btn p-3 mb-2 bg-transparent text-white">
                      <FaShareAlt /> Share
                    </button>
                    <button className="btn p-3 mb-2 bg-transparent text-whiter">
                      <FaHeart /> Like
                    </button>
                    <button className="btn p-3 mb-2 bg-transparent text-white">
                      <FaExchangeAlt /> Compare
                    </button>
                  </div>

                </div>
              </Link>
            </div>
          ))}
          {visibleProducts < products.length && (
            <button
              className={`${style.btnshowMore}`}
              onClick={showMoreProducts}
            >
              Show More
            </button>
          )}
        </div>
      )}
      <div className={`${style.barShop} expand-lg bg-body`}>
        <img src={barShop} className={style.barShop} alt="barShop.png" />
      </div>
    </main>
  );
}
