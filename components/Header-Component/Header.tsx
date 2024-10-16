// import {Component, useState} from 'react'
import './Header.css'
import Button from "@mui/material/Button";
import Logo from '/logo.png'
function Header(){
    return(
        <div className="header">
             <img src={Logo} />

             <div className="header-button">
                <a href="#AboutUs">
                     <Button variant="outlined" color="primary">About</Button> 
                </a>
                <a href="#Service_Section">
                <Button variant="outlined" color="primary">Services</Button> 
                </a>
                
                <Button variant="outlined" color="primary">GALLERY</Button> 
                <Button variant="outlined" color="primary" id="contact-btn">Contact</Button> 
             </div>
        </div>
       
           
       
    );

    
}
export default Header;