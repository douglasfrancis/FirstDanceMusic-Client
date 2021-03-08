import Axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import "./Navbar.scss";

export default function Navbar() {

    const {user, getUser} = useContext(UserContext);

    async function logout(){
        await Axios.get("http://localhost:5000/auth/logOut");

        await getUser();
    }

    return (
        <div className="navbar">

            <Link to="/">
            <h1>First Dance Music</h1>
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
