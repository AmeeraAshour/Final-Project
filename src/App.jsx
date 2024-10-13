import React, { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import CheckOut from "./Components/CheckOut/CheckOut";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Cart from "./Components/Cart/Cart";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import { UserContext } from "./Context/UserContext";

import ProductsDetails from "./Components/ImageCarousel/ImageCarousel";
import CounterContextProvider from "./Context/CounterContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./Context/CartContext";
export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <Contact /> },
        { path: "/productsdetails/:id", element: <ProductsDetails /> },
        { path: "/checkout", element: <CheckOut /> },
        { path: "/cart/:id", element: <Cart /> },
        { path: "/cart", element: <Cart /> },
        { path: "/singleproduct/:id", element: <SingleProduct /> },
        { path: "/shoppingcart", element: <ShoppingCart /> },
        { path: "/shoppingcart/:id", element: <ShoppingCart /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, [setUserToken]);
  return (
    <div>
      <CartProvider>
        <CounterContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </CounterContextProvider>
      </CartProvider>

      <Toaster />
    </div>
  );
}
