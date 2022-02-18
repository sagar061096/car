import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../../Assets/img/1.jpg'
import img2 from '../../Assets/img/2.jpg'
import img3 from '../../Assets/img/3.jpg'

function Slides1() {
  return(
      <>
          <Carousel fade>
          
          <Carousel.Item>
    <img src={img1} className='img-fluid'   alt=""  /> 
    <div class="container-fluid"></div>
    
  </Carousel.Item>


  <Carousel.Item>
    <img src={img2} className='img-fluid'   alt=""/>
    <div class="container-fluid"></div>

  </Carousel.Item>


  <Carousel.Item>
    <img src={img3} className='img-fluid'  alt="" />
    <div class="container-fluid"></div>
   
  </Carousel.Item>
</Carousel>
      </>
  ) 
  
}

export default Slides1;
