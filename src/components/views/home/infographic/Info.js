import React from 'react';

import classes from './Info.module.css';

// Image imports, one per box
import img1 from '../../../../assets/img/infographic/info1.jpg';
import img2 from '../../../../assets/img/infographic/info2.jpg';

const info = () => {
    return (
        <div className={classes.Info}>
            <div className={classes.Box}>
                <img src={img1} alt="Chef Chen creating one of his many masterpiece recipes!" />
                <div className={classes.BoxText}>
                    <h4>Chef Chen's Recipes</h4>
                    <p>
                        The secret to our success has been through Chef Chen’s masterful recipes. 
                        We know how amazing every dish he creates is, and we can’t wait for you 
                        to try them today!
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className={classes.Box}>
                <img src={img2} alt="Lotus has made it priority number one to provide relief during this time of need to our community." />
                <div className={classes.BoxText}>
                    <h4>Helping Our Community</h4>
                    <p>
                        Now, more than ever, we feel the responsibility to give back to the 
                        community who has supported us so greatly! We are striving to support 
                        those in need.
                    </p>
                    <button>How We Give</button>
                </div>
            </div>
        </div>
    )
}

export default info;