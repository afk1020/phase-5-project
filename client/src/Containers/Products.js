import React, {Component} from 'react';
import ProductsCard from '../Components/ProductsCard'

class Products extends Component {
    render() {
      let card = this.props.productData.map(product => (
          <ProductsCard
            product ={product}
            key = {product.id}
            handleClick = {this.props.addProduct}
      />))

      return(
        <div className="ui four column grid">
        <div className="row">
           {card}
        </div>
      </div>
    );
  }
}

export default Products;