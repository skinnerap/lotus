import React, { Component } from 'react';
import Header from './header/Header';
import Subheader from './subheader/Subheader';
import Menu from './menu/Menu';

class Home extends Component{

    render() {
        return (
            <div>
                <Header />
                <Subheader />
                <Menu />
            </div>
        )
    }
}

export default Home;