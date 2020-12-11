import React from "react";
import {connect} from "react-redux"
import ProductsItems from "../productsItems/productsItems";
import {delFromWantedList} from "../../redux/wanted/wantedsActions";

const WontedList = () => {
    return (
        <div>
            <h1>Hello WontedList</h1>
        </div>
    );
}
const mapStateToProps = ({...state}) => {
    return {
        wantedItem: state.wanted
    }
}
export default connect(mapStateToProps, {delFromWantedList})(WontedList);