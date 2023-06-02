import React from 'react'
import './header.css' 
import CTA from './CTA' 
import ME from '../../assets/abrahimSelfie.png' 
import HeaderSocials from './HeaderSocials' 

const Header = () => {
  return (
    <header> 
      <div className= "container header__container">  
        <h5>Hello I'm</h5> 
        <h2> Abrahim Hussain</h2> 
        <h5 className="text-light">FrontEnd Developer </h5>
        <CTA/>  
        <HeaderSocials/>

       <div className="me"> 
         <img src={ME} alt="me"/>      
        </div> 

      <a href='#contact' className='scroll_down'>Scroll Down</a>
     </div>
      
    </header>
  )
} 
export default Header
