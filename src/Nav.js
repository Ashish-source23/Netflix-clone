import React, { useEffect, useState } from 'react';
import "./nav.css";

function Nav() {

   const [show , handleShow] = useState(false); 

   useEffect(() =>{
      window.addEventListener("scroll" , () => {
         if(window.scrollY > 100){
            handleShow(true);
         } else {
            handleShow(false);
         }
      });
      // return () => {
      //    window.removeEventListener("scroll") 
      //   };
   },[]);



  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
            className="nav_logo" 
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" 
            alt="Navbar_logo"
         />
         <div className="nav_title">
            <a className="nav_content"  href>
               Home
            </a>
            <a  className="nav_content" href>
               TV Shows
            </a>
            <a  className="nav_content" href>
               Movies
            </a>
            <a  className="nav_content" href>
               Latest
            </a>
            <a  className="nav_content" href>
               My List
            </a>
         </div>

         <div className="nav_sideitems">
            <img className="nav_images"  src="Images/search.png" alt="Search"></img>

            <a className="nav_side" href>DVD</a>

            <img className="nav_images" src="Images/gift.png" alt="Present"></img>

            <img className="nav_images" src="Images/bell.png" alt="Notifications"></img>
         </div>
         
         <img 
            className="nav_avatar" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Navbar_avatar"
         />
    </div>
  )
}

export default Nav;