import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      
      <footer className={`${style.footer}`}>
      <div className={`${style.footercolumn}`}>
        <h1 className={`${style.logo}`}>Funiro.</h1>
        <p className={`${style.footerpara}`}>
          <p>400 University Drive Suite 200 </p>
          <p> Coral Gables,</p>
          <p> FL 33134 USA</p>
         </p>
      </div>

      <div className={`${style.footercolumn}`}>
        <h5  className={`${style.footerhead}`}>Links</h5>
        <ul>
          <ul><a href="/" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></ul>
          <br></br>
          <ul><a href="/shop"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Shop</a></ul>
          <br></br>
          <ul><a href="/blog"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Blog</a></ul>
          <br></br>
          <ul><a href="/contact"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact</a></ul>
        </ul>
      </div>

      <div className={`${style.footercolumn}`}>
        <h5  className={`${style.footerhead}`}>Help</h5>
        <ul>
          <ul><a href="/about"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ">About</a></ul>
          <br></br>
          <ul><a href="/services"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Services</a></ul>
          <br></br>
          <ul><a href="/careers"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Careers</a></ul>
          <br></br>
          <ul><a href="/checkout"className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">ChectOut</a></ul>
        </ul>
      </div>

      <div className={`${style.footercolumnsubscribe}`}>
        <h5  className={`${style.footerhead}`}>Newsletter</h5>
        <div className={`${style.subscribeform}`}>
          <input type="email" placeholder="Enter your email" />
          <a  className={`${style.footerpara}`}>Subscribe</a>
        </div>
      </div>
    </footer>
     
    </div>
  )
}
