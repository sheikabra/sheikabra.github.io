import React from 'react' 
import {BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs' 
import {BsInstagram} from 'react-icons/bs' 

const HeaderSocials = () => {
  return (
    <div className='header__socials'>  
        <a href="https://www.linkedin.com/in/abrahim-hussain-bb860a237/" target='_blank'><BsLinkedin/></a>  
        <a href="https://github.com/sheikabra" target='_blank'><BsGithub/></a>  
        <a href="https://www.instagram.com/sheikh.shaack/" target='_blank'><BsInstagram/></a> 
       

    </div>
  )
}

export default HeaderSocials