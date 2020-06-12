import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Home from './Components/Home';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
 
class App extends Component {
  render() {
    return (      
        <React.Fragment>
                <BrowserRouter>
                   <div>
                       <Switch>
                            <Route exact path="/" component={Main} />
                            <Route path="/home" component={Home} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/> 
                      </Switch>
                    </div>
                </BrowserRouter>
        </React.Fragment> 
    );
  }
}
 
export default App;
