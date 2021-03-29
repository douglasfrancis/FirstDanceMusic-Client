import React, { useState } from 'react';
import BasicBooking from './BasicBooking';
import "./BigProfile.scss";

export default function BigProfileView( {profile}) {

const [bookingOpen, setBookingOpen] = useState(false);

function openBooking() {
    setBookingOpen(true)
};

    return (
        <div>
            <h1 id="name">{profile.name}</h1>
           
           <iframe className="profile-video"
            src={profile.link}>
            </iframe>
            <button className="btn-quote" onClick={openBooking}>Request Booking</button>
            {bookingOpen && < BasicBooking />}
        </div>
    )
}
