import React, { Component } from 'react';
import fire from '../../../../../config/auth/fire';
import classes from './Login.module.css';
import logo from '../../../../../assets/img/logo.png';

class Login extends Component {

    state = {
        email: null,
        password: null
    }

    emailInputHandler = ( e ) => {

        this.setState({email: e.target.value});

    }

    passwordInputHandler = ( e ) => {

        this.setState({password: e.target.value});

    }

    submitLoginHandler = () => {

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( u => {
            console.log(u);
            console.log('logged in');
        }).catch( err => {
            console.log('Error: ' + err.toString());
        })

        this.props.closeModal();
    }


    render() {

        return (

            <div className={classes.Login}>

                <div className={classes.TopLine}>
                    <img src={logo} alt='Enjoy Lotus for your next meal today!' />

                    <h3>Login To Your Account</h3>

                    <svg onClick={this.props.closeModal} width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 35.2C0.666687 16.2137 15.5667 0.866669 34 0.866669C52.4334 0.866669 67.3334 16.2137 67.3334 35.2C67.3334 54.1863 52.4334 69.5333 34 69.5333C15.5667 69.5333 0.666687 54.1863 0.666687 35.2ZM34 30.359L42.6334 21.4667L47.3334 26.3077L38.7 35.2L47.3334 44.0923L42.6334 48.9333L34 40.041L25.3667 48.9333L20.6667 44.0923L29.3 35.2L20.6667 26.3077L25.3667 21.4667L34 30.359Z" fill="#65522E"/>
                    </svg>
                </div>


                <div className={classes.Form}>

                    
                    <input 
                        type='text' 
                        name="email" 
                        placeholder='Email'
                        onChange={(e) => this.emailInputHandler(e)} 
                    />
                    <input 
                        type='password' 
                        name="password" 
                        placeholder='Password'
                        onChange={(e) => this.passwordInputHandler(e)} 
                    />
                        
                    <button 
                        className={classes.LoginButton}
                        onClick={this.submitLoginHandler}
                    >
                        Login
                    </button>

                    <button className={classes.Forgot}>
                        Forgot Password?
                    </button>

                    <span className={classes.Or}>Or</span>

                    <button className={classes.AccountButton}>
                        Create Account
                    </button>

                </div>
                
            </div>

        )
    }
    
}

export default Login;