import React from 'react' 
import './contact.css';  
import {MdOutlineEmail} from 'react-icons/md' 
import { useRef } from 'react'; 
import emailjs from 'emailjs-com'

const Contact = () => { 
 

  return (
    <section id='contact'>
      <h5>Get in Touch</h5> 
      <h2> Contact Me </h2> 
      
      <div className='container contact__container'> 
        <div className='contact__options'> 
          <article className='contact__option'>   
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email </h4> 
          <h5> sheikabra@gmail.com</h5> 
          <a href='mailto:sheikabra@gmail.com'> Send a Message</a>

          </article>    
        
      </div> 
    </div>
    </section> 
  )
}

export default Contact; 