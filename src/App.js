import React from "react";
import './App.css';
import LoginPageDesign from './LoginPage/LoginPage';
import  SignUpPageDesign from './SignUpPage/SignUpPage';
import  ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import  ProductDataDesign from './Product Data/ProductData';
import {BrowserRouter, Route} from 'react-router-dom';
import Topbar from './Topbar/Topbar';
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar/>
      
    <Route exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPageDesign}/>
      <Route path='/signup' component={SignUpPageDesign}/>

      <Route path='/addproduct' component={ProductDetailsPage}/>
    <ProductDataDesign/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
