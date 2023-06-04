import React from "react";  
import './about.css';  
import ME from '../../assets/about-me.jpg';  
import {FaAward} from 'react-icons/fa';  
import {FiUsers} from 'react-icons/fi';   
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => { 
  return(
    <section id='about'>
      <h5>Get to Know</h5> 
      <h2>About Me</h2> 

      <div className="container about__container">  
        <div className="about__me">  
          <div className="about__me-image">  
          <img src={ME} alt= 'About Image'/>
            
          </div>
      
        </div>    

        <div className="container about__content">  
      <div className="about__cards">  
        <article className="about__card">  
          <FaAward className="about__icon"/>
          <h5> Experience</h5> 
          <small> 1 Year Working</small>
        </article> 
        <article className="about__card">  
          <FiUsers className="about__icon"/>
          <h5> Cleints</h5> 
          <small> 1 Client</small>
        </article> 
        <article className="about__card">  
          <VscFolderLibrary className="about__icon"/>
          <h5> Projects</h5> 
          <small> 20+ Completed</small>
        </article>
        
      </div> 

      <p> 
       Hello! My name is Abrahim. I am a Software Developer with experience in Frontend development. I am also interested in Artifical Intelligence, Philosophy, Sociology, Political Theory. I enjoy reading, writing and playing basketball.
      </p> 

      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      
      </div> 
      

      </div>  

      

      
    </section> 
  )
  } 
  export default About; 
