import React from "react";
import {connect} from "react-redux"

import ProductsList from "../../components/productsList/productsList";

import {getAllProductsRequestAction} from '../../redux/products/productsActions'
class MainPage extends React.Component {
    render() {
        
        return (
            <div>
                <ProductsList productsBooks={this.props.products} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsRequestAction})(MainPage);