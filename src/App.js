import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import { Link, Route, Switch } from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';

function App() {
  return (
    <div>
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">

       
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/products">Products</Link></li>

      </ul>
     </nav>

      
       <Route path="/" component={Home}/>
       <Route path="/Category" component={Category}/> 
       <Route path="/Products" component={Products}/>
  </div>
  );
}

export default App;
