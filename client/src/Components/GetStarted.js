import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
//import './GetStarted.css';



function GetStarted() {

//   const videoplayer = () => {
//     <Video />
//   }
  return (
    <div className='hero-container'>
      <h1>OneStopCoffee</h1>
      <p>Getting your coffee fix!</p>
      <div className='hero-btns'>
      
        <Link to='/LoginForm'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
            Login
        </Button>
        </Link>
        <Link to='/SignUp'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
            SignUp
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;