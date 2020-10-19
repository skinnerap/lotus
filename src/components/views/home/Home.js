import React, { Component } from 'react';
import Header from './header/Header';
import Subheader from './subheader/Subheader';

class Home extends Component{

    render() {
        return (
            <div>
                <Header />
                <Subheader />
            </div>
        )
    }
}

export default Home;