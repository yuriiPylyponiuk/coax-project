import React from "react";
import ProductComponent from "../../components/productPage/ProductCompponent";

const ProductPage = (props) => {
    return (
        <div>
            <ProductComponent match = {props.match.params.id}/>
        </div>
    );
};

export default ProductPage;