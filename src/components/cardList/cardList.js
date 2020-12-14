import React from "react";
import {connect} from "react-redux"
import {deleteItemFromCard, addToCard, showCardElems, buyAll, deleteAllItemsFromList} from "../../redux/card/card.Action";
import './cardList.css';
import _ from 'lodash';
import './cardList.css';
import { Link, useParams } from "react-router-dom";

class CardList extends React.Component{
	constructor(props){
		super(props);
		this.sortArr = this.sortArr.bind(this)
		this.countNumber = this.countNumber.bind(this)
		this.cardItemList = this.cardItemList.bind(this)
		this.makeTotalItemPrice = this.makeTotalItemPrice.bind(this)
		this.makeTotalPrice = this.makeTotalPrice.bind(this)
		this.buyProduct = this.buyProduct.bind(this)
	}

	sortArr(card){
		let arr = _.uniqBy(card.cardList, 'id' );
		return this.cardItemList(arr, card)
	}
	
	countNumber(card, element){
		let count = 0;
		card.cardList.map(item => {
			if(item.id == element){
				count++;
			}
		})
		return count
	}

	makeTotalItemPrice(card, element, item){
		let num = this.countNumber(card, element);
		let price = item.saleInfo.listPrice.amount;
		let finulProce = num * price;
		finulProce = finulProce.toFixed(2)
		return finulProce
	}

	cardItemList (arr, card) {  
		return(
			arr.map(item => {
				return(
					<div key={item.id} className="card-item">
						<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
						<div className="product-item-info-block">
						<Link  to={{ pathname: `/product/${item.id}`}} params={{id: item.id}} className='linkToCountry'>
							<h4>{item.volumeInfo.title}</h4>
						</Link>
							<div className="count">
								<button onClick={()=> this.props.addToCard(item)} >+</button>
								<p>{this.countNumber(card, item.id)}</p>
								<button  onClick={()=> this.props.deleteItemFromCard(item)} >-</button>
							</div>
							<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
						</div> 
						<div className="item-total-count">
							<p><span className='item-total-count-num'>{ this.makeTotalItemPrice(card, item.id, item)}</span> <span>{item.saleInfo.listPrice.currencyCode}</span></p>
						</div>
						<button className='delete-btn-card' onClick={() =>this.props.deleteAllItemsFromList(item.id)}>X</button>
					</div>
				)
			})
		)
	}

	componentDidMount(){
		this.props.showCardElems()
	}

	makeTotalPrice(){
		if(this.props.card.buy){
			return 0
		}

		let arr = document.querySelectorAll('.item-total-count p .item-total-count-num');
		if (this.props.card.show && arr.length > 0) {
			let count = 0;
			for(let i =  0; i < arr.length; i++){
				let num = +arr[i].textContent;
				count += num
			}
			count = count.toFixed(2);
			return `${count} UAH`
		}
	}

	buyProduct(){
		let a = document.querySelector('.card-list-total-price-text');
		this.props.buyAll(a.textContent)
	}

	render(){
		return (
			<div className='card-list'>
				{this.sortArr(this.props.card)}
				<div className="card-list-total-price">
					<div className="card-list-total-price-block">
						<h2>TOTAL PRICE: </h2>
						<p className='card-list-total-price-text'>{this.makeTotalPrice()}</p>
					</div>
					<button onClick= {()=>this.buyProduct()}>Buy</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({...state}) => {
	return {
		card: state.card
	}
}
export default connect(mapStateToProps, {deleteItemFromCard, addToCard, showCardElems, buyAll, deleteAllItemsFromList})(CardList);