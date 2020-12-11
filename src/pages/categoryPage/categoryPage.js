import React from "react";
import {connect} from "react-redux"
import CategoryList from "../../components/categoruList/categoryList";
import {getAllProductsRequestAction, getCategory} from '../../redux/products/productsActions'
import {addToWantedList} from '../../redux/wanted/wantedsActions'

class CategoryPage extends React.Component {
    componentDidMount() {
        this.props.getAllProductsRequestAction()
    }

    render() {
        const {addToWantedList} = this.props
        if (this.props.processing) {
            return <h2>Loading ....</h2>
        }
        return (
            <div>
                <div>
                    <CategoryList products={this.props.allProducts} toggleWantedList={addToWantedList}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsRequestAction, addToWantedList, getCategory})(CategoryPage);