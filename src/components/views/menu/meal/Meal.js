import React from 'react';
import classes from './Meal.module.css';

const meal = ( props ) => {

    return (
        <div className={classes.Meal}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div>
                <span className={classes.Price}>${props.basePrice}</span>
                <span>
                    <select>
                        <option value='none'>Add Protein</option>
                        {props.upgrades.map(choice => {
                            return <option value={choice.name}>{choice.name} +${choice.price}</option>
                        })}
                    </select>
                </span>
            </div>
            <button className={classes.Mod}>Modify</button>
            <button onClick={() => props.clickedAdd(props.name)} className={classes.Add}>Add to Cart</button>
        </div>
    )

}

export default meal;