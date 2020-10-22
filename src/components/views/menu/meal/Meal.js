import React from 'react';
import classes from './Meal.module.css';

const meal = ( props ) => {

    return (
        <div className={classes.Meal}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div>
                <span>${props.basePrice}</span>
                <span>
                    <select>
                        {props.upgrades.map(choice => {
                            return <option value={choice.name}>{choice.name} +${choice.price}</option>
                        })}
                    </select>
                </span>
            </div>
            <button>Modify Meal</button>
            <button>Add to Cart</button>
        </div>
    )

}

export default meal;