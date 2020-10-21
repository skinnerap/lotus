import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import NavProfile from './navProfile/NavProfile';

const navbar = ( props ) => {

    return (
        <div className={classes.Navbar}>  

            <NavProfile 
                clickedLogin={props.clickedLogin} 
                clickedAccount={props.clickedAccount} 
                clicked={props.clicked} 
            />

            <nav>
                <ul>
                    <li>
                        <NavLink className={classes.DesktopOnly} exact activeStyle={{ color: '#711616' }} to='/'>Order</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.DesktopOnly} activeStyle={{ color: '#711616' }} to='/catering'>Catering</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.DesktopOnly} activeStyle={{ color: '#711616' }} to='/values'>Our Values</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.DesktopOnly} activeStyle={{ color: '#711616' }} to='/nutrition'>Nutrition</NavLink>
                    </li>
                </ul>
            </nav>


                <span style={{display: 'flex'}}>
                    <button disabled>{props.user ? 'Checkout Now' : 'Cart is Empty'}</button>
                    <svg 
                        onClick={props.clickedCart}
                        width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5355 15.7218H25.1485C25.848 15.7218 26.3976 15.1435 26.3976 14.4462C26.3976 13.7318 25.848 13.1706 25.1485 13.1706H20.5355C19.836 13.1706 19.2865 13.7318 19.2865 14.4462C19.2865 15.1435 19.836 15.7218 20.5355 15.7218ZM30.6276 6.87916C31.6435 6.87916 32.3097 7.23634 32.9758 8.01872C33.642 8.80112 33.7585 9.92367 33.6087 10.9425L32.0265 22.1C31.7268 24.2448 29.9281 25.8248 27.8131 25.8248H9.64397C7.42902 25.8248 5.59712 24.0917 5.41393 21.8467L3.88178 3.30567L1.36708 2.86346C0.700933 2.74441 0.234633 2.08107 0.3512 1.40072C0.467783 0.70509 1.11728 0.244157 1.80008 0.347907L5.77198 0.958507C6.3382 1.06226 6.75455 1.53679 6.80452 2.11509L7.12093 5.92499C7.17088 6.47096 7.60388 6.87916 8.1368 6.87916H30.6276ZM9.37717 28.5132C7.97827 28.5132 6.84582 29.6697 6.84582 31.0983C6.84582 32.5102 7.97827 33.6667 9.37717 33.6667C10.7594 33.6667 11.8919 32.5102 11.8919 31.0983C11.8919 29.6697 10.7594 28.5132 9.37717 28.5132ZM28.1126 28.5132C26.7136 28.5132 25.5812 29.6697 25.5812 31.0983C25.5812 32.5102 26.7136 33.6667 28.1126 33.6667C29.4948 33.6667 30.6273 32.5102 30.6273 31.0983C30.6273 29.6697 29.4948 28.5132 28.1126 28.5132Z" fill="#451C1C"/>
                    </svg>  
                </span>

                <span id='ham' className={classes.MobileOnly} onClick={props.clicked}><strong>≡</strong></span>
            

        </div>
    )

}

export default navbar;