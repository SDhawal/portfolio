import './index.css'
import NavBar from './nav_bar';
import Footer from "./Footer";
import { SocialIcon } from 'react-social-icons';
import React from 'react';

function Contact(){
    return(
        <div>
            <NavBar/>
            <div className='contact-parent'>
               
               <div className='contact-left-card'>
               <h1>Connect With Me</h1>
               <div className='icon-container'>
                {/* buttons */}
                <SocialIcon url='https://www.linkedin.com/in/dhawalsharma26/' className='icons' network="linkedin" bgColor="#dfcece" style={{height: 50,width: 50}} />
                <SocialIcon url='https://github.com/SDhawal' className='icons' network="github" bgColor="#dfcece"  />
                <SocialIcon url='https://twitter.com/DhawalS2610' className='icons' network="twitter" bgColor="#dfcece"  />
                <SocialIcon url='https://medium.com/@dhawalsharmazz' className='icons' network="medium" bgColor="#dfcece"  />
                <SocialIcon url='U033NN0PK4N' className='icons' network="slack" bgColor="#dfcece"  />
               </div>
               </div>
               <div className='contact-right-card'>
                <h1>Get In Touch</h1>
                {/* forms */}
                <form method="post" action="https://formspree.io/f/mpznwjdn">
                <input name="name" type="text" class="feedback-input" placeholder="Name" required />   
                <input name="email" type="text" class="feedback-input" placeholder="Email" required />
                <textarea name="text" class="feedback-input" placeholder="Comment" required></textarea>
                <input type="submit" value="SUBMIT"/>
                </form>
               </div>

            </div>
            <Footer/>
        </div>
    )
};

export default Contact;