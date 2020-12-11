import React from "react";
import {connect} from "react-redux"

import ProductsList from "../../components/productsList/productsList";

import {getAllProductsRequestAction} from '../../redux/products/productsActions'
import { addToWantedList } from '../../redux/wanted/wantedsActions'

class MainPage extends React.Component {
    componentDidMount() {
        this.props.getAllProductsRequestAction()
    }

    render() {
        
        return (
            <div>
                <div>
                    <ProductsList productsBooks={this.props.products} addToWanted={addToWantedList}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsRequestAction, addToWantedList})(MainPage);