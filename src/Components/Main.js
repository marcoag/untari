import React from 'react';
import {  NavLink } from 'react-router-dom';

const Main = () => {
    return(
         <div className="container-inner">
            <div className="site-wrapper">
               <div className="site-wrapper-inner">
                <div className="inner cover">
                <h1 className="inner-heading">Welcome to Untari personal website</h1>
                <button type="button" className="btn btn-info"><NavLink to="Home">Click here to enter</NavLink></button>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Main;
