import './Header.css'
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton';
import Logo from '/logo.png'
function Header(){
    return(
        <div className="header">
             <img src={Logo}/>
             
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

             <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                    mr: 2,
                    display: 'none',
                    '@media (max-width:768px)': {
                    display: 'block',
                    },
                }}
                    >
                <MenuIcon className="menubutton"></MenuIcon>
                </IconButton>
        </div>
       
           
       
    );

    
}
export default Header;