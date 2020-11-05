import React from 'react';
import Classes from './Topbar.module.css';
import {Link} from 'react-router-dom';
const Topbar = () => {

    return(
     <div className={Classes.Topbar}>
     <span  className={Classes.Menu}><Link to="/login">Login</Link></span>
     <span  className={Classes.Menu}><Link to ="/signup">Signup</Link></span>
     </div>

    )
}
export default Topbar;