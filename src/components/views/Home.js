import React, { Component } from 'react';
import Header from './header/Header';

class Home extends Component{

    render() {
        return (
            <div>
                <Header />
                <div>
                    <p>This will be more content</p>
                </div>
            </div>
        )
    }
}

export default Home;