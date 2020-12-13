import React from "react";
import {connect} from "react-redux"
import './productList.css'
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCard} from '../../redux/card/card.Action'
import {getAllProductsRequestAction, getMoreElems} from '../../redux/products/productsActions';
import { Link, useParams } from "react-router-dom";

class ProductsList extends React.Component {
	constructor(props){
		super(props);
		this.showList = this.showList.bind(this)
		this.handleList = this.handleList.bind(this)
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
			this.props.getAllProductsRequestAction()
	}

	showList(){
		if(this.props.products.show ){
			return(
				this.props.products.data.map(item => {
					return(
						<div key={item.id} className="productIttem">
							<Link  to={{ pathname: `/product/${item.id}`}} params={{id: item.id}} className='linkToCountry'>
								<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
								<div className="product-item-info-block">
									<div className="product-info">
										<h3>{item.volumeInfo.title}</h3>
										<h2>{item.volumeInfo.authors[0]}</h2>
									</div>
									<p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
									<button onClick= { (e) => this.handleList(e, item)}>Add to wanted</button>
									<button onClick= { () => this.props.addToCard(item)}>Add to card</button>
								</div> 
							</Link>
						</div>
					)
				})
			)
		}
	}

	render() {
		return (		
			<div className='productList'>
				{this.showList()}
				<div className="btn">
					<button onClick={() => this.props.getMoreElems(this.props.numberOfElem + 20)}>Load More</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {...state.product}
}

export default connect(mapStateToProps, {addToCard,getAllProductsRequestAction, addToWantedList, getMoreElems})(ProductsList);