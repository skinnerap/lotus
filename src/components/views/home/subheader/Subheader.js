import React from 'react';
import classes from './Subheader.module.css';

const subheader = () => {
    return (
        <div className={classes.Subheader}>
            <span className={classes.Slogan}>Free Rewards Program</span>
            <span>
                <button className={classes.CreateAccount}>Create Account</button>
                <span className={classes.Or}>OR</span>
                <button className={classes.Login}>Login</button>
            </span>
            
        </div>
    )
}

export default subheader;