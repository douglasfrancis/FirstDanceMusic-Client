import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ErrorMsg from '../misc/ErrorMsg';
import "./AuthForm.scss";

export default function Register() {

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formPasswordVerify, setFormPasswordVerify] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    const {getUser} = useContext(UserContext);

    const history = useHistory();

    async function register(e) {
        e.preventDefault();

        const registerData = {
            email: formEmail,
            password: formPassword,
            passwordVerify: formPasswordVerify
        }
        try{
        await Axios.post("http://localhost:5000/auth/", registerData);
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
            <h2>Register a new account</h2>
            {
                errorMsg && <ErrorMsg message={errorMsg} clear={() => setErrorMsg(null)}/>
            }
            <form onSubmit={register} className="form">
                <label htmlFor="form-email">Email</label>
                <input id="form-email" type="email" value={formEmail} onChange={(e)=> setFormEmail(e.target.value)}/>

                <label htmlFor="form-password">Password</label>
                <input id="form-password" type="password" value={formPassword} onChange={(e)=> setFormPassword(e.target.value)}/>

                <label htmlFor="form-verify">Verify Password</label>
                <input id="form-verify" type="password" value={formPasswordVerify} onChange={(e)=> setFormPasswordVerify(e.target.value)}/>

                <button type="submit" className="btn-submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in instead</Link></p>
        </div>
    )
}
