import React from 'react';
import classes from './Subheader.module.css';

const subheader = ( props ) => {
    return (
        <div id='Order' className={classes.Subheader}>
            <span className={classes.Slogan}>Free Rewards Program</span>
            <span>
                <button onClick={props.clickedAccount} className={classes.CreateAccount}>Create Account</button>
                <span className={classes.Or}>OR</span>
                <button onClick={props.clickedLogin} className={classes.Login}>Login</button>
            </span>
            
        </div>
    )
}

export default subheader;