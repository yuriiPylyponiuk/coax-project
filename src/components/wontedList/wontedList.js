import React from "react";
import {connect} from "react-redux"
import {addToCard} from "../../redux/card/card.Action";
import {delFromWantedList, searchItemInWanted} from "../../redux/wanted/wantedsActions";
import _ from 'lodash';
import { Link, useParams } from "react-router-dom";
import './wonted.css'

const wontedListItems = (arr, delFromWantedList, addToCard) => {	
	let newArr = _.uniqBy(arr, 'id' )
	return(
		newArr.map( item => {
			return(
				<div key={item.id} className="wanted-item">
					<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
						<div className="product-item-info-block">
							<Link  to={{ pathname: `/product/${item.id}`}} params={{id: item.id}} className='linkToCountry'>
								<h2>{item.volumeInfo.title}</h2>
								<h3>{item.volumeInfo.authors[0]}</h3>
							</Link>
							<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
							<button onClick= { (e) => addToCard(item)}>Add to card</button>
							<button onClick= { (e) => delFromWantedList(item.id)}>Remove</button>
						</div> 
				</div>
			)
		})
	)
}
const searchSmth = (e, wanted,reset, searchItemInWanted) => {
	e.preventDefault();
	let str = e.target[0].value;
	let newArr =  wanted.filter( item => {
		let a= str.toUpperCase();
		let b = item.volumeInfo.title.toUpperCase();
		if(b.indexOf(a)>=0){
			return item
		}
	})
	if(newArr.length > 0){
		searchItemInWanted(newArr) 
	}else{
		alert('Nothing')
		searchItemInWanted(reset) 
	}
}
const WontedList = (props) => {
	return (
		<div className='wanted-block'>
			<form onSubmit={(e) => searchSmth(e, props.wantedItem.wanted, props.wantedItem.reset, props.searchItemInWanted)}>
						<input type="text"/>
						<button type='submit'>Search</button>
			</form>
			{wontedListItems(props.wantedItem.wanted, props.delFromWantedList, props.addToCard)}
		</div>
	);
}

const mapStateToProps = ({...state}) => {
	return {
		wantedItem: state.wanted
	}
}
export default connect(mapStateToProps, {delFromWantedList, addToCard, searchItemInWanted})(WontedList);