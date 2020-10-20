import React from 'react';
import classes from './Footer.module.css';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Links}>
                <h6>Locations</h6>
                <h6>Gift Cards</h6>
                <h6>Rewards</h6>
                <h6>Careers</h6>
            </div>
            <div className={classes.Social}>
                <span>Connect with Us</span>
                
            </div>
            <div className={classes.Legal}>
                <a href="#">Terms of Use</a>
                <a href="#">Accessibility Statement</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}

export default footer;