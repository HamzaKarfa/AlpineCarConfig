import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const mapStateToProps = state => {
  
    return { 
      picturesCarousel:state.picturesCarousel
    };
  };

 
  const CarouselListConnect = ({ picturesCarousel}) => {
    const displayCarousel = () => {
      return Object.keys(picturesCarousel).map(key => { 
          return (
            <Carousel.Item className='h-100'>
            <div className="d-flex h-100 justify-content-center align-items-center">
            <img className="d-block img-fluid carousel-img" src={picturesCarousel[key]} alt="CarImage"/>      
          </div>
          </Carousel.Item>
          )
      });
    }


      return (  
     
           <Carousel className='h-75'>
             {displayCarousel() }
           </Carousel>

      );
    }


const CarouselList= connect(mapStateToProps)(CarouselListConnect)
export default CarouselList;
