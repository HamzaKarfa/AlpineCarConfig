import React from "react";
import { connect } from "react-redux";
import {Button, Card} from "react-bootstrap";
import { choiceJantes,choiceCount } from "../../action/index";

const mapStateToProps = (state, props) => {

  return {
    state: state,
    ownProps: props,
  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    janteschoice: (payload) => dispatch(choiceJantes(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
  };
};

const JantesCardConnect = ({ ownProps, janteschoice,Data, choiceCount }) => {

  function selectJantes() {
    Object.keys(Data.pictures).map((key)=>{
      if (ownProps.Modelisation.name === Data.pictures[key].name && 
        ownProps.Modelisation.couleurs.name === Data.pictures[key].color && ownProps.Jantes.name===Data.pictures[key].jante) {
          janteschoice( {jantes : ownProps.Jantes, images: Data.pictures[key].picturesList});
          choiceCount()
          return true;
      }
    })
  }

  function Jantes() {
    if (ownProps.Modelisation.name === ownProps.Jantes.option) {
      return (
        <div className='d-flex align-items-center flex-column justify-content-between'>
          <div className='m-2 text-center' id='colorschoice'>
            <Card.Img
              variant='top'
              src={ownProps.Jantes.picture}
              className='colorsImg'
            />
            <Card.Title className='titlecolors'>{ownProps.Jantes.name}</Card.Title>
            <Card.Text className='titlecolors'>{ownProps.Jantes.price}€</Card.Text>
            <Button variant='light' className='' onClick={e => selectJantes(e)}>
              Choisir
            </Button>
          </div>
        </div>
      )
    } else {
      return ''
    }

  }

  return Jantes();
};

const JantesCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(JantesCardConnect);
export default JantesCard;
