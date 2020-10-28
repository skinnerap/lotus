import React, { Component } from 'react';
import Modal from '../../../ui/ux/modal/Modal';
import Aux from '../../../hoc/Auxi';
import classes from './Meal.module.css';

class Meal extends Component {

    state = {
        showModal: false,
        mods: null,
        upgrade: null
    }

    showModalHandler = () => {
        this.setState({showModal: true});
    }

    closeModalHandler = () => {
        this.setState({showModal: false});
    }
    
    noneCheckedHandler = (e) => {

        const copy = this.state.mods ? {...this.state.mods} : {};
        const ingredient = e.target.value;
        copy[ingredient] = 'none';
        this.setState({mods: copy})

    }

    liteCheckedHandler = (e) => {

        const copy = this.state.mods ? {...this.state.mods} : {};
        const ingredient = e.target.value;
        copy[ingredient] = 'lite';
        this.setState({mods: copy})

    }

    xtraCheckedHandler = (e) => {

        const copy = this.state.mods ? {...this.state.mods} : {};
        const ingredient = e.target.value;
        copy[ingredient] = 'xtra';
        this.setState({mods: copy})

    }

    upgradeHandler = (e) => {
        console.log(typeof e);
        e.preventDefault();
        
        const str = e.target.value;
        const arr = str.split(',');
        

        this.setState({upgrade: arr})

    }

    render() {
        let optionInitialValue = 'Add Protein';
        let modifyBtn = <div>
                            <span className={classes.Or}>Or</span>
                            <button onClick={this.showModalHandler} className={classes.Mod}>Modify</button>
                        </div>;
        if(this.props.category === 'sides') {
            optionInitialValue = 'Small Size';
            modifyBtn = <div></div>;
        } else if(this.props.category === 'drinks') {
            optionInitialValue = '12oz Can';
            modifyBtn = <div></div>;
        } else if(this.props.category === 'dessert') {
            optionInitialValue = 'Small Size'
            modifyBtn = <div></div>
        }

        
        
        return (
            <Aux>

                <div className={classes.Meal}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description}</p>
                    <div>
                        <span className={classes.Price}>${this.props.basePrice}</span>
                        <span>
                            <select onChange={(e) => this.upgradeHandler(e)}>
                                <option value="none">{optionInitialValue}</option>
                                {this.props.upgrades.map((choice, index) => {
                                    return <option value={[choice.name, choice.price]} key={choice.name + index}>{choice.name} +${choice.price.toFixed(2)}</option>
                                })}
                            </select>
                        </span>
                    </div>
                    
                    <button onClick={() => this.props.clickedAdd(this.props.name, this.state.mods, this.state.upgrade)} className={classes.Add}>Add to Cart</button>
                    {modifyBtn}
                    
                </div>

                <Modal show={this.state.showModal} clicked={this.props.closeModModal}>
                    <div className={classes.ModModal}>
                        <h6 className={classes.ModsHeader}>Modify Your Meal</h6>
                            <h5 className={classes.ModsSubheader}>{this.props.name}</h5>
                        {this.props.mods.map(mod => (
                            <div className={classes.ModContainer}>
                                <div className={classes.ModName}>
                                    <span>{mod} </span>
                                </div> 
                                <div className={classes.ModForm}>
                                    
                                    <label className={classes.container} onChange={(e) => this.noneCheckedHandler(e)} for={mod}>None<input type="radio" name={mod} value={mod} />
                                    <span className={classes.checkmark}></span></label>
                                    
                                    <label className={classes.container} onChange={(e) => this.liteCheckedHandler(e)} for={mod} for={mod}>Lite<input type="radio" name={mod} value={mod} />
                                    <span className={classes.checkmark}></span></label>
                                    
                                    <label className={classes.container} onChange={(e) => this.xtraCheckedHandler(e)} for={mod} for={mod}>Xtra<input type="radio" name={mod} value={mod} />
                                    <span className={classes.checkmark}></span></label>

                                </div>
                            </div>
                        ))}
                        <p>* Leave an option unchecked to order the regular amount of that option!</p>

                        <select onChange={(e) => this.upgradeHandler(e)}>
                            <option value='none'>Add Protein</option>
                            {this.props.upgrades.map((choice, index) => {
                                return <option value={[choice.name, choice.price]} key={choice.name + index}>{choice.name} +${choice.price}</option>
                            })}
                        </select>
                        <button 
                            onClick={() => this.props.submitModifiedOrder(this.props.name, this.state.mods, this.state.upgrade)}
                            className={classes.SubmitModOrderBtn}
                        >
                            Add Customized Meal
                        </button>
                    </div>
                </Modal>

            </Aux>
        )
    }
    

}

export default Meal;