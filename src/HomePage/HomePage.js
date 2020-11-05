import React from 'react';
import Classes from './HomePage.module.css';
import {Link} from 'react-router-dom';

const HomePage = () =>{
    return(
     
        <div>
        <Link to='/addproduct'>Add Product</Link>
        </div>
    )
}
export default HomePage;