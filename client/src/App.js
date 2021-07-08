import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
//import Header from './Components/Header';
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Products from './Products';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let productsURL = "/products"

class App extends Component{
state = {
  products:[],
  total: 0,
  users:[],
    name: "",
    email: "",
    isLogged: false,
    currentUser: {},
    error: "",
}

// adminUser = {
//   email:"admin@admin.com",
//   password:"admin123"
// }


  // console.log(products)

componentDidMount () {
  fetch("/products")
			   .then((r) => r.json())
			   .then((data) => this.setState({products: data}))
}
  
// componentDidMount() {
//   let cart = localStorage.getItem('cart');
//   if (!cart) return; 
//   getCartProducts(cart).then((products) => {
//     let total = 0;
//     for (var i = 0; i < products.length; i++) {
//       total += products[i].price * products[i].qty;
//     }
//     this.setState({ products, total });
//     });
// }

// removeFromCart = (product) => {
//   let products = this.state.products.filter((item) => item.id !== product.id);
//   let cart = JSON.parse(localStorage.getItem('cart'));
//   delete cart[product.id.toString()];
//   localStorage.setItem('cart', JSON.stringify(cart));
//   let total = this.state.total - (product.qty * product.price) 
//   this.setState({products, total});
// }

// clearCart = () => {
//   localStorage.removeItem('cart');
//   this.setState({products: []});
// }



// Login = details => {
 
//   if (details.email == this.adminUser.email && details.password == this.adminUser.password){
//      console.log("Logged in");
//      this.setState({
//        name: details.name, 
//        isLogged: true,
//        email: details.email
//      });
//    } else {
//      alert("Details do not match!");
//      this.setState({error: "Details do not match!"})
//    }
//  }
//  Logout = () =>{
//   this.setState({ name: "", email: "", isLogged: false});
//   console.log("Logout");
// }

  


    render(){
      return (
        <Router>
     
       <Footer />
       <Switch>
        <Route exact path="/">
        <Home />
        </Route>
  
        <Route path="/signup">
        <SignUp
        />
        </Route>
        <Route path="/loginform">
        <LoginForm
        />
        </Route>
        <Route path="/products">
        <Products
        productData={this.state.products}/>
        </Route>
        </Switch>
       </Router>
      );
    }
    }

    export default App;