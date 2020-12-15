import React from "react";
import {connect} from "react-redux"
import './productList.css'
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCard} from '../../redux/card/card.Action'
import {getAllProductsRequestAction, getMoreElems, fiterProductList, searchInList} from '../../redux/products/productsActions';
import { Link, useParams } from "react-router-dom";
import _ from 'lodash';

class ProductsList extends React.Component {
	constructor(props){
		super(props);
		this.showList = this.showList.bind(this)
		this.handleList = this.handleList.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.searchSmth = this.searchSmth.bind(this)
		// this.loadMore = this.loadMore.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
	}

	handleList(e, item){
		if(e.target.classList != 'disabled'){
			e.target.classList.add('disabled')
			this.props.addToWantedList(item)
		}else{
			e.target.value = 'You alredy add this'
		}
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll, true);
		this.props.getAllProductsRequestAction();
	}
	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(){
		let html = document.querySelector('html');

		if (html.scrollTop + html.clientHeight >= html.scrollHeight) {
			let number = this.props.numberOfElem;
			number += 12;
			this.props.getMoreElems(number);
		}
	}

	showList(){
		if(this.props.products.show ){
			return(
				this.props.products.data.map((item, index) => {
					if( index < this.props.numberOfElem){
						let strName= item.volumeInfo.title;
						strName = strName.slice(0, 15);
						return(
							<div key={item.id} className="productIttem">
								<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
								<div className="product-item-info-block">
									<div className="product-info">
									<Link  to={{ pathname: `/product/${item.id}`}} params={{id: item.id}} className='linkToCountry'>
										<h2>{strName}</h2>
										<h3>{item.volumeInfo.authors[0]}</h3>
									</Link>
									</div>
									<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
									<button onClick= { (e) => this.handleList(e, item)}>Add to wanted</button>
									<button onClick= { () => this.props.addToCard(item)}>Add to card</button>
								</div> 
							</div>
						)
					}
				})
			)
		}
	}
	
	handleChange(e){
		if(this.props.products.show ){
			let value = e.target.value;
			let colection = this.props.products.data.slice(0);
			switch(value) {
				case "A-Z":  
					colection.sort(function(a, b) {
						var nameA = a.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
						var nameB = b.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
						if (nameA < nameB) {
							return -1;
						}
						if (nameA > nameB) {
							return 1;
						}
						return 0;
					});
					
					this.props.fiterProductList(colection)
					break;
				case "Low-Hight": 
					colection.sort(function (a, b) {
						return a.saleInfo.listPrice.amount - b.saleInfo.listPrice.amount;
					});
					this.props.fiterProductList(colection)
					break;
				case "Hight-Low":  
					colection.sort(function (a, b) {
						return  b.saleInfo.listPrice.amount - a.saleInfo.listPrice.amount;
					});
					this.props.fiterProductList(colection)
					break;
				default:
					this.props.getAllProductsRequestAction()
			}
		}
	}

	searchSmth(e){
		e.preventDefault();
		let str = e.target[0].value;
		let newArr =  this.props.products.data.filter( item => {
			if(item.volumeInfo.title.indexOf(str)>=0){
				return item
			}
		})
		if(newArr.length > 0){
			this.props.searchInList(newArr) 
		}else{
			alert('Nothing')
			this.props.getAllProductsRequestAction()
		}
	}

	// loadMore(){
	// 	let number = this.props.numberOfElem;
	// 	number += 12;
	// 	this.props.getMoreElems(number);
	// }

	render() {
		return (		
			<div className="product-container" >
				<div className="product-list-fiter-tools">
					<label>
						Chose your filter
						<select onChange={this.handleChange}>
							<option value="select">No select</option>
							<option value="A-Z">A-Z</option>
							<option value="Low-Hight">Price: Low-Hight</option>
							<option value="Hight-Low">Price: Hight-Low</option>
						</select>
					</label>
					<form onSubmit={(e) => this.searchSmth(e)}>
						<input type="text"/>
						<button type='submit'>Search</button>
					</form>
				</div>
				<div className='productList'>
					{this.showList()}
				</div>
				<div className="product-container-btn">
					{/* <button onClick={() => this.loadMore()}>Load More</button> */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {...state.product}
}

export default connect(mapStateToProps, {addToCard,getAllProductsRequestAction, addToWantedList, getMoreElems, fiterProductList, searchInList})(ProductsList);