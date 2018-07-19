import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Switch, Link } from 'react-router-dom';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
//import Show from './components/Show';



class Main extends Component {
  render() {
    return (
      <div className="col-md-11">
      
        <div class="sidenav">
          <Link to="/"><span aria-hidden="true"></span>Home</Link>
          <Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link>

        </div>
        
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/create' component={Create} />
          {/* <Route path='/show/:id' component={Show} /> */}
        </Switch>
      </div>
    );
  }
}

export default Main;

















