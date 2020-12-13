import React from 'react';
import {connect} from "react-redux"
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCard} from '../../redux/card/card.Action'

class ProductComponent extends React.Component{
  render(){
    return(
      <h1>ProductPage</h1>
    )
  }
}

const mapStateToProps = ({...state}) => {
	return {
		wantedItem: state.wanted
	}
}
export default connect(mapStateToProps, {addToWantedList, addToCard})(ProductComponent);