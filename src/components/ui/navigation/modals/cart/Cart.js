import React from 'react';
import classes from './Cart.module.css';
import logo from '../../../../../assets/img/logo.png';

const cart = ( props ) => {

    let numOfKeys = 0;
    Object.keys(sessionStorage).forEach(key => { 
        if(key) numOfKeys++;
        if(key === 'React::DevTools::lastSelection') numOfKeys--;
    })

    let items = [];

    if(numOfKeys > 0) Object.keys(sessionStorage).forEach(key => {
        if(key !== 'React::DevTools::lastSelection') {
            items.push(JSON.parse(sessionStorage.getItem(key)));
        }   
    });

    console.log(items)

    const cart = numOfKeys === 0 ? 
        <div>
            <ul className={classes.Meals}>
                <li>
                    Your Cart is Empty
                </li>
            </ul>

            <p style={ props.user ? {display: 'none'} : {display: 'block'}}>
                Add one of your favorite meals to your cart and enjoy the bold
                flavors of Lotus: Asian House today!
            </p>

            <button style={ props.user ? {display: 'none'} : {display: 'block'}}>
                Order Now
            </button>
        </div>
         :  <div className={classes.Test}>
                {items.map(item => (
                    <div></div>
                ))}
            </div>


    return (
        <div className={classes.Login}>

            <div className={classes.TopLine}>
                <img src={logo} alt='Enjoy Lotus for your next meal today!' />

                <h3>Cart</h3>

                <svg onClick={props.closeModal} width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 35.2C0.666687 16.2137 15.5667 0.866669 34 0.866669C52.4334 0.866669 67.3334 16.2137 67.3334 35.2C67.3334 54.1863 52.4334 69.5333 34 69.5333C15.5667 69.5333 0.666687 54.1863 0.666687 35.2ZM34 30.359L42.6334 21.4667L47.3334 26.3077L38.7 35.2L47.3334 44.0923L42.6334 48.9333L34 40.041L25.3667 48.9333L20.6667 44.0923L29.3 35.2L20.6667 26.3077L25.3667 21.4667L34 30.359Z" fill="#65522E"/>
                </svg>
            </div>


            <div className={classes.Form}>

                {cart}

            </div>
            
        </div>

    )
}

export default cart;