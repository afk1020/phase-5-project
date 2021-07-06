import React, { Component } from 'react';
import './ProductsCard.css';
import { Link } from 'react-router-dom'

class ProductsCard extends Component {
  
  productsArray = [ 
    "https://st.depositphotos.com/1594308/3290/i/950/depositphotos_32904189-stock-photo-pretty-girl.jpg",
    "https://st.depositphotos.com/1937573/2311/i/950/depositphotos_23115590-stock-photo-young-smiling-girl-dressed-in.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oGSUfexvS4Uk7QKIfYm-1H03t7EgFjnb7w&usqp=CAU",
    "https://static9.depositphotos.com/1049680/1209/i/950/depositphotos_12095068-stock-photo-woman-holding-a-coconut.jpg",
    

  ]
    render() {
    return (
      <div className="products-card" key={this.props.product.id}>
        <div className="image-container">
        <img src={`${this.productsArray[Math.floor(Math.random()*this.productArray.length)]}`}></img>
      </div>
      <div className="card-content">
      <div className="card-title">
        <h4>{this.props.product.name}</h4>
      </div>
      <div className="card-body">
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

        <button style={{marginLeft: "10px", marginTop: "10px"}} onClick={()=>this.props.handleClick(this.props.product)}>
        <a>Favorite ⭐️ </a>
        </button>

      </div>
      </div>
      </div>
    );
  }

}

export default AuPairCard;