import React from 'react';
import classes from './list.module.css';
const existingItem=(props)=>(
        <div className={classes.item} key={props.index}>
        <input type='checkbox' name='checkbox' checked={this.props.check} onClick={props.onDeleting(props.index)}></input>
        <p>{props.listitem}</p>
        </div>
);

export default existingItem;