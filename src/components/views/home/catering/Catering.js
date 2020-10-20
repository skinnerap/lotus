import React from 'react';
import classes from './Catering.module.css';

// image import for catering section
import img from '../../../../assets/img/catering/catering.jpg';

const catering = () => {
    return (
        <div className={classes.Catering}>
            <h5>
                Catering Done Right
            </h5>
            <div className={classes.Box}>
                <img src={img} alt="Lotus can cater all types of events, from casual get-togethers to corporate business events." />
                <ul>
                    <li>
                        Packages to feed 8 to 200 people!
                    </li>
                    <li>
                        Custom options, order what your guests want!
                    </li>
                    <li>
                        Delivery and setup options available!
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default catering;