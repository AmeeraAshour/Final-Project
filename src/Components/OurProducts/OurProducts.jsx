import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";


export default function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(10);
  async function getProducts() {
    let { data } = await axios.get(
     `https://api.escuelajs.co/api/v1/products`
    );
    console.log(data);
    setProducts(data);
    setLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);
  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 2);
  };
  return (
    <main>
      <h2 className="text-center mt-5 fs-2 fw-bold-medium">Our Products</h2>

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
        <div style={{ textAlign: "center" }}>
          <div
            className="product-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {products.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  margin: "10px",
                  width: "200px",
                }}
              >
                <img
                  src={product.images}
                  alt={product.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mt-3">{product.title}</h6>
                <p className="mt-3">Price: ${product.price}</p>
              </div>
            ))}
          </div>

          {visibleProducts < products.length && (
        <button className="btn btn-outline-info" onClick={handleShowMore}>Show More</button>)}
        </div>
      )}
    </main>
  );
}
