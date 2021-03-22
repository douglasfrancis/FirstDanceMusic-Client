import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import domain from '../../util/domain';
import Favourite from './Favourite';
import "./SearchProfile.scss";
import { Link } from 'react-router-dom';


export default function SearchProfile({profile}) {

    const [quoteOpen, setQuoteOpen] = useState(false);
    const [numberOfSets, setNumberOfSets] = useState(0);
    const [showCalculate, setShowCalculate] = useState(false);
    const [requestBooking, setRequestBooking] = useState(false);
 
    let calculatePrice = Math.round(numberOfSets*profile.price*1.15);
    
    return (
        <div className="search-profile">
            {quoteOpen && (
                <div className="quote-form">
                <h2>Quote Calculator</h2>
                <form >
                    <label htmlFor="name">Artist Name: </label>
                    <input id="name" value={profile.name}/><br/>

                    <label htmlFor="service">Booking for: </label>
                    <input id="service" value={profile.service}/><br/>

                    
                    <label htmlFor="sets">Number of 45 minute sets (Set as 1 if Aisle Walk or First Dance): </label>
                    <input id="sets" type="number" value={numberOfSets} onChange={(e)=> setNumberOfSets(e.target.value)}/><br/>
                    
                    <button className="calculate-btn" type="button" onClick={()=> {setShowCalculate(true); setRequestBooking(true);}}>Calculate</button>
                </form>
                {showCalculate && <h2>Current Price: £{calculatePrice}</h2>}

                {requestBooking && <Link to={{ pathname:"/bookings", state: {name: profile.name, sets: numberOfSets, service: profile.service, quote: calculatePrice} }} className="booking-btn">Request Booking</Link>}
                
                
                <button className="close-btn" onClick={()=>setQuoteOpen(false)}>Close</button>

                </div>
                
            )}
            
            <iframe className="profile-video"
            src={profile.link}>
            </iframe>

            <div className="profile-info">
                
            {profile.name && <h2 className="name">{profile.name}</h2>}

            <Favourite profile={profile}/>
            
        
            <button className="btn-quote" onClick={()=> setQuoteOpen(true)} >Instant Quote</button>
            
            </div>

        </div>
    )
}
