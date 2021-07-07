import React from 'react';
import ProductsCard from './Components/ProductsCard'

const Products = (props) => {
    return(

        <div className="products_Collection">
           {props.productData.map(product => {
            return <ProductsCard
            product ={product}
            key = {product.id}
            //handleClick = {}
            />
        
        })}
        </div>
          
      )
          
    }

export default Products;