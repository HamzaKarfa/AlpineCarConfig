import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import { choiceEquipements, deleteEquipements,choiceCount } from "../../action/index";
import Card from 'react-bootstrap/Card';


const mapStateToProps = (state, props) => {
  return {
    state: state,
    ownProps: props,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    equipementschoice: (payload) => dispatch(choiceEquipements(payload)),
    deletechoice: (payload) => dispatch(deleteEquipements(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
  };
};
const EquipementsCardConnect = ({state, ownProps, equipementschoice, deletechoice,choiceCount }) => {

  function handleClick(e){
    e.preventDefault();
    if (document.querySelectorAll('[id="'+e.target.id+'"]').length > 1) {
      document.querySelectorAll('[id="'+e.target.id+'"]').forEach((element)=>{
        element.classList.remove('active')
      })
    }
    e.target.classList.toggle('active')
    if (e.target.classList.contains('active')) {
      equipementschoice({equipement: ownProps.equipement, group:ownProps.group});
      choiceCount()
    } else {
      deletechoice({equipement: ownProps.equipement, group:ownProps.group})
      choiceCount()
    }
  }

  return (
  
    <div className='d-flex align-items-center flex-column justify-content-between'>
      <div className='m-2 text-center' id='colorschoice'>
        <Card.Img variant='top' src={ownProps.img} className='colorsImg' />
        <Card.Title className='titlecolors'>{ownProps.nom}</Card.Title>
        <Card.Text className='titlecolors'>{ownProps.prix}€</Card.Text>
        <Button
          variant='light'
          id={ownProps.equipement.id}
          className={ownProps.prix == 0 ? 'active btnEquipement' : 'btnEquipement'}
          onClick={e => handleClick(e)}
        >
          Ajouter
        </Button>
      </div>
    </div>

 );

};

const EquipementsCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipementsCardConnect);
export default EquipementsCard;
