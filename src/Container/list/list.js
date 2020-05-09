import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './list.module.css';
import CreatingItem from './cretingItem';



class list extends Component{
    state={
        items:['eat','code','sleep', 'repeat'],
        check:false,
    }


    onAddingItem=(item)=>{
        let newArray=[...this.state.items];
        newArray.push(item);
        this.setState({
            items:newArray,
        });

    };

    onDeletingItem=(id)=>{
        console.log('deleting item');
        console.log(id);
        
        let updatedArray=[...this.state.items];
        updatedArray.splice(id,1);
        // console.log(updatedArray);
        this.setState({
            items:updatedArray,
            check:false
        });
        
    }


    render(){
        
        let listitems=this.props.items.map((listitem,index)=>{
            return (<div className={classes.item} key={index}>
                <input type='checkbox' name='checkbox' onClick={()=>this.props.onDeletingItem(index)} checked={this.props.check}></input>
                <p>{listitem} </p>
            </div>);
        });
        return(
            <div className={classes.box}>
            {listitems}
             <CreatingItem classes={classes.item} ></CreatingItem>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        items:state.items,
        check:state.check
    };
};

const mapDispatchToProps=dispatch=>{
    return{
       onDeletingItem:(id)=>dispatch({type:'DELETING',value:id}) 
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(list);