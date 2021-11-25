import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {choiceColors, choiceCount} from '../../action/index';
import Data from '../Data'

const mapStateToProps = (state, props) => {
    return { 
         state: state,
         modelisation: props.modelisation,
         ownProps: props 
    };
};


 const mapDispatchToProps = (dispatch) =>{
   return {
    carscolors: (payload)=> dispatch(choiceColors(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
   }
 }
const colorsConnect = ({ modelisation, ownProps, carscolors, choiceCount}) => {

    function choiceImages(){
      for (let key = 1; key <= Object.keys(Data.pictures).length; key++) {
        if (modelisation.name === Data.pictures[key].name && 
          ownProps.couleurs.name === Data.pictures[key].color ) {
            return Data.pictures[key].picturesList
        } 
      }
    }
    async function selectColors(){
      let test = await choiceImages();
      await console.log(test);
      await carscolors({ color: ownProps.couleurs, images: test})
      await choiceCount()
   }

  return(
    <>
      <div className='d-flex align-items-center flex-column justify-content-between'>
        <div className='m-2 text-center' id='colorschoice'>
          <Card.Img
            variant='top'
            src={ownProps.couleurs.picture}
            className='colorsImg'
          />
          <Card.Title className='titlecolors'>{ownProps.couleurs.name}</Card.Title>
          <Card.Text className='titlecolors'>{ownProps.couleurs.price}€</Card.Text>
          <Button variant='light' className='' onClick={e => selectColors(e)}>
            Choisir
          </Button>
        </div>
      </div>

    </>
  )
};
const Colors = connect(mapStateToProps,mapDispatchToProps)(colorsConnect);
export default Colors;