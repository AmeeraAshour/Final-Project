import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import logo from "../../Assets/Images/Logo.png";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsPersonFillExclamation } from "react-icons/bs";



export default function NavBar() {
    let { userToken, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate ('/');
  }
  return (
    <div>
       <div>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="M Furniro" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              {userToken != null ? (
                <>
                {""}
                  <li className="nav-item me-4">
                    <Link style={{marginRight: '20px'}}
                      className="nav-link active"
                      aria-current="page"
                      to={"/"}
                    >
                     <h4> Home</h4>
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link style={{marginRight: '20px'}}
                      className="nav-link active"
                      aria-current="page"
                      to={"/shop"}
                    >
                    <h4>Shop</h4> 
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link style={{marginRight: '20px'}}
                      className="nav-link active"
                      aria-current="page"
                      to={"/cart"}
                    >
                    <h4> cart</h4> 
                    </Link>
                  </li>{" "}
                  <li className="nav-item me-4">
                    <Link style={{marginRight: '20px'}}
                      className="nav-link active"
                      aria-current="page"
                      to={"/contact"}
                    >
                     <h4>Contact</h4>
                    </Link>
                  </li>{" "}
                
                </>
              ) :("")}
            </ul>
            <ul className={` navbar navbar-nav ms-auto mb-2 mb-lg-0`}>
              <li className="nav-item d-flex align-items-center">
                
                <Link  className="nav-link active"  to ={"/checkout"}>
                <h3><BsPersonFillExclamation  style={{marginRight: '20px'}} /></h3>
                </Link>

                <Link className="nav-link active"  to ={"/"}>
                <h3><IoSearchOutline style={{marginRight: '20px'}}/></h3>
                </Link>

                <Link className="nav-link active"  to ={"/"}>
                <h3><FaRegHeart style={{marginRight: '20px'}} /></h3>
                </Link>

               <Link className="nav-link active"  to ={"/shoppingcart"}>
               <h3><BsCart3 style={{marginRight: '20px'}} /></h3>
               </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
