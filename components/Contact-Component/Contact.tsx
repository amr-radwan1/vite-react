import './Contact.css'


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
                <div className="Contact-Form">
                    
                    <form>
                        <h1 className='form-title bebas'>SEND NEW MESSAGE</h1>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your name" required></input>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Send Message</button>
                        </div>  
                    </form>
                </div>

            
            
          

            </div>

        </div>
      
       
           
       
    );

    
}
export default Contact;