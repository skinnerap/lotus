import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Header.module.css';

const header = () => {

    return (
        <header className={classes.Header}>
            <h1>Bold Asian Flavors</h1>
            <h2>Voted best value Asian style cuisine in VA! Order today and try one of Chef Chen's masterpieces!</h2>
            <span>- Washington Times (Foodie's "Must Try" List 2020)</span>
            <Link to='/#Order'><button>Order Now</button></Link>
        </header>
    )
}

export default header;