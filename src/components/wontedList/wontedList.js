import React from "react";
import {connect} from "react-redux"
import ProductsItems from "../productsItems/productsItems";
import {delFromWantedList} from "../../redux/wanted/wantedsActions";
import _ from 'lodash';

const wontedListItems = (arr, delFromWantedList) => {	
	let newArr = _.uniqBy(arr, 'id' )
	return(
		newArr.map( item => {
			return(
				<div key={item.id} className="wanted-item">
					<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
						<div className="product-item-info-block">
							<h3>{item.volumeInfo.title}</h3>
							<h2>{item.volumeInfo.authors[0]}</h2>
							<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
							<button>Add to card</button>
							<button onClick= { (e) => delFromWantedList(item.id)}>Remove</button>
						</div> 
				</div>
			)
		})
	)
}
const WontedList = (props) => {
	return (
		<div>
			{wontedListItems(props.wantedItem.wanted, props.delFromWantedList)}
		</div>
	);
}

const mapStateToProps = ({...state}) => {
	return {
		wantedItem: state.wanted
	}
}
export default connect(mapStateToProps, {delFromWantedList})(WontedList);