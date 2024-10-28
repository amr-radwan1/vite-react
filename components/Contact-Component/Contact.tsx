import './Contact.css'
import { TextField, Button } from '@mui/material';


function Contact(){
    return(
       
       
        <div className="Contact-Container">
            <div className="Contact-Section">
                <div className="Contact-Content">
                    <h3>Alex Home Renovations</h3>
                    <h1>Contact Us Now!</h1>

                    <div>
                        <span className="material-icons">email</span>
                        <h4>OUR EMAIL</h4>
                        <p>info@alexrenovations.com</p>
                    </div>

                    <div>
                        <span className="material-icons">map</span>
                        <h4>Address</h4>
                        <p>1234, ABC, Brampton,Ontario, L6E 4X9,Canada</p>
                    </div>

                    <div>
                        <span className="material-icons">phone</span>
                        <h4>Phone Number</h4>
                        <p>419-999-0241</p>
                    </div>

                </div>
                <div className="bg-stone-800 Contact-Form mt-20 border border-solid border-white p-2 lg:mt-0 lg:-translate-y-1/4">
                    <form  name="message-form" className="white   bg-white grid gap-y-4 py-10 px-5 text-xl lg:gap-y-7">
                    <h1 className='text-stone-800 font-bold lg:text-3xl'>SEND A MESSAGE</h1>
                    <TextField id="name" label="YOUR NAME" variant="standard" />
                    <TextField id="email" label="EMAIL" variant="standard" />
                    <TextField id="number" label="PHONE NUMBER" variant="standard" />
                    <TextField id="message" label="ENTER YOUR MESSAGE" variant="standard" 
                    multiline rows={5} />
                    <Button
                    variant="contained"
                    sx={{
                        height: { xs: '60px', sm: '75px', md: '90px'},
                        width: { xs: '150px', sm: '180px', md: '220px' },
                        borderRadius: '5px',
                        backgroundColor: 'rgba(221, 44, 0, 0.8)',
                        color: 'white',
                        fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.4s ease',
                        justifySelf:"center",
                        '&:hover': {
                        backgroundColor: 'rgba(221, 44, 0, 0.6)'
                        
                        },
                    }}
                    >
                    CONTACT US
                    </Button>
                  
                    </form>
                </div>

            
            
          

            </div>

        </div>
      
       
           
       
    );

    
}
export default Contact;