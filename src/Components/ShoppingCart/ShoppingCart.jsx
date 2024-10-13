import React, { useState, useEffect } from "react";
import { Button, Offcanvas, ListGroup } from "react-bootstrap";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItemIds = [1, 2, 3];

      try {
        const fetchedItems = await Promise.all(
          cartItemIds.map(async (id) => {
            const response = await fetch(
              `https://api.escuelajs.co/api/v1/products/${id}`
            );
            const product = await response.json();
            return {
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.images[0], 
            };
          })
        );

        setCartItems(fetchedItems);

        const total = fetchedItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Cart ({cartItems.length})
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={item.title}
                  width="100"
                  style={{ marginRight: "10px" }}
                />
              ))}
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))}
          <hr />
          <h5>Total: ${totalPrice}</h5>
          <Button variant="success">Checkout</Button>
          <p>Your cart is empty.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
