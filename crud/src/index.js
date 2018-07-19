import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import './App.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import Edit from './components/Edit';
// import Create from './components/Create';
// import Show from './components/Show';
import Main from './Main';

ReactDOM.render(

  <BrowserRouter>
    <Main />
  </BrowserRouter>,

  document.getElementById("root")
);