import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import SearchProfile from './SearchProfile';
import { Link } from 'react-router-dom';
import domain from '../../util/domain';

export default function Search() {

    const [profiles, setProfiles] = useState([]);

    
    useEffect(() => {
       
        getProfiles();
    }, []);

    async function getProfiles() {
        const profilesRes = await Axios.get(`${domain}/search/`);
        setProfiles(profilesRes.data);
    };

    function renderProfiles() {
        return profiles.map((profile, i) => {
          return  <SearchProfile key={i} 
          profile={profile} 
          getProfiles={getProfiles}
          />
        })
    };

   

    return (
        <div className="search">
            <h2>Find Musicians</h2>
            
            {profiles.length > 0 ? (
                renderProfiles()
                ): (
                    <p className="no-services">No services have been added yet</p>
                ) }
            
        </div>
    )
}
