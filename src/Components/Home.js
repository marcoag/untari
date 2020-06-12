import React from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className=".bg">
            <div>
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
    );
}
 
export default Home;
