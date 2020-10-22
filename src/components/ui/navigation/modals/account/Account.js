import React, { Component } from 'react';
import fire from '../../../../../config/auth/fire';
import classes from './Account.module.css';
import logo from '../../../../../assets/img/logo.png';

class Account extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirm: null,
        phoneNumber: null,
        birthday: null,
    }

    firstNameInputHandler = ( e ) => {
        this.setState({firstName: e.target.value});
    }

    lastNameInputHandler = ( e ) => {
        this.setState({lastName: e.target.value});
    }

    emailInputHandler = ( e ) => {
        this.setState({email: e.target.value});
    }

    passwordInputHandler = ( e ) => {
        this.setState({password: e.target.value});
    }

    passwordConfirmInputHandler = ( e ) => {
        this.setState({passwordConfirm: e.target.value});
    }

    phoneNumberInputHandler = ( e ) => {
        this.setState({phoneNumber: e.target.value});
    }

    birthdayInputHandler = ( e ) => {
        this.setState({birthday: e.target.value});
    }

    submitAccountHandler = () => {

        // SHOW SPINNER

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( u => {
            console.log('logged in');
            var user = fire.auth().currentUser;
            console.log(u);
            console.log(user)
            user.updateProfile({
                displayName: this.state.firstName.toString() + ' ' + this.state.lastName.toString(),
            }).then(function() {
                // SUCCESS: NEW USER REGISTERED AND DETAILS UPDATED
                // HIDE SPINNER
                console.log(user.displayName);
            }).catch(function(error) {
                // ERROR: NEW USER REGISTERED BUT DETAILS FAILED TO UPDATE
                // HIDE SPINNER
            });
        }).catch( err => {
            // ERROR: NEW USER DID NOT GET REGISTERED
            // HIDE SPINNER
            console.log('Error: ' + err.toString());
        })
            
    }

    render() {

        return (
            <div className={classes.Login}>

                <div className={classes.TopLine}>
                    <img src={logo} alt='Enjoy Lotus for your next meal today!' />

                    <h3>Register Your Account</h3>

                    <svg onClick={this.props.closeModal} width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 35.2C0.666687 16.2137 15.5667 0.866669 34 0.866669C52.4334 0.866669 67.3334 16.2137 67.3334 35.2C67.3334 54.1863 52.4334 69.5333 34 69.5333C15.5667 69.5333 0.666687 54.1863 0.666687 35.2ZM34 30.359L42.6334 21.4667L47.3334 26.3077L38.7 35.2L47.3334 44.0923L42.6334 48.9333L34 40.041L25.3667 48.9333L20.6667 44.0923L29.3 35.2L20.6667 26.3077L25.3667 21.4667L34 30.359Z" fill="#65522E"/>
                    </svg>
                </div>


                <div className={classes.Form}>

                    <input 
                        type='text' 
                        name="firstName" 
                        placeholder='First Name' 
                        onChange={(e) => this.firstNameInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="lastName" 
                        placeholder='Last Name' 
                        onChange={(e) => this.lastNameInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="email" 
                        placeholder='Email' 
                        onChange={(e) => this.emailInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="password" 
                        placeholder='Password' 
                        onChange={(e) => this.passwordInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="passwordConfirmation" 
                        placeholder='Confirm Password' 
                        onChange={(e) => this.passwordConfirmInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="phoneNumber" 
                        placeholder='Phone Number' 
                        onChange={(e) => this.phoneNumberInputHandler(e)}
                    />
                    <input 
                        type='text' 
                        name="birthday" 
                        placeholder='Birthday (mm/dd)' 
                        onChange={(e) => this.birthdayInputHandler(e)}
                    />

                    <button onClick={this.submitAccountHandler} className={classes.Account}>
                        Create Account
                    </button>

                    <p>
                        By creating this account, I am confirming I am 13 years of age or older, 
                        will be automatically enrolled in Lotus: Asian House Rewards, will receive email updates,
                        promotions and offers from Lotus: Asian House, and agree to Lotus Asian House's Privacy Policy, 
                        Terms of Use and Lotus: Asian House's Rewards Terms and Conditions.
                    </p>

                </div>
                
            </div>

        )

    }

}

export default Account;