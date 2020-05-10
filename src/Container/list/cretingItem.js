import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './list.module.css'
class newItem extends Component{
    state={
        item:'',
        valid:true,
    }

    checkValidity=(item)=>{
        let isValid=true;
        isValid=item.trim()!==''&&this.state.valid;
        return isValid;
    };

    changeHandler=(event)=>{
        let newitem=event.target.value;
        this.setState({
            item:newitem,
        })

    };

    submitHandler=(event)=>{
        let sendingItem=this.state.item;
        let validation=this.checkValidity(sendingItem);
        if(validation){
            this.props.onAddingItem(sendingItem);
        }
        event.preventDefault();
        this.setState({
            item:'',
            valid:true,
        });
    };

    render(){
        return(
            <form className={this.props.classes}>
                <input type='text' 
                name='newItem' 
                placeholder='new Task' 
                onChange={this.changeHandler} value={this.state.item}></input>
                <button className={classes.button123} type='submit' name="button" onClick={this.submitHandler} disabled={!this.state.valid}>+</button>
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