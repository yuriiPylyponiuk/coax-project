import React from "react";
import {connect} from "react-redux"

import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {getAllProductsSuccessAction} from '../../redux/products/productsActions'

class ProductsList extends React.Component {
	constructor(props){
		super(props);
		this.showList = this.showList.bind(this)
	}
	componentDidMount() {
		this.props.getAllProductsSuccessAction()
	}

	showList(){
		if(this.props.products.show ){
			return(
				this.props.products.data.map(item => {
					return(
						<div key={item.id} className="productIttem">
							<h3>{item.title}</h3>
							<img src={item.image} alt=""/>
							<p>{item.description}</p>
							<p>{item.price}</p>
							<button onClick= { () => this.props.addToWanted(item)}>Add to wanted</button>
							<button>Add to card</button>
						</div>
					)
				})
			)
		}
	}

	render() {
		console.log(this.props.products.data)
		return (
			<div>
				{this.showList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsSuccessAction, addToWantedList})(ProductsList);