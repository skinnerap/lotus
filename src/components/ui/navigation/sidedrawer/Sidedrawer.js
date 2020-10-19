import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './Sidedrawer.module.css';

const sideDrawer = ( props ) => {

    const showSidedrawer = {display: 'flex'};
    const hideSidedrawer = {display: 'none'};

    const shouldShowOrHide = props.show ? showSidedrawer : hideSidedrawer;

    const animation = {
                        transform: props.show ? 'translateX(0)' : 'translateX(-200vh)',
                        opacity: props.show ? '1' : '0',
                        display: props.show ? 'flex' : 'hidden'
                      }

    const joinedClasses = {...shouldShowOrHide, ...animation};

    return (
        <div className={classes.Sidedrawer} style={joinedClasses}>
            <ul>
                <li>
                    <NavLink  onClick={props.clickedLink} exact activeStyle={{ color: '#8d1b5a' }} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={props.clickedLink} activeStyle={{ color: '#8d1b5a' }} to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink onClick={props.clickedLink} activeStyle={{ color: '#8d1b5a' }} to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <span onClick={props.clicked}>Resume</span>
                </li>
            </ul>
        </div>
    )

}

export default withRouter(sideDrawer);