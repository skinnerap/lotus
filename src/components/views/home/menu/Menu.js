import React from 'react';
import classes from './Menu.module.css';

// Image Imports (One for each category of the menu)
import noodles from '../../../../assets/img/cutouts/noodles.png';
import rice from '../../../../assets/img/cutouts/rice.png';
import bahnmi from '../../../../assets/img/cutouts/bahnmi.png';
import dessert from '../../../../assets/img/cutouts/dessert.png';
import soups from '../../../../assets/img/cutouts/soups.png';
import vegeterian from '../../../../assets/img/cutouts/vegeterian.png';
import sides from '../../../../assets/img/cutouts/sides.png';
import drinks from '../../../../assets/img/cutouts/drinks.png';

const menu = () => {
    return (
        <div className={classes.Menu}>
            <div>
                <img src={noodles} alt="Try Chef Chen's Dragon Noodles today, or one of his other amazing noodle recipes!" />
                <h3 className={classes.Title}>Noodle Dishes</h3>
            </div>
            <div>
                <img src={rice} alt="Try Chef Chen's Rice-Mazing today, or one of his other amazing recipes!" />
                <h3 className={classes.Title}>Rice Dishes</h3>
            </div>
            <div>
                <img src={bahnmi} alt="Try Chef Chen's Thai Spice Bahn-Mi today, or one of his other amazing recipes!" />
                <h3 className={classes.Title}>Bahn Mi</h3>
            </div>
            <div>
                <img src={dessert} alt="Finish your meal with a sweet treat!" />
                <h3 className={classes.Title}>Dessert</h3>
            </div>
            <div>
                <img src={soups} alt="Try Chef Chen's dumplings today, or one of his other amazing recipes!" />
                <h3 className={classes.Title}>Soups / Dumplings</h3>
            </div>
            <div>
                <img src={vegeterian} alt="Try one of Chef Chen's Vegeterian Entrees!" />
                <h3 className={classes.Title}>Vegeterian Dishes</h3>
            </div>
            <div>
                <img src={sides} alt="Top off your meal with some extra sides!" />
                <h3 className={classes.Title}>Sides</h3>
            </div>
            <div>
                <img src={drinks} alt="Need something refreshing to finish off your delicious meal? We got you!" />
                <h3 className={classes.Title}>Drinks</h3>
            </div>
        </div>
    )
}

export default menu;