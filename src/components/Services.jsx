import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img3 from "../assets/3.jpg" 
import img4 from "../assets/4.jpg"
const Services = () => {
  return (
    <div className="service">
        <Carousel
        showThumbs={false}

        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows ={false}
        autoPlay >

    
            <div>
                <img src={img3} alt="" />
                <p  className='legend' > Full Stack</p>
            </div>
            <div>
                <img src={img4} alt="" />
                <p className='legend'>Peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
