import React, { Component } from 'react';
import Header from './header/Header';
import Subheader from './subheader/Subheader';
import Menu from './menu/Menu';
import Infographic from './infographic/Info';
import Catering from './catering/Catering';

class Home extends Component{

    render() {
        return (
            <div>
                <Header />
                <Subheader 
                    clickedLogin={this.props.clickedLogin} 
                    clickedAccount={this.props.clickedAccount} 
                    clickedClose={this.props.clickedClose}
                    />
                <Menu />
                <Infographic />
                <Catering />
            </div>
        )
    }
}

export default Home;