// React
import React, { Component } from 'react';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Helper Components
import Aux from '../hoc/Auxi';

// Views to Render
import Home from '../views/Home';

// Navigation
import Navbar from './navigation/navbar/Navbar';
import Sidedrawer from './navigation/sidedrawer/Sidedrawer';

// UX Helpers
import Backdrop from './ux/backdrop/Backdrop';
import Modal from './ux/modal/Modal';

// CSS Styles
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSidedrawer: false,
        showBackdrop: false
    }

    openSidedrawerHandler = () => {
        this.setState({showSidedrawer: true, showBackdrop: true});
    }

    closeSidedrawerHandler = () => {
        this.setState({showSidedrawer: false, showBackdrop: false});
    }


    render() {
        return (
            <Aux>
                <Router>
                    <Navbar clicked={this.openSidedrawerHandler} />
                    <Sidedrawer show={this.state.showSidedrawer} />
                    <Backdrop show={this.state.showBackdrop} clicked={this.closeSidedrawerHandler} />
                    <Switch>
                        <Route 
                            path="/"
                            exact
                            component={Home}
                        />
                    </Switch>
                </Router>
            </Aux>
        )
    }

}

export default Layout;