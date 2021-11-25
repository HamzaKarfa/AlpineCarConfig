import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import {choiceVersion, choiceCount} from '../action/index'
import Data from './Data'
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => {

  return { 
       state: state,
       ownProps: props };
};
const mapDispatchToProps = (dispatch) =>{
 return {
   carschoice: (payload)=> dispatch(choiceVersion(payload)),
   choiceCount: ()=> dispatch(choiceCount()),
 }
}
const CarsCardConnect = ({ ownProps, carschoice ,choiceCount }) => {

function selectVersion(){

  let imgChoice;

  for (let key = 1; key <= Object.keys(Data.pictures).length; key++) {

    if (ownProps.Cars.name == Data.pictures[key].name) {
      imgChoice = Data.pictures[key].picturesList
     break 
    }
    
  }

  carschoice({choix :ownProps.Cars, images: imgChoice})
  choiceCount()
}

return(
  <div className='d-flex align-items-center flex-column justify-content-between'>
    <div className='m-2 text-center' id='colorschoice'>
      <Card.Img
        variant='top'
        src={ownProps.Cars.picture}
        className='colorsImg'
      />
      <Card.Title className='titlecolors'>{ownProps.Cars.name}</Card.Title>
      <Card.Text className='titlecolors'>{ownProps.Cars.price}€</Card.Text>
      <Button variant='light' className='' onClick={e => selectVersion(e)}>
        Choisir
      </Button>
    </div>
  </div>
)
};

const CarsCard = connect(mapStateToProps,mapDispatchToProps)(CarsCardConnect);
export default CarsCard;