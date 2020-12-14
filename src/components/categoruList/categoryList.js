import React from "react";
import {connect} from "react-redux";
import {getAllProductsSuccessAction, getCategory} from '../../redux/products/productsActions'
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCard} from '../../redux/card/card.Action'
import { Link, useParams } from "react-router-dom";

class CategoryList extends React.Component {
  constructor(props){
    super(props);
    this.showList = this.showList.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  showList(){
		if(this.props.products.show ){
			return(
				this.props.products.data.map((item, index) => {
					if( index < this.props.numberOfElem){
						return(
							<div key={item.id} className="productIttem">
								<img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
								<div className="product-item-info-block">
									<div className="product-info">
									<Link  to={{ pathname: `/product/${item.id}`}} params={{id: item.id}} className='linkToCountry'>
										<h2>{item.volumeInfo.title}</h2>
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

  handleList(e, item){
		if(e.target.classList != 'disabled'){
			e.target.classList.add('disabled')
			this.props.addToWantedList(item)
		}else{
			e.target.value = 'You alredy add this'
		}
  }
  
  render(){
    return (
      <div>
        <div className="tools">
          <h1>CategoryList</h1>
          <button onClick={() => this.props.getCategory({q: 'subject:chemistry'})}>chemistry</button>
          <button onClick={() => this.props.getCategory({q: 'subject:science'})}>science</button>
          <button onClick={() => this.props.getCategory({q: 'subject:Engineering'})}>Engineering</button>
          <button onClick={() => this.props.getCategory({q: 'subject:physics'})}>physics</button>
        </div>
        <div className="productList ">
          {this.showList()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsSuccessAction, getCategory, addToWantedList, addToCard})(CategoryList);