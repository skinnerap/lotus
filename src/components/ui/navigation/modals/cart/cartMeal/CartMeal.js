import React from 'react';
import classes from './CartMeal.module.css';

const cartMeal = ( props ) => {

    let modArray = [];
    // Converts Non-Empty userMealMods from Object into Array
    if(props.mods !== []) {
        
        Object.keys(props.mods).forEach(key => {
            modArray.push(key + ': ' + props.mods[key]);
        })
        console.log('MODARRAY')
        console.log(modArray);

    }
   
    return (
        <div className={classes.Cart}>

                <span className={classes.CartTitle}>Item: </span><span className={classes.CartTitleRes}>{props.name}</span>
                <span className={classes.CartTitle}>Protein: </span><span className={classes.CartTitleRes}>{props.upgrade}</span>
                <span className={classes.CartTitle}>Price: </span><span className={classes.CartTitleRes}>${(props.price * props.quantity).toFixed(2)}</span>
                <span className={classes.CartTitle}>Quantity: </span><span className={classes.CartTitleRes}>{props.quantity}</span>
                
               
                <div>
                    <span className={classes.CartTitle}>Modifications:</span>
                    {modArray.length > 0 ?
                    
                        modArray.map(mod => (
                            <span className={classes.CartTitleRes2}>{mod !== 'none' ? mod : 'none'}</span>
                        ))
                      : <span className={classes.CartTitleRes2}>None</span>}  
                </div>
          
        </div>
    )
}

export default cartMeal;