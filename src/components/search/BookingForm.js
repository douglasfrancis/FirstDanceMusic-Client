import React, { useState } from 'react';
import { useLocation } from 'react-router';
import "./Booking-Form.scss";
import Axios from "axios";
import domain from '../../util/domain';
import ErrorMsg from '../misc/ErrorMsg';
import SuccessMsg from '../misc/SuccessMsg';

export default function BookingForm( props ) {

    const [brideName, setBrideName] = useState("");
    const [brideEmail, setBrideEmail] = useState("");
    const [brideNumber, setBrideNumber] = useState("");
    const [weddingDate, setWeddingDate] = useState("");
    const [weddingVenue, setWeddingVenue] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const location = useLocation();
   
    async function sendFormData(e){
        e.preventDefault();

        const payload = {
            name: brideName,
            email: brideEmail,
            number: brideNumber,
            date: weddingDate,
            venue: weddingVenue,
            artistName: location.state.name,
            service: location.state.service,
            sets: location.state.sets,
            quote: location.state.quote
        }
        
            await Axios.post(`${domain}/search/`, payload)
            .then((response) => {
                setSuccessMsg(response.data.msg);
              }, (err) => {
                if(err.response) {
                    if(err.response.data.msg){
                        return setErrorMsg(err.response.data.msg);
                        
                    }
                }
                
              });
        
        
        clearFields();
        
    };

    function clearFields() {
        setBrideName("");
        setBrideEmail("");
        setBrideNumber("");
        setWeddingDate("");
        setWeddingVenue("");
    };

    return  (
        <div className="booking-form">
        <h2>Booking Request Form</h2>
        {
                errorMsg && <ErrorMsg message={errorMsg} clear={() => setErrorMsg(null)}/>
            }

{
                successMsg && <SuccessMsg message={successMsg} clear={() => setSuccessMsg(null)}/>
            }
        <form onSubmit={sendFormData}>
            <label htmlFor="bride-name">Your Full Name: </label>
            <input id="bride-name" type="text" value={brideName} onChange={(e)=> setBrideName(e.target.value)}/>

            <label htmlFor="bride-email">Email Address: </label>
            <input id="bride-email" type="email" value={brideEmail} onChange={(e)=> setBrideEmail(e.target.value)}/>

            <label htmlFor="bride-number">Contact Number: </label>
            <input id="bride-number" type="text" value={brideNumber} onChange={(e)=> setBrideNumber(e.target.value)}/>

            <label htmlFor="wedding-date">Date of Wedding: </label>
            <input id="wedding-date" type="date" value={weddingDate} onChange={(e)=> setWeddingDate(e.target.value)}/>

            <label htmlFor="wedding-venue">Wedding Venue: </label>
            <input id="wedding-venue" type="text" value={weddingVenue} onChange={(e)=> setWeddingVenue(e.target.value)}/>

            <h3>Musician request details:</h3>

            <input id="artist-name" value={`Artist Name - ${location.state.name}`}
            />
            <input id="artist-service" value={`Service requested - ${location.state.service}`} 
            />
            <input id="artist-sets" value={`Number of sets - ${location.state.sets}`} 
            />
            <input id="artist-quote" value={`£${location.state.quote} (Includes any fees)`}
            />
            

            <button className="submit-btn" type="submit">Submit</button>
        </form>

        
            
        </div>
    )
}
