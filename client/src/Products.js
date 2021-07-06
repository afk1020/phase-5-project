import React from 'react'
import ProductsCard from '../components/ProductsCard.js';

const Products = (props) => {
    return(

        <div className="products_Collection">
           {props.productData.map(product => {
            return <ProductsCard
            Product ={product}
            key = {product.id}
            //handleClick = {}
            />
        
        })}
        </div>
          
      )
          
    }

export default Products;