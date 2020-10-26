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
import Modal from '../../../ui/ux/modal/Modal';
import Aux from '../../../hoc/Auxi';
import fire from '../../../../config/auth/fire';

class MealCat extends Component {

    state = {
        userMealName: null,
        userMealChoice: null,
        userMealMods: null,
        userMealUpgrade: null,
        showNameMealModal: false,
        menu: null,
    }

    
    componentDidMount = () => {

        const db = fire.firestore();
        db.collection("menu").doc('7isXFKjWO4hgFGtnG8rt').get().then(res => {

            const menu = res.data();
            const category = this.props.category

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

    compareMealUpgrade = ( userMealUpgrade, currentMealUpgrade ) => {

        if(userMealUpgrade === currentMealUpgrade) return true;
        if(userMealUpgrade === '' && !currentMealUpgrade) return true;
        return false;

    }

    compareMealMods = ( userMealMods, currentMealMods ) => {

        console.log('COMPARE');
        console.log(userMealMods)
        console.log(currentMealMods)
        if(userMealMods === undefined && currentMealMods === undefined) {
            console.log('x')
            return true;
        } 
        if(userMealMods === undefined && currentMealMods !== undefined) {
            console.log('y')
            return false;
        } 
        if(userMealMods !== undefined && currentMealMods === undefined) {
            if(Object.keys(userMealMods).length === 0) {
                console.log('z')
                return true;
            } 
            console.log(userMealMods)
            console.log('zz')
            return false;
        } 

        if(Object.keys(userMealMods).length !== Object.keys(currentMealMods).length) return false;

        for(let i in userMealMods) {

            console.log(userMealMods[i]);

            if(userMealMods[i] !== currentMealMods[i]) {
                console.log('zzz')
                return false;
            }

        }

        console.log('zzzz')
        return true;

    }

    addMealChoiceAndOpenModalHandler = ( mealName, mealMods, mealUpgrade ) => {

        console.log('ADDMEALCHOICE');
        console.log(mealName);
        console.log(mealMods);
        console.log(mealUpgrade);

        if(!mealMods) mealMods = [];
        if(!mealUpgrade) mealUpgrade = null;

        this.setState({
            showNameMealModal: true,
            userMealChoice: mealName,
            userMealMods: mealMods,
            userMealUpgrade: mealUpgrade
        });

    }

    addMealHandler = ( ) => {

        // ******************* HOW THE CART SYSTEM IS ORGANIZED AND DESIGNED! MUST READ *************************
        // Cart is stored in Session Storage with "Sub Carts"
        // Each Meal is assigned a name by the user
        // The Meal Name assigned acts as a key on the "Sub Carts"
        // The "Sub Cart" is just a Cart, but unique to the name assigned by the user
        // Imagine a family is ordering online, and Dad wants Entree #1 with a side of rice and 2 cokes...
        // ...in this scenario the "Sub Cart" would be named "Dad" and consist of 4 items: Entree #1, Side of Rice, Coke, Coke.
        // The Cart is the summation of all the "Sub Carts" ("Dad", "Mom", "Sally", "Billy", etc...)

        // ******************* WHY DID I DESIGN IT LIKE THIS?  ***************************/
        // Full Order: -> Meal, Meal, Meal...    Meal: -> Item, Item, Item...   Item: -> MealName, ItemName, Quantity, Price, etc
        // Because it allows a really superior User Experience. Users can customize and organize
        // their orders easily and seemlessly this way. The restaurant is able to easily label
        // each item in a meal, and all the meals in the order. The idea is to extend the user experience
        // past the website and think about the customers entire experience with the business, specifically
        // how the applications functionality can impact the entire experience.

        [...this.state.menu].forEach(item => {

            if(!item.hasOwnProperty('userMealName')) item.userMealName = '';
            if(!item.hasOwnProperty('userMealUpgrade')) item.userMealUpgrade = '';
            if(!item.hasOwnProperty('userMealMods')) item.userMealMods = {};

            if(item.name === this.state.userMealChoice) {

                if(sessionStorage.getItem(this.state.userMealName)) {

                    let items = JSON.parse(sessionStorage.getItem(this.state.userMealName));

                    for(let i of items) {
                        if(i.name === this.state.userMealChoice) {
                            if(this.compareMealMods(i.userMealMods, this.state.userMealMods)
                                && this.compareMealUpgrade(i.userMealUpgrade, this.state.userMealUpgrade)) {
                                console.log(i);
                                i.quantity++;
                                i.id = i.userMealName + '-' + i.name + '-' + i.userMealUpgrade + '-';
                                Object.keys(i.userMealMods).forEach(key => {
                                    i.id += '-' + key + ':' + i.userMealMods[key];
                                })
                                sessionStorage.setItem(this.state.userMealName, JSON.stringify(items));
                                this.closeNameMealModalHandler();
                                return;
                            } 
                        }
                    }         
                    
                    item.userMealName = this.state.userMealName;
                    item.quantity = 1;
                    this.state.userMealMods ? item.userMealMods = this.state.userMealMods : item.userMealMods = {};
                    this.state.userMealUpgrade ? item.userMealUpgrade = this.state.userMealUpgrade : item.userMealUpgrade =  '';
                    item.id = item.userMealName + '-' + item.name + '-' + item.userMealUpgrade + '-';
                    Object.keys(item.userMealMods).forEach(key => {
                        item.id += '-' + key + ':' + item.userMealMods[key];
                    })
                    items.push(item);
                    sessionStorage.setItem(this.state.userMealName, JSON.stringify(items));
                    
                } else {
                    item.userMealName = this.state.userMealName;
                    item.quantity = 1;
                    this.state.userMealMods ? item.userMealMods = this.state.userMealMods : item.userMealMods = {};
                    this.state.userMealUpgrade ? item.userMealUpgrade = this.state.userMealUpgrade : item.userMealUpgrade =  '';
                    item.id = item.userMealName + '-' + item.name + '-' + item.userMealUpgrade + '-';
                    Object.keys(item.userMealMods).forEach(key => {
                        item.id += '-' + key + ':' + item.userMealMods[key];
                    })
                    const itemArray = [item];
                    sessionStorage.setItem(this.state.userMealName, JSON.stringify(itemArray));
                }  
            }
        });

        this.closeNameMealModalHandler();

    }

    closeNameMealModalHandler = () => {

        this.setState({showNameMealModal: false});;

    }

    closeModsModalHandler = () => {
        this.setState({showModModal: false})
    }

    inputNameMealHandler = (e) => {

        this.setState({userMealName: e.target.value});

    }

    render() {

        let logo = null;
        let catName = null;
        if(this.props.category === 'noodles'){
            logo = noodlesLogo;
            catName = 'Noodle Entrees';
        }
        if(this.props.category === 'rice') {
            logo = riceLogo;
            catName = 'Rice Entrees'
        } 
        if(this.props.category === 'bahnmi') {
            logo = bahnmiLogo;
            catName = 'Bahn Mi'
        }
        if(this.props.category === 'vegeterian') {
            logo = vegeterianLogo;
            catName = 'Vegeterian Entrees';
        }
        if(this.props.category === 'sides') {
            logo = sidesLogo;
            catName = 'Sides'
        }
        if(this.props.category === 'soup') {
            logo = soupLogo;
            catName = 'Dumplings / Soups';
        }
        if(this.props.category === 'drinks') {
            logo = drinksLogo;
            catName = 'Drinks';
        }
        if(this.props.category === 'dessert') {
            logo = dessertLogo;
            catName = 'Desserts'
        }
        
        const meals =  this.state.menu ? 
                
                this.state.menu.map(item => (
                    <Aux key={item.name + Math.random()*5}>
                        <Meal
                            name={item.name}
                            description={item.description}
                            basePrice={item.basePrice}
                            upgrades={item.upgrades}
                            mods={item.mods}
                            clickedAdd={(mealName, mealMods, mealUpgrade) => this.addMealChoiceAndOpenModalHandler(mealName, mealMods, mealUpgrade)}
                            clickedModify={(mealName, mealMods) => this.addModMealChoiceAndOpenModalHandler(mealName, mealMods)}
                            showModModal={this.state.showModsModal}
                            closeModModal={this.closeModsModalHandler}
                            submitModifiedOrder={(mealName, mealMods, mealUpgrade) => this.addMealChoiceAndOpenModalHandler(mealName, mealMods, mealUpgrade)}
                        />
                    </Aux>
                )) : <p>Loading...</p>;
            

        return (
            <div className={classes.Noodles}>
                <Modal show={this.state.showNameMealModal} clicked={this.closeNameMealModalHandler}>
                    <h6>Name This Meal:</h6>
                    <input 
                        type='text' 
                        placeholder='Example - Bobs Meal'
                        onChange={(e) => this.inputNameMealHandler(e)}
                    />
                    <button onClick={this.addMealHandler}>Submit</button>
                </Modal>
                <img src={logo} alt='Enjoy your favorite noodle dish today with a Coke!' />
                <h1>{catName}</h1>
                <div style={{display: 'flex', alignSelf: 'center'}}>
                    {meals}
                </div>   
                <NavLink to='/'><button className={classes.GoBack}>Back to Menu</button></NavLink>
            </div>
        )
    }
}

export default MealCat;