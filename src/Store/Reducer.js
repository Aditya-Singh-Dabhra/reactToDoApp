const intialState=()=>{
    if(localStorage.getItem('list')===null){
        let ite={
            items:['code','repeat','sleep'],
            check:false
        }
        return ite;
    }else{
        let local={
            items:localStorage.getItem('list').split(","),
            check:false
        }
        return local;
    }
};


const reducer=(state=intialState(),action)=>{
    if(action.type==='ADDINGITEM'){
        const newArray=[...state.items];
        newArray.push(action.value);
        console.log(newArray);
            localStorage.setItem('list',newArray);
        let updateArr=localStorage.getItem('list');
        let updatedArray=updateArr.split(",");
        console.log(updatedArray);
        return{
            ...state,
            items:updatedArray,
        };
    }

    if(action.type==='DELETING'){
        let updateArr=localStorage.getItem('list');
        let updatedArray=updateArr.split(",");
        updatedArray.splice(action.value,1);
        console.log(updatedArray);
        localStorage.setItem('list',updatedArray);
        return{
            ...state,
            items:updatedArray
        };
    }
    return state;
};


export default reducer;