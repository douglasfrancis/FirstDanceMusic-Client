import React from 'react';
import { useLocation } from 'react-router';
import "./Booking-Form.scss";

export default function BookingForm( props ) {

    const location = useLocation();
    console.log(location.state)

    return  (
        <div className="booking-form">
        <h2>Booking Request Form</h2>
        <form>
            <label htmlFor="bride-name">Your Full Name: </label>
            <input id="bride-name" type="text"/>

            <label htmlFor="bride-email">Email Address: </label>
            <input id="bride-email" type="email"/>

            <label htmlFor="bride-number">Contact Number: </label>
            <input id="bride-number" type="text"/>

            <label htmlFor="wedding-date">Date of Wedding: </label>
            <input id="wedding-date" type="date"/>

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
