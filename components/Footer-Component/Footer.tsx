import './Footer.css'
import Logo from '/Eagleslogo.png'
function Footer(){
    return(
       <>
       <div className="footer">
            <h5>&copy; 2024 Alex Home Renovations</h5>
            <span className="separator">•</span>
            <h5>Designed by: Eagles Development Team</h5>
            <img src={Logo} width="30px"/>
        </div>

       
       
       </>
           
       
    );

    
}
export default Footer;