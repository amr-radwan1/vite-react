//import {useState} from 'react'
import './About.css'
import Button from "@mui/material/Button";
function AboutSection(){
    return(<>
    
    <section id="AboutUs">
        <div className="AboutUs-Info">
            <h1>ABOUT US</h1>
                <p>
                    At<strong> Alex Renovations</strong>, we take pride in offering top-tier contracting services.
                    Our mission is to enhance the value of your home while infusing passion into every project we undertake, providing tailored solutions for all your renovation needs.
                </p>
                <p>
                    You can count on our team for clear communication, unwavering commitment, and consistent quality throughout your project.
                    We strive to fully understand your vision and expectations, ensuring that everything is completed on time and within budget.
                </p>
                <p>
                    Reach out to us today, and let us deliver cost-effective, professional contracting services—no matter the size or nature of your construction project. 
                    We’re here to help you transform your space into something extraordinary! 
                </p>
        </div>

        <div className="AboutImg">
            <img src="https://sensodesign.ca/wp-content/uploads/2024/06/Modern-kitchen-renovation-in-Toronto.jpg" width="510px"></img>
        <Button variant="contained">VIEW GALLERY &#8594;</Button>
        </div>

        
    </section>
    <div className="final-row">
                <div className='column column-one'>
                    <div>
                    <h4>Home Renovation</h4>
                    <h4>Home Restoration</h4>
                    <h4>Home Finishing</h4>
                    <h4>Bathroom Renovation</h4>
                    <h4>Basement Renovation</h4>
                    </div>
                
            </div>
            <div className='column column-two'>
                <div>
                <h4>Basement Finishing</h4>
                <h4>Doors and Windows</h4>
                <h4>Small Renovations</h4>
                <h4>Drywall and Plastering</h4>
                <h4>Remodeling</h4>

                </div>
                
            </div>
            <div className='column column-three'>
                <div>
                <h4>Leaky Basement</h4>
                <h4>Waterproofing</h4>
                <h4>House Addition</h4>
                <h4>Floor Addition</h4>
                <h4>Decks and Fences</h4>
                </div>
               
            </div>

                    
    </div>
    
    </>)
}
export default AboutSection;