import React, { Component } from 'react';
import Backdrop from '../backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';
import classes from './Modal.module.css';

class Modal extends Component {

    render() {


        {/* Utilizing React.cloneElement to pass props to props.children */}
        const children = React.Children.map(this.props.children, child => {

          return React.cloneElement(child, {

            closeModal: this.props.clicked

          });

        });

        return (

            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.clicked} />

                <div 
                    className={classes.Modal}
                    style=
                    { 
                        {
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-800vh)',
                            opacity: this.props.show ? '1' : '0',
                            display: this.props.show ? 'flex' : 'hidden'
                        } 
                    }
                >
                    {children}
                </div>

            </Aux>
            
        )  

    }

}

export default Modal;