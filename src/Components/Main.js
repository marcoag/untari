import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const Main = () => {
    return(
         <div className="container-inner">
            <div className="site-wrapper">
               <div className="site-wrapper-inner">
                <div className="inner cover">
                <h1 className="inner-heading">Welcome to Untari personal website</h1>
                <a href="#" class="btn btn-info" role="button"><NavLink to="Home">Click here to enter</NavLink></a>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Main;
