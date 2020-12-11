import React from "react";
import {connect} from "react-redux";
import {getAllProductsSuccessAction, getCategory} from '../../redux/products/productsActions'

class CategoryList extends React.Component {
  constructor(props){
    super(props);
    this.setCategory = this.setCategory.bind(this);
  }
  componentDidMount(){
    this.props.getAllProductsSuccessAction()
  }


  setCategory(e){
    let a = e.target.innerHTML
    this.props.getCategory(a)
    console.log(e.target.innerHTML)
  }

  render(){
    return (
      <div>
        <div className="tools">
          <h1>CategoryList</h1>
          <button onClick={this.setCategory}>men clothing</button>
          <button onClick={this.setCategory}>jewelery</button>
          <button onClick={this.setCategory}>electronics</button>
          <button onClick={this.setCategory}>women clothing</button>
        </div>
        <div className="categoru-list">
          { this.props.products.category && 
            <div>
              {this.props.products.data.map(item => {
                if(item.category == this.props.products.category){
                  return(
                    <div>
                      <h3>{item.title}</h3>
                      <img src={item.image} alt=""/>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>
                  )
                }
              })}    
           </div>
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsSuccessAction, getCategory})(CategoryList);