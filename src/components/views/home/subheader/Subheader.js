import React from 'react';
import classes from './Subheader.module.css';

const subheader = () => {
    return (
        <div className={classes.Subheader}>
            <span>Free Rewards Program</span>
            <span>
                <button>Create Account</button>
                <span>OR</span>
                <button>Login</button>
            </span>
            
        </div>
    )
}

export default subheader;