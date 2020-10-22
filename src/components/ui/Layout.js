// React
import React, { Component } from 'react';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Helper Components
import Aux from '../hoc/Auxi';

// Auth Settings
import fire from '../../config/auth/fire';

// Views to Render
import Home from '../views/home/Home';
import Noodles from '../views/menu/noodles/Noodles';

// Navigation
import Navbar from './navigation/navbar/Navbar';
import Sidedrawer from './navigation/sidedrawer/Sidedrawer';
import Footer from './navigation/footer/Footer';

// Navigation Modals
import LoginModal from '../ui/navigation/modals/login/Login';
import AccountModal from '../ui/navigation/modals/account/Account';
import CartModal from '../ui/navigation/modals/cart/Cart';

// UX Helpers
import Backdrop from './ux/backdrop/Backdrop';
import Modal from './ux/modal/Modal';

class Layout extends Component {

    state = {

        showSidedrawer: false,
        showBackdrop: false,
        showLoginModal: false,
        showAccountModal: false,
        showCartModal: false,
        user: null

    }

    componentDidMount() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
              this.setState({user: user})
              console.log(user.uid);
            }
            else this.setState({user: null});
        })
    }

    // Tablet/Mobile View Only: Opens Navigation On Click of Hamburger Icon
    openSidedrawerHandler = () => {

        this.setState({showSidedrawer: true, showBackdrop: true});

    }

    // Tablet/Mobile View Only: Closes Navigation On Click of Link OR Backdrop
    closeSidedrawerHandler = () => {

        this.setState({showSidedrawer: false, showBackdrop: false});

    }

    openLoginModalHandler = () => {

        this.setState({showLoginModal: true, showBackdrop: true});

    }

    closeLoginModalHandler = () => {

        this.setState({showLoginModal: false, showBackdrop: false});

    }

    openAccountModalHandler = () => {

        this.setState({showAccountModal: true, showBackdrop: true});

    }

    closeAccountModalHandler = () => {

        this.setState({showAccountModal: false, showBackdrop: false});

    }

    openCartModalHandler = () => {

        this.setState({showCartModal: true, showBackdrop: true});

    }

    closeCartModalHandler = () => {

        this.setState({showCartModal: false, showBackdrop: false});

    }


    render() {

        return (

            <Aux>

                <Router>
                    
                    {/* NAVIGATION BAR: SHOWS ON ALL VIEWS */}
                    <Navbar 
                        clickedLogin={this.openLoginModalHandler} 
                        clickedAccount={this.openAccountModalHandler} 
                        clickedCart={this.openCartModalHandler}
                        clicked={this.openSidedrawerHandler} 
                        user={this.state.user}
                    />
                    
                    {/* TABLET/MOBILE VIEW ONLY: SHOW NAVIGATION */}
                    <Sidedrawer 
                        show={this.state.showSidedrawer} 
                    />

                   {/* BACKDROP FOR SIDEDRAWER NAVIGATION */} 
                    <Backdrop 
                        show={this.state.showBackdrop} 
                        clicked={this.closeSidedrawerHandler} 
                    />

                    {/* LOGIN INTO ACCOUNT */}
                    <Modal 
                        show={this.state.showLoginModal} 
                        clicked={this.closeLoginModalHandler}
                        clickedClose={this.closeLoginModalHandler}
                    >
                        <LoginModal />
                    </Modal>

                    {/* CREATE NEW ACCOUNT */}
                    <Modal 
                        show={this.state.showAccountModal} 
                        clicked={this.closeAccountModalHandler}
                    >
                        <AccountModal />
                    </Modal>

                    {/* VIEW CART */}
                    <Modal 
                        show={this.state.showCartModal} 
                        clicked={this.closeCartModalHandler}
                    >
                        <CartModal />
                    </Modal>

                    <Switch>
                        <Route 
                            path="/noodles"
                            exact
                            component={Noodles}
                        />
                        <Route 
                            path="/"
                            exact
                            render={(props) => (
                                <Home 
                                    {...props}
                                    clickedLogin={this.openLoginModalHandler} 
                                    clickedAccount={this.openAccountModalHandler}
                                    user={this.state.user}
                                /> 
                            )} 
                        />
                        
                    </Switch>

                    <Footer />

                </Router>

            </Aux>

        )

    }

}

export default Layout;