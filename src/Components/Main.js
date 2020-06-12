import React from 'react';
import {  NavLink } from 'react-router-dom';

const Main = () => {
    return(
         <div className="container-inner">
            <div className="site-wrapper">
               <div className="site-wrapper-inner">
                <div className="inner cover">
                    <h1 className="inner-heading">Welcome to Untari personal website</h1>
                    <p className="lead">
                        <button type="button" className=" btn btn-success"><NavLink to="Home">Click here to enter</NavLink></button>
                    </p>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Main;
