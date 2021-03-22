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

            <Link to="/search">
            <img className="header-logo" src={logo} alt="First Dance Music Logo"/>
            </Link>
        {user === null ? (
            <><Link to="/login">
            <p>Login</p>
            </Link>

            <Link to="/register">
            <p>Register</p>
            </Link>
            </>
        ) :( user && 
            <>
            <Link to="/">
            <p>Services</p>
            </Link>
        <button onClick={logout} className='btn-logout'>Log Out</button>
            </>
            )}
            
            
<div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6057946933c0360001c8c6a0" data-style-height="40px" data-style-width="100%" data-theme="dark">
  <a href="https://uk.trustpilot.com/review/firstdancemusic.netlify.app" target="_blank" rel="noopener">Trustpilot</a>
</div>

            
            
        </div>
    )
}
