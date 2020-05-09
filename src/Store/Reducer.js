const intialState={
    items:['eat','code','sleep', 'repeat', 'React'],
    check:false
}


const reducer=(state=intialState,action)=>{
    if(action.type==='ADDINGITEM'){
        const newArray=[...state.items];
        newArray.push(action.value);
        return{
            ...state,
            items:newArray
        };
    }

    if(action.type==='DELETING'){
        let updatedArray=[...state.items];
        updatedArray.splice(action.value,1);
        return{
            ...state,
            items:updatedArray
        };
    }
    return state;
};


export default reducer;