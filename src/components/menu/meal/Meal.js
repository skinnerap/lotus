import React, { Component } from 'react';

import classes from './Meal.module.css';

class Meal extends Component {

    render() {
        return (
            <div className={classes.Meal}>
                <p>Meal will go here</p>
            </div>
        )
    }
}

export default Meal;