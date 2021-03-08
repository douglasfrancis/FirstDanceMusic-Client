import Axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import domain from '../../util/domain';
import "./Navbar.scss";
import logo from "../../images/fdm-white.png";

export default function Navbar() {

    const {user, getUser} = useContext(UserContext);

    async function logout(){
        await Axios.get(`${domain}/auth/logOut`);

        await getUser();
    }

    return (
        <div className="navbar">

            <Link to="/">
            <img className="header-logo" src={logo}/>
            </Link>
        {user === null ? (
            <><Link to="/login">
            <p>Login</p>
            </Link>

            <Link to="/register">
            <p>Register</p>
            </Link>
            </>
        ) :( user && <button onClick={logout} className='btn-logout'>Log Out</button>)}
            

            
            
        </div>
    )
}
