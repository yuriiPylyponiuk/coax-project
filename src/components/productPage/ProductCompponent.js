import React from 'react';
import {connect} from "react-redux"
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCard} from '../../redux/card/card.Action';
import './productPage.css'

class ProductComponent extends React.Component{
  constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
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
  
  renderItem(){
    let a = this.props.productList.products.data.filter( item => item.id ==this.props.match);
    console.log(a)
    return(
      a.map(item => {
        return(
          <div key={item.id} className="productIttem-page">
            <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
            <div className="product-item-info-block-page">
              <div className="product-info-page">
                <h3>{item.volumeInfo.title}</h3>
                <h2>{item.volumeInfo.authors[0]}</h2>
                <p>{item.volumeInfo.description}</p>
              </div>
              <p><span>{item.saleInfo.listPrice.amount}</span>  <span>{item.saleInfo.listPrice.currencyCode}</span></p>
              <button onClick= { (e) => this.handleList(e, item)}>Add to wanted</button>
              <button onClick= { () => this.props.addToCard(item)}>Add to card</button>
            </div> 
          </div>
        )
      })
    )
  }

  render(){
    return(
      <div className="item-block">
        {this.renderItem()}
      </div>
    )
  }
}

const mapStateToProps = ({...state}) => {
	return {
		productList: state.product
	}
}
export default connect(mapStateToProps, {addToWantedList, addToCard})(ProductComponent);