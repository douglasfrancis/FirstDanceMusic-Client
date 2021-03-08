import Axios from 'axios';
import React from 'react';
import domain from '../../util/domain';
import "./Profile.scss";

export default function Profile({profile, getProfiles, editService}) {

   async function deleteService() {

    if(window.confirm("Are you sure you want to delete?")){

    await Axios.delete(`${domain}/service/${profile._id}`);

    getProfiles();
   }
   };

    return (
        <div className="profile">
            <div className="profile-info">
            {profile.name && <h2 className="name">Act Name: {profile.name}</h2>}
            {profile.location && <p className="location">Act Location: {profile.location}</p>}
            {profile.service && <p className="service">Service: {profile.service}</p>}
            {profile.price && <p className="price">Pricer per set: £{profile.price}</p> }
            {profile.link && <p className="link">Video Link: {profile.link}</p>}

            <button className="btn-edit" onClick={()=> editService(profile)}>Edit</button>
            <button className="btn-delete" onClick={deleteService}>Delete</button>
            </div>
            
            

            <iframe className="profile-video"
            src={profile.link}>
            </iframe>

            
        </div>
    )
}
