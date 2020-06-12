import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar } from 'reactstrap';

const Home = () => {
    return (
       <div>
              <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="container">
                    <div className="masthead clearfix">
                        <div className="container inner">
                        <h3 className="masthead-brand">Untari.com</h3>
                        <nav>
                            <ul className="nav masthead-nav">
                                <li className="active"><a href="#Home">Home</a></li>
                                <li><NavLink to="About">About</NavLink></li>
                                <li><NavLink to="Contact">Contact</NavLink></li>
                                <li><NavLink to="Blog">Blog</NavLink></li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className="inner cover">
                        <h1 className="cover-heading">Welcome to Untari personal website</h1>
                        <button type="button" className="btn btn-success">Click here to enter</button>
                    </div>
                    </div>
                </div>
                </div>
       </div>
    );
}
 
export default Home;
