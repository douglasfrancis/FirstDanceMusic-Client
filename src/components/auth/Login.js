import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import domain from '../../util/domain';
import ErrorMsg from '../misc/ErrorMsg';
import "./AuthForm.scss";

export default function Login() {

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    const {getUser} = useContext(UserContext)

    const history = useHistory();
    

    async function login(e) {
        e.preventDefault();

        const loginData = {
            email: formEmail,
            password: formPassword
        }
        try{
            await Axios.post(`${domain}/auth/login`, loginData);
        } catch (err) {
            if(err.response) {
                if(err.response.data.msg){
                    setErrorMsg(err.response.data.msg);
                }
            }
            return;
        }
        
        await getUser();
        history.push("/");
    }

    return (
        <div className="auth-form">
            <h2>Log In</h2>
            {
                errorMsg && <ErrorMsg message={errorMsg} clear={() => setErrorMsg(null)}/>
            }
            <form onSubmit={login} className="form">
                <label htmlFor="form-email">Email</label>
                <input id="form-email" type="email" value={formEmail} onChange={(e)=> setFormEmail(e.target.value)}/>

                <label htmlFor="form-password">Password</label>
                <input id="form-password" type="password" value={formPassword} onChange={(e)=> setFormPassword(e.target.value)}/>

                

                <button type="submit" className="btn-submit">Log in</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    )
}
