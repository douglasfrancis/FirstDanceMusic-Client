import React from 'react'

export default function BigProfileView( {profile}) {
    return (
        <div>
            <h1>{profile.name}</h1>
           
           <iframe className="profile-video"
            src={profile.link}>
            </iframe>
        </div>
    )
}
