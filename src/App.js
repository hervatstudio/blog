import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import AddPost from './components/AddPost';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  

  render() {
    
    

    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route exact path = '/' component={Home}/>
              <Route path = '/about' component={About}/>
              <Route path = '/contact' component={Contact}/>
              <Route path = '/add-post' component={AddPost}/>
              <Route path = '/:post_id' component={Post}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
