import React from 'react';
import { Link } from 'react-router-dom';
import { getCartProducts } from '../repository';
import CartItem from './CartItem';

    export default class Cart extends React.Component {
      constructor(props) {
        

      render() {
        const { products, total } =  this.state;
        return (
          <div className=" container">
            <h3 className="card-title">Cart</h3><hr
            {
              products.map((product, index) => 
                <CartItem product={product} remove={this.removeFromCart} key={index}/>)
            } <hr/>
            { products.length ? 
              <div><h4>
                <small>Total Amount: </small>
                <span className="float-right text-primary">${total}</span>
              </h4><hr/></div>: ''}
            { !products.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
            <Link to="/checkout">
                <button className="btn btn-success float-right">Checkout</button></Link>
            <button className="btn btn-danger float-right" onClick={this.clearCart} 
                style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/>
          </div>
        );
      }
    }