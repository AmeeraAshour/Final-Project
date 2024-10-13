import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import style from "./SingleProduct.module.css";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
import CompareProducts from "../ShoppingCart/ShoppingCart";


export default function ()  {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  const { addToCart } = useContext(CartContext);
  const [compareProducts, setCompareProducts] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching the product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to the cart!`);
  };
  const handleCompare = () => {
    if (compareProducts.length < 2) {
      setCompareProducts([...compareProducts, product]);
    } else {
      toast.error("You can only compare two products at a time.");
    }
    setShowCompare(true);
  };

  const removeProduct = (productId) => {
    setCompareProducts(compareProducts.filter(p => p.id !== productId));
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product || !product.images || product.images.length === 0) {
    return <div>No images available for this product</div>;
  }
  return (
    <main>
      <div className={`${style.navsinglepro}`}>
        <nav className="navbar bg-body-tertiary-bs-danger-bg-subtle mb-4">
          <div className="row ">
          <div className="col "><a href="/" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></div>
          <div className="col "><a href="/shop" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Shop</a></div>
          <div className="col-sm-6 col-md-6">{product.title}</div>
          </div>

        </nav>
      </div>
      <div>
        {product ? (
          <div className="row gx-5">
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "200px" }}
            />
            <div key ={product.id} className="col-md-4">
             
              {product.images.map((image) => (
                <img src={image} alt={product.title} className="w-100" />
              ))}
            
            </div>
            <div className="col-md-4">
              <h2>{product.title}</h2>
              <h4 className={`${style.cardtext}`}>Price: ${product.price} </h4>
             
              <p>{product.description}</p>
              <p className={`${style.parasingle}`}>Size</p>
              <button type="submit" className={`${style.centeredbutton}`}>
                <h4>L</h4>
              </button>
              <button type="submit" className={`${style.centeredbutton}`}>
                <h4>XL</h4>
              </button>
              <button type="submit" className={`${style.centeredbutton}`}>
                <h4>XS</h4>
              </button>

              <p className={`${style.parasingle}`}>Color</p>
              <button
                type="submit"
                className={`${style.centeredbutton1}`}
              ></button>
              <button
                type="submit"
                className={`${style.centeredbutton2}`}
              ></button>
              <button
                type="submit"
                className={`${style.centeredbutton3}`}
              ></button>
              <div>
                <div className="counter-container mt-4">
                <button className={`${style.counterbutton}`} onClick={decrement}>-</button>
                  <span className="counter-value">
                    {count}
                  </span>
                  <button className={`${style.counterbutton}`} onClick={increment}>+</button>
  
                  <Link to="/cart">
                  <button type="button" onClick={handleAddToCart} className="btn btn-outline-secondary m-1">Add to cart </button>
                  </Link>
                  <Link to="/shoppingcart/">
                  <button type="button" onClick={handleCompare}className="btn btn-outline-secondary m-1"> + Compare</button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No product found.</p>
        )}
      </div>
      {showCompare && (
        <CompareProducts
          products={compareProducts}
          onClose={() => setShowCompare(false)}
          removeProduct={removeProduct}
        />
      )}
    </main>
  );
}
