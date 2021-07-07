import React, { Component } from 'react';
import './ProductsCard.css';
import { Link } from 'react-router-dom'

class ProductsCard extends Component {
  
  productsArray = [ 
    "https://sc04.alicdn.com/kf/UTB8wkWhBGrFXKJk43Ovq6ybnpXas.jpg",
    "https://1kczi73sfs1d3t3z4i1ys5mf-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg",
    "https://sc04.alicdn.com/kf/UTB884cHm22JXKJkSanrq6y3lVXaI.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51EGHd7Io-L._AC_SY580_.jpg",
    

  ]
    render() {
    return (
      <div className="products-card" key={this.props.product.id}>
        <div className="image-container">
        <img src={`${this.productsArray[Math.floor(Math.random()*this.productsArray.length)]}`}></img> 
        
      </div>
      <div className="card-content">
      <div className="card-title">
        <h4>{this.props.product.name}</h4>
      </div>
      <div className="card-body">
      <p><span style={{fontWeight: "bold"}}>price: </span> {this.props.product.price} </p>
        <p><span style={{fontWeight: "bold"}}>description: </span> {this.props.product.description} </p>
        <p><span style={{fontWeight: "bold"}}>quantity: </span>{this.props.product.quantity} </p>
      </div>
      <div className="btnn" >
      <Link to='/cart'>
          <button>
            <a>
              Add to cart
            </a>
          </button>
        </Link>
      </div>
      </div>
      </div>
    );
  }

}

export default ProductsCard;