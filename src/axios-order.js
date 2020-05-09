import axios from 'axios';


const instance = axios.create({
    baseURL:'https://todo-d5f61.firebaseio.com/'
});


export default instance;