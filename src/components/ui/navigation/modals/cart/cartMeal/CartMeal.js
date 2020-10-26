import React, { useState } from 'react';
import classes from './CartMeal.module.css';

const CartMeal = ( props ) => {

    const [quantity, setQuantity] = useState(props.quantity);
    const price = props.price * quantity + ( props.upgrade ? +props.upgrade[1] * quantity : 0);
    const showMeal = quantity > 0 ? true : false;

    let modArray = [];
    // Converts Non-Empty userMealMods from Object into Array
    if(props.mods !== []) {
        
        Object.keys(props.mods).forEach(key => {
            modArray.push(key + ': ' + props.mods[key]);
        })

    }

    const incrementQuantityHandler = ( mealName, id ) => {
        console.log(sessionStorage.getItem(mealName))
        const obj = JSON.parse(sessionStorage.getItem(mealName));
        Object.keys(obj).forEach(key => {
            console.log(obj[key].id)
            if(obj[key].id === id) {
                console.log('KDSD')
                console.log(obj[key].quantity)
                obj[key].quantity++;
                console.log(obj[key].quantity)
            }
        })
        sessionStorage.setItem( mealName, JSON.stringify(obj));
        setQuantity(quantity + 1);
    }

    const decrementQuantityHandler = ( mealName, id ) => {
        console.log(sessionStorage.getItem(mealName))
        const obj = JSON.parse(sessionStorage.getItem(mealName));
        Object.keys(obj).forEach(key => {
            console.log(obj[key].id)
            if(obj[key].id === id) {
                console.log('KDSD')
                console.log(obj[key].quantity)
                obj[key].quantity--;
                console.log(obj[key].quantity)
            }
        })
        sessionStorage.setItem(mealName, JSON.stringify(obj));
        setQuantity(quantity - 1);
    }

    // Sets Quantity to 0
    const removeQuantityHandler = ( mealName, id ) => {
        console.log(sessionStorage.getItem(mealName))
        const obj = JSON.parse(sessionStorage.getItem(mealName));
        Object.keys(obj).forEach(key => {
            console.log(obj[key].id)
            if(obj[key].id === id) {
                console.log('KDSD')
                console.log(obj[key].quantity)
                obj[key].quantity = 0;
                console.log(obj[key].quantity)
            }
        })
        sessionStorage.setItem(mealName, JSON.stringify(obj));
        setQuantity(quantity - quantity);
    }
   
    return (
        
        showMeal ? 
        <div className={classes.Cart}>
                <div className={classes.CartDiv}>
                    <span className={classes.CartTitle}>Item: </span><span className={classes.CartTitleRes}>{props.name}</span>
                    <span className={classes.CartTitle}>Price: </span><span className={classes.CartTitleRes}>${(price).toFixed(2)}</span>
                    <span className={classes.CartTitle} style={{paddingRight: '10px'}}>Quantity: </span>
                        <svg onClick={() => decrementQuantityHandler(props.userMealName, props.id)} className={classes.QuantityBtn} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.1632C0 4.64318 4.48 0.163177 10 0.163177C15.52 0.163177 20 4.64318 20 10.1632C20 15.6832 15.52 20.1632 10 20.1632C4.48 20.1632 0 15.6832 0 10.1632ZM5 11.1632H15V9.16318H5V11.1632Z" fill="#B4891C"/>
                        </svg>
                        <span className={classes.CartTitleRes3}>{quantity}</span>
                        <svg onClick={() => incrementQuantityHandler(props.userMealName, props.id)} className={classes.QuantityBtn} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM11 11H15V9H11V5H9V9H5V11H9V15H11V11Z" fill="#B4891C"/>
                        </svg>

                </div>
                
                
                <div className={classes.CartDiv}>
                    <span className={classes.CartTitle}>Protein: </span><span className={classes.CartTitleRes2}>
                        {props.upgrade ? props.upgrade[0] + ': +$' + (+props.upgrade[1]).toFixed(2) : 'No Choice'}
                    </span>
                </div>

                <div className={classes.CartDiv}>
                    
                    <span className={classes.CartTitle}>Modifications:</span>
                    {modArray.length > 0 ?
                    
                        modArray.map(mod => (
                            <span className={classes.CartTitleRes2}>{mod !== 'none' ? mod : 'none'}</span>
                        ))
                      : <span className={classes.CartTitleRes2}>None</span>}  
                </div>
                <div className={classes.CartDiv}>
                    <button onClick={() => removeQuantityHandler(props.userMealName, props.id)} className={classes.CartBtn}>
                        Remove Item
                    </button>
                </div>
        </div> : <div>
                    <span style={{fontWeight: '600', paddingLeft: '20px', paddingRight: '20px'}}>This meal was removed</span>
                    <button style={{backgroundColor: 'none'}} onClick={() => incrementQuantityHandler(props.userMealName, props.id)}>Bring it Back?</button>
                </div>
    )
}

export default CartMeal;