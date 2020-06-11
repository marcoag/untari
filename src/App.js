import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Navigation from './Components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/blog" component={Blog} />
          {/*   <Route path="/about" component={About}/>*/}
           {/*  <Route path="/contact" component={Contact}/> */}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
