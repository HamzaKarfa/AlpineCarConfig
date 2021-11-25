import React from "react";
import { connect } from "react-redux";
import {Button, Card} from 'react-bootstrap'
import {choiceScellerie, choiceCount} from '../../action/index'


const mapStateToProps = (state, props) => {

  return { 

       state: state,
       ownProps: props };
};
const mapDispatchToProps = (dispatch) =>{
 return {
   scelleriechoice: (payload)=> dispatch(choiceScellerie(payload)),
   choiceCount: ()=> dispatch(choiceCount()),
 }
}
const ScellerieCardConnect = ({ ownProps, scelleriechoice, choiceCount }) => {

function selectScellerie(){
    scelleriechoice({scellerie :ownProps.scellerie})
    choiceCount()
}
function Scellerie() {
 
  if (ownProps.Modelisation ===ownProps.scellerie.option) {
    return (
      <div className='d-flex align-items-center flex-column justify-content-between'>
        <div className='m-2 text-center' id='colorschoice'>
          <Card.Img
            variant='top'
            src={ownProps.scellerie.picture}
            className='colorsImg'
          />
          <Card.Title className='titlecolors'>{ownProps.scellerie.name}</Card.Title>
          <Card.Text className='titlecolors'>{ownProps.scellerie.price}€</Card.Text>
          <Button variant='light' className='' onClick={e => selectScellerie(e)}>
            Choisir
          </Button>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

return Scellerie();
};

const ScellerieCard = connect(mapStateToProps,mapDispatchToProps)(ScellerieCardConnect);
export default ScellerieCard;