import React from 'react' 
import './service.css' 
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5> 
      <h2>Services </h2> 

      <div className="container services__container"> 
        <article className="service"> 
          <div className="service__head"> 
            <h3> Project Management</h3>
          </div> 

          <ul className="service__list"> 
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Waterfall Methodology</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Agile Methodology</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Strong Leadership Skills</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Excellent Communication Skills</p>
          </li>  
         
         
            
          </ul>
        </article> 


        <article className="service"> 
          <div className="service__head"> 
            <h3> Web Development</h3>
          </div> 

          <ul className="service__list"> 
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Sleek, Modern Designs</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Up-to-date Languages and Frameworks.</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Experience in Team Work.</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Critical Problem Solving .</p>
          </li>      
          </ul> 
          </article>


          <article className="service"> 
          <div className="service__head"> 
            <h3>Passion For Research</h3>
          </div> 

          <ul className="service__list"> 
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Love reading and researching in all topics tech.</p>
          </li>  
          <li>  
            <BiCheck className='service__list-icon'/> 
            <p>Primarily interested in Artifical Intelligence Research.</p>
          </li>  
          
         
            
          </ul>
        </article>
         
            
         
        
      </div>
    </section>
  )
}

export default Service