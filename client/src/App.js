import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
//import Header from './Components/Header';
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let productsURL = "http://localhost:3000/products"

class App extends Component{
state = {
  products:[],
  users:[],
    name: "",
    email: "",
    isLogged: false,
    currentUser: {},
    error: "",
}

adminUser = {
  email:"admin@admin.com",
  password:"admin123"
}

handleProducts = (productData) =>{
  this.setState({
    products: productData
  })
}

componentDidMount = () => {
  axios.get(productsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => this.handleProducts(response.data.products))
}

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
        <products
        handleProducts={this.handleProducts}/>
        </Route>
        </Switch>
       </Router>
      );
    }
    }

    export default App;