import React, { Component } from 'react';
import CartMeal from './cartMeal/CartMeal';
import classes from './Cart.module.css';
import logo from '../../../../../assets/img/logo.png';

class Cart extends Component {

    state = {
        total: 0
    }

    removeItemHandler = ( key, id ) => {

        const arr = JSON.parse(sessionStorage.getItem(key));
        arr.forEach((item, index) => {
            if(item.id === id) {
                arr.splice(index, 1);
            }
        })

        // If the SubCart does not have anymore items we delete it from session storage
        if(arr.length === 0) {
            sessionStorage.removeItem(key);
        // If the SubCart still has items we keep it and store the array
        } else {
            sessionStorage.setItem(key, JSON.stringify(arr));
        }


    }

    getTotalPrice = ( ) => {

        let total = 0;
        const taxRate = 0.06;

        Object.keys(sessionStorage).forEach(key => {
            if(key !== 'React::DevTools::lastSelection') {
                const arr = JSON.parse(sessionStorage.getItem(key));
                arr.forEach(item => {
                    total += item.basePrice * item.quantity;
                    if(item.userMealUpgrade) {
                        total += (+item.userMealUpgrade[1] * item.quantity);
                    }
                })
            }
        }) 

        // Return Array: [Subtotal, TaxTotal, TotalWithTaxes]
        this.setState({total: [total.toFixed(2), (total * taxRate).toFixed(2), (((total * 0.06) + total)).toFixed(2)]});

    }

    getInitialTotalPrice = ( ) => {

        let total = 0;
        const taxRate = 0.06;

        Object.keys(sessionStorage).forEach(key => {
            if(key !== 'React::DevTools::lastSelection') {
                const arr = JSON.parse(sessionStorage.getItem(key));
                arr.forEach(item => {
                    total += item.basePrice * item.quantity;
                    if(item.userMealUpgrade) {
                        total += (+item.userMealUpgrade[1] * item.quantity);
                    }
                })
            }
        }) 

        // Return Array: [Subtotal, TaxTotal, TotalWithTaxes]
        return [total.toFixed(2), (total * taxRate).toFixed(2), (((total * 0.06) + total)).toFixed(2)];

    }

    

    

    render() {

        const x = Object.keys(sessionStorage).forEach(key => {
            console.log(key)
            if(key !== 'React::DevTools::lastSelection') {
                console.log(JSON.parse(sessionStorage.getItem(key)));
            }   
        })


        let items = [];
        let num = 0;

        // Gets amount of keys in session storage ( aka - amount of SubCarts )
        Object.keys(sessionStorage).forEach(key => { 
            if(key) num++;
            if(key === 'React::DevTools::lastSelection') num--;
        });

        // Pushes SubCarts into an Array called Items
        if(num > 0) Object.keys(sessionStorage).forEach(key => {
            if(key !== 'React::DevTools::lastSelection') {
                items.push(JSON.parse(sessionStorage.getItem(key)));
            }   
        });

       

        const cart = items.length === 0 ? 
        <div>
            <ul className={classes.Meals}>
                <li>
                    Your Cart is Empty
                </li>
            </ul>

            <p style={ this.props.user ? {display: 'none'} : {display: 'block'}}>
                Add one of your favorite meals to your cart and enjoy the bold
                flavors of Lotus: Asian House today!
            </p>

            <button style={ this.props.user ? {display: 'none'} : {display: 'block'}}>
                Order Now
            </button>
        </div>
         :  <div className={classes.CartContainer}>  
                <div className={classes.PayDiv}>
                    <span className={classes.Summary}>Order Summary</span>  
                </div>
                <div className={classes.PayDiv}>
                    <span className={classes.CartTitleRes}>Subtotal:</span>
                    <span style={{paddingLeft: '10px', paddingBottom: '20px'}}>
                        {this.state.total ? '$' + this.state.total[0] : '$' + this.getInitialTotalPrice()[0]}
                    </span>
                </div>
                <div className={classes.PayDiv}>
                    <span className={classes.CartTitleRes}>Sales Tax:</span>
                    <span style={{paddingLeft: '10px', paddingBottom: '20px'}}>
                        {this.state.total ? '$' + this.state.total[1] : '$' + this.getInitialTotalPrice()[1]}
                    </span>
                </div>
                <div className={classes.PayDiv}>
                    <span className={classes.CartTitleRes}>Total:</span>
                    <span style={{paddingLeft: '10px', paddingBottom: '20px'}}>
                        {this.state.total ? '$' + this.state.total[2] : '$' + this.getInitialTotalPrice()[2]}
                    </span>
                </div>
                <div className={classes.PayDiv}>
                    <button className={classes.Pay}>Pay Now</button>
                </div>
                {items.map(item => (  
                    <div className={classes.Cart}>
                        <span className={classes.CartTitle}>Meal Name: </span><span className={classes.CartTitleRes}>{item[0]['userMealName']}</span>
                        {item.map(i => (
                            <div>
                                <CartMeal 
                                    name={i.name}
                                    userMealName={i.userMealName}
                                    mods={i.userMealMods}
                                    upgrade={i.userMealUpgrade}
                                    price={i.basePrice}
                                    quantity={i.quantity}
                                    id={i.id}
                                    clickedRemoveItem={(key, id) => this.removeItemHandler(key, id)}
                                    changedMeal={this.getTotalPrice}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                <div className={classes.PayDiv}>
                    <button className={classes.Pay}>Pay Now</button>
                </div>
            </div>

        return (
            <div className={classes.Login}>
    
                <div className={classes.TopLine}>
                    <img src={logo} alt='Enjoy Lotus for your next meal today!' />
    
                    <h3>Cart</h3>
    
                    <svg onClick={this.props.closeModal} width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 35.2C0.666687 16.2137 15.5667 0.866669 34 0.866669C52.4334 0.866669 67.3334 16.2137 67.3334 35.2C67.3334 54.1863 52.4334 69.5333 34 69.5333C15.5667 69.5333 0.666687 54.1863 0.666687 35.2ZM34 30.359L42.6334 21.4667L47.3334 26.3077L38.7 35.2L47.3334 44.0923L42.6334 48.9333L34 40.041L25.3667 48.9333L20.6667 44.0923L29.3 35.2L20.6667 26.3077L25.3667 21.4667L34 30.359Z" fill="#65522E"/>
                    </svg>
                </div>
    
    
                <div className={classes.Form}>
    
                    {cart}
    
                </div>
                
            </div>
        )
    }
    
}

export default Cart;