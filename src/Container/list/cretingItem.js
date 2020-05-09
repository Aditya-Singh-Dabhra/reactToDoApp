import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './list.module.css'
class newItem extends Component{
    state={
        item:''
    }
    changeHandler=(event)=>{
        let newitem=event.target.value;
        this.setState({
            item:newitem,
        })

    };

    submitHandler=(event)=>{
        let sendingItem=this.state.item;
        this.props.onAddingItem(sendingItem);
        event.preventDefault();
        this.setState({
            item:''
        });
    };

    render(){
        return(
            <form className={this.props.classes}>
                <input type='text' 
                name='newItem' 
                placeholder='new Task' 
                onChange={this.changeHandler} value={this.state.item}></input>
                <button className={classes.button123} type='submit' name="button" onClick={this.submitHandler}>+</button>
            </form>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAddingItem:(ItemValue)=>dispatch({type:'ADDINGITEM',value:ItemValue})
    };
};

export default connect(null,mapDispatchToProps)(newItem);