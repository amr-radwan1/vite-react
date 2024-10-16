//import {Component, useState} from 'react'
import './Product.css'
import Button from "@mui/material/Button";


function Product(){
    return(
       <>
       <section id="Service_Section"className='Section_product'>
        <div className="rows first-row">
                <div>
                    <h1>PRODUCTS</h1>
                    <h1 id="and"> &</h1>
                    <h1>SERVICES</h1>
                </div>
                <div>
                <p>
                    Renovating can involve numerous decisions and may feel overwhelming at times.
                    That’s why we carefully plan and review your project timeline, ensuring you understand each phase and step. 
                    Our goal is to help you feel confident about the progress while keeping your vision and budget in mind. 
                    We are committed to making your dreams a reality, providing honest, skilled, and trustworthy service, and building a strong relationship based on trust and transparency.
                </p>
            </div>
        </div>

        <div className="rows second-row">
            <div className='Items'>
                <div className="ImageHolder">
                </div>
                
                <div className='Item2'>
                    <h4>Kitchen renovations</h4>
                    <p>
                        Our team works with you to create plans for your new kitchen and dining area. 
                        Together we’ll choose the layout that brings your vision to life.
                    </p>
                    <div className='all-span' >
                    <hr></hr>
                    <span >MORDERN DESIGN</span>
                    <hr></hr>
                    <span>Flooring / Countertops</span>
                    <hr></hr>
                    <span>Backsplashes, fixtures & more</span>
                    <hr></hr>
                    </div> 
                    <div className="contact-us">
                    <Button variant="contained" color="primary">CONTACT US</Button> 
                    </div>
                </div>

            </div>
            <div className='Items'>
                <div className="ImageHolder image2">
                </div>
                
                <div className='Item2'>
                    <h4>bathroom  renovations</h4>
                    <p>
                        The bathroom certainly adds additional value in the home. 
                        We are here to help design with your layout and choose the right materials all while staying within your budget.
                    </p>
                    <div className='all-span' >
                    <hr></hr>
                    <span >Remodeling</span>
                    <hr></hr>
                    <span>Demolition</span>
                    <hr></hr>
                    <span>Plumbing / Electrical & more</span>
                    <hr></hr>
                    </div> 
                    <div className="contact-us">
                    <Button variant="contained" color="primary">CONTACT US</Button> 
                    </div>
                </div>

            </div>
            <div className='Items'>
                <div className="ImageHolder  image3">
                </div>
                
                <div className='Item2'>
                    <h4>Basement renovations</h4>
                    <p>
                        From start to finish our team can help you throughout the whole basement renovation process. 
                        We will gain an understanding of your true needs, before developing an intuitive, efficient design tailored to your budget.
                    </p>
                    <div className='all-span' >
                    <hr></hr>
                    <span >Finishing</span>
                    <hr></hr>
                    <span>Waterproofing</span>
                    <hr></hr>
                    <span>Soundproofing & more</span>
                    <hr></hr>
                    </div> 
                    <div className="contact-us">
                    <Button variant="contained" color="primary">CONTACT US</Button> 
                    </div>
                </div>

            </div>
        </div>
        

       </section>
       
       </>
       
           
       
    );

    
}
export default Product;