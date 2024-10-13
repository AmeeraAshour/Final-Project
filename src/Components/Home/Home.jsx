import React from "react";
import style from "../Home/Home.module.css";
import Dining from "../../Assets/Images/Dining.webp";
import Living  from "../../Assets/Images/Living.webp";
import Bedroom from "../../Assets/Images/Bedroom (1).webp";
import photo1 from "../../Assets/Images/photo1.png";
import photo2 from "../../Assets/Images/photo2.png";
import photo3 from "../../Assets/Images/photo3.png";
import photo4 from "../../Assets/Images/photo4.png";
import photo5 from "../../Assets/Images/photo5.png";
import photo6 from "../../Assets/Images/photo6.png";
import photo7 from "../../Assets/Images/photo7.png";
import photo8 from "../../Assets/Images/photo8.png";
import photo9 from "../../Assets/Images/photo9.png";
import { Link } from "react-router-dom";
import OurProducts from "../OurProducts/OurProducts";
import ImageCarousel from "../ImageCarousel/ImageCarousel";



export default function Home() {

  return (

 <main>
<div className={`${style.background}`}>
      <div className={`${style.cardoverlay}`}>
        <h5>New Arrival</h5>
        <h1>Discover Our
            New Collections
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis..</p>
        <button className= {`${style.btn}`}>
                BUY NOW
              </button>
      </div>
    </div>
    <div >
      <h2 className= {`${style.heading}`}>Browse The Range</h2>
      <p className= {`${style.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='row'>
         <div className='col-md-4'>
            <div className='card'>
            <img src={Dining} className= {style.img} alt="Dining.webp" />
                <h3 className={`${style.cardtitle}`}>
                <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"*"}
                    >
                     Dining
                    </Link>  
                  </h3>
            </div>
         </div>
         <div className='col-md-4'>
            <div className='card'>
            <img src={Living} className= {style.img} alt="Living.webp" />
                <h3 className={`${style.cardtitle}`}>
                <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"*"}
                    >
                    Living
                    </Link> 
                    </h3>
            </div>
         </div>
         <div className='col-md-4'>
            <div className='card'>
            <img src={Bedroom} className= {style.img} alt="Bedroom (1).webp" />
                <h3 className={`${style.cardtitle}`}>
                <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"*"}
                    >
                    Bedroom
                    </Link></h3>
            </div>
         </div>
      </div>
    </div>
    <div>
        <OurProducts/>
        <ImageCarousel />
    </div>
  
    <div className="someproducts">
      <h4 className= {`${style.heading}`}>Share your setup with</h4>
      <h1 className= {`${style.paragraph}`}>#FuniroFurniture</h1>
      <div className='row'>
         <div className='col-md-3'>
            <div className="card">
            <img src={photo1} className= {style.img} alt="photo1.webp" />
            </div>
         </div>
         <div className='col-md-3'>
            <div className="card">
            <img src={photo2} className= {style.img} alt="photo2.png" />
            </div>
         </div>
         <div className='col-md-2'>
            <div className="card">
            <img src={photo3} className= {style.img} alt="photo3.png" />
            </div>
         </div>
         <div className='col-md-5'>
            <div className="card">
            <img src={photo4} className= {style.img} alt="photo4.png" />
            </div>
         </div>
         <div className='col-md-2'>
            <div className="card">
            <img src={photo5} className= {style.img} alt="photo5.png" /> 
            </div>
         </div>
         <div className='col-md-4'>
            <div className="card">
            <img src={photo6} className= {style.img} alt="photo6.png" />
            </div>
         </div>
         <div className='col-md-3'>
            <div className="card">
            <img src={photo7} className= {style.img} alt="photo7.png" />
            </div>
         </div>
         <div className='col-md-4'>
            <div className="card">
            <img src={photo8} className= {style.img} alt="photo8.png" />
            </div>
         </div>
         <div className='col-md-2'>
            <div className="card">
            <img src={photo9} className= {style.img} alt="photo9.png" />
            </div>
         </div>
      </div>
    </div>
 </main>
  

  )
}
