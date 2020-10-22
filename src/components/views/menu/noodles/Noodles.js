import React, { Component } from 'react';
import classes from './Noodles.module.css'
import Meal from '../meal/Meal';
import fire from '../../../../config/auth/fire';

class Noodles extends Component {

    state = {
        menu: null
    }

    
    componentDidMount = () => {

        const db = fire.firestore();
        db.collection("menu").doc('7isXFKjWO4hgFGtnG8rt').get().then(res => {
            const menu = res.data();
            this.setState({menu: menu.noodles});
        }).catch(err => {
            console.log('Error: ' + err.toString());
        })

    }


    render() {

        const meals = this.state.menu ? 
            this.state.menu.map(item => (
                <Meal
                    name={item.name}
                    description={item.name}
                    basePrice={item.basePrice}
                    upgrades={item.upgrades}
                />
            )) : <p>Loading...</p>;

        return (
            <div className={classes.Noodles}>
                {meals}
            </div>
        )
    }
}

export default Noodles;