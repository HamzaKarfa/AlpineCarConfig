import React from 'react';
import { connect } from 'react-redux';
import CarsCard from './CarsCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';

const mapStateToProps = state => {
    return { 
      CarsList: Data.cars,
  
    };
  };


  const CarsListConnect = ({ CarsList}) => {
    const displayCars = () => {

      return Object.keys(CarsList).map(key => {
          return <CarsCard key={key} Cars={CarsList[key]}/>

      });
    }


      return (
        <div className='d-flex justify-content-evenly'>
            {displayCars() }
            <Link to="/colors" className="col-sm-6 buttonchoice text-white h4 p-3">
                À suivre / Couleurs ➙
            </Link>
        </div>
      );
    }


const CarsList= connect(mapStateToProps)(CarsListConnect)
export default CarsList;
