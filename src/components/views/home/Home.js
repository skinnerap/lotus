import React from 'react';
import Header from './header/Header';
import Border from './border/Border';
import Subheader from './subheader/Subheader';
import Menu from './menu/Menu';
import Infographic from './infographic/Info';
import Catering from './catering/Catering';

const home = ( props ) => {

    const showLoginAndRegister = props.user ? false : true;

    return (
        <div>
            <Header />
            <Border />
            <Subheader 
                clickedLogin={props.clickedLogin} 
                clickedAccount={props.clickedAccount} 
                clickedClose={props.clickedClose}
                show={showLoginAndRegister}
            />
            <Menu />
            <Infographic />
            <Catering />
        </div>
    )

}

export default home;