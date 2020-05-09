import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../Auth';
import classes from './navBar.module.css';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className={classes.Toolbar}>
      <Link className="navbar-brand" to={auth0Client.isAuthenticated()?'/list':'/'}>
        Q&App
      </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);