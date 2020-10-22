import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MealCat.module.css'
import noodlesLogo from '../../../../assets/img/cutouts/noodles.png';
import riceLogo from '../../../../assets/img/cutouts/rice.png';
import vegeterianLogo from '../../../../assets/img/cutouts/vegeterian.png';
import bahnmiLogo from '../../../../assets/img/cutouts/bahnmi.png';
import sidesLogo from '../../../../assets/img/cutouts/sides.png';
import drinksLogo from '../../../../assets/img/cutouts/drinks.png';
import dessertLogo from '../../../../assets/img/cutouts/dessert.png';
import soupLogo from '../../../../assets/img/cutouts/soups.png';
import Meal from '../meal/Meal';
import fire from '../../../../config/auth/fire';

class MealCat extends Component {

    state = {
        menu: null
    }

    
    componentDidMount = () => {

        const db = fire.firestore();
        db.collection("menu").doc('7isXFKjWO4hgFGtnG8rt').get().then(res => {
            const menu = res.data();
            const category = this.props.category
            console.log(category);
            if(category === 'noodles') this.setState({menu: menu.noodles});
            if(category === 'rice') this.setState({menu: menu.rice});
            if(category === 'soups') this.setState({menu: menu.soups});
            if(category === 'vegeterian') this.setState({menu: menu.vegeterian});
            if(category === 'drinks') this.setState({menu: menu.drinks});
            if(category === 'desserts') this.setState({menu: menu.desserts});
            if(category === 'sides') this.setState({menu: menu.sides});
            if(category === 'bahnmi') this.setState({menu: menu.bahnmi});
            
        }).catch(err => {
            console.log('Error: ' + err.toString());
        })

    }


    render() {

        let logo = null;
        if(this.props.category === 'noodles') logo = noodlesLogo;
        if(this.props.category === 'rice') logo = riceLogo;
        if(this.props.category === 'bahnmi') logo = bahnmiLogo;
        if(this.props.category === 'vegeterian') logo = vegeterianLogo;
        if(this.props.category === 'sides') logo = sidesLogo;
        if(this.props.category === 'soup') logo = soupLogo;
        if(this.props.category === 'drinks') logo = drinksLogo;
        if(this.props.category === 'dessert') logo = dessertLogo;

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
                <img src={logo} alt='Enjoy your favorite noodle dish today with a Coke!' />
                <h1>Noodles</h1>
                <div style={{display: 'flex', alignSelf: 'center'}}>
                    {meals}
                </div>   
                <NavLink to='/'><button className={classes.GoBack}>Back to Menu</button></NavLink>
            </div>
        )
    }
}

export default MealCat;