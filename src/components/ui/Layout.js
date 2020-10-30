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
import MealCat from '../views/menu/mealCategories/MealCat';

// Navigation
import Navbar from './navigation/navbar/Navbar';
import Sidedrawer from './navigation/sidedrawer/Sidedrawer';
import Footer from './navigation/footer/Footer';

// Navigation Modals
import LoginModal from '../ui/navigation/modals/login/Login';
import AccountModal from '../ui/navigation/modals/account/Account';
import CartModal from '../ui/navigation/modals/cart/Cart';

// Payment Modal
import Checkout from '../ui/checkout/App';

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
        showCheckoutModal: false,
        updatedCart: false,
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

    updateCartHandler = () => {

        this.setState({updatedCart: true});

    }

    completedUpdateHandler = () => {

        this.setState({updatedCart: false});

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

    openLoginModalFromCartHandler = () => {

        this.setState({showLoginModal: true, showBackdrop: true, showCartModal: false});

    }

    openAccountModalFromCartHandler = () => {

        this.setState({showAccountModal: true, showBackdrop: true, showCartModal: false});

    }

    openCheckoutModal = () => {
        this.setState({showCheckoutModal: true});
    }

    closeCheckoutModal = () => {
        this.setState({showCheckoutModal: false});
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
                        <LoginModal 
                            closeModal={this.closeLoginModalHandler}
                        />
                    </Modal>

                    {/* CREATE NEW ACCOUNT */}
                    <Modal 
                        show={this.state.showAccountModal} 
                        clicked={this.closeAccountModalHandler}
                    >
                        <AccountModal 
                            closeModal={this.closeAccountModalHandler}
                        />
                    </Modal>

                    {/* VIEW CART */}
                    <Modal 
                        show={this.state.showCartModal} 
                        clicked={this.closeCartModalHandler}
                    >
                        <CartModal 
                            user={this.state.user}
                            updated={this.state.updatedCart}
                            completedUpdate={this.completedUpdateHandler}
                            clickedLink={this.closeCartModalHandler}
                            clickedLogin={this.openLoginModalFromCartHandler}
                            clickedAccount={this.openAccountModalFromCartHandler}
                            clickedPay={this.openCheckoutModal}
                        />
                    </Modal>

                    <Modal
                        show={this.state.showCheckoutModal}
                        clicked={this.closeCheckoutModalHandler}
                    >
                        <Checkout />
                    </Modal>

                    <Switch>
                        <Route 
                            path="/noodles"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='noodles'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/rice"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='rice'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/bahnmi"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='bahnmi'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/soup"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='soup'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/vegeterian"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='vegeterian'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/sides"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='sides'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/dessert"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='dessert'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
                        />
                        <Route 
                            path="/drinks"
                            exact
                            render={(props) => (
                                <MealCat
                                    {...props}
                                    category='drinks'
                                    updatedCart={this.updateCartHandler}
                                />
                            )}
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