import React from "react";
import {connect} from "react-redux"
import {deleteItemFromCard} from "../../redux/card/card.Action";
import './cardList.css';
import _ from 'lodash';
import './cardList.css'


const sortArr = (card) => {
	let arr = _.uniqBy(card.cardList, 'id' );
	return cardItemList(arr, card)
}

const countNumber = (card, element) => {
	let count = 0;
	card.cardList.map(item => {
		if(item.id == element){
			count++;
		}
	})
	return count
}

const cardItemList = (arr, card) =>{  
	return(
		arr.map(item => {
			return(
				<div key={item.id} className="card-item">
					<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
					<div className="product-item-info-block">
						<h5>{item.volumeInfo.title}</h5>
						<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
						<div className="count">
							<a href="">+</a>
							<p>{countNumber(card, item.id)}</p>
							<a href="">-</a>
						</div>
					</div> 
				</div>
			)
		})
	)
}


const CardList = (props) => {
	return (
		<div className='card-list'>
			{sortArr(props.card)}
		</div>
	);
}

const mapStateToProps = ({...state}) => {
	return {
		card: state.card
	}
}
export default connect(mapStateToProps, {deleteItemFromCard})(CardList);