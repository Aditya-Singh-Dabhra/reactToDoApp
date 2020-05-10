import React from 'react';
import auth0Client from '../Auth';

const Home=(props)=>{
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };


  return (<div className="jumbotron">
    <h1 className="display-4">Hello</h1>
  <p className="lead">This is a simple TO-Do app, a simple app which you can use to add your daily life tasks.</p>
  <hr className="my-4"></hr> 
  <p>You can add new Task at the buttom of list. Any task can be delete by click on the check-box provided with each task. </p>
  <p>TO start with To-Do app you have to first login in the app</p>
  <p className="lead">
    {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-danger font-weight-bold">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }

  </p>
  <p> Thank you.</p>
  <p>Aditya Singh Dabhra</p>
  </div>
  );}

export default Home;