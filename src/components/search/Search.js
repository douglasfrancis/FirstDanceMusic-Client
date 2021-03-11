import React, {  useEffect, useState } from 'react';
import Axios from 'axios';
import SearchProfile from './SearchProfile';
import domain from '../../util/domain';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import "./SearchProfile.scss";

export default function Search() {
    const [profiles, setProfiles] = useState([]);

    let query = new URLSearchParams(useLocation().search);
    let location = query.get('location');
    let service = query.get('service');

    useEffect(() => {
       if(location || service) {
        getFilteredProfiles();
       } else {
        getProfiles();
       }
        
    }, [location, service]);

    async function getFilteredProfiles() {

        const payload = {
            location: location,
            service: service
        }
        const profilesRes = await Axios.post(`${domain}/search/filter`, payload);
        setProfiles(profilesRes.data);
    };

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
        <>
        <Filter />
        <div className="search">
           
            
            
            {profiles.length > 0 ? (
                renderProfiles()
                ): (
                    <p className="no-services">No services have been added yet</p>
                ) }
            
        </div>

        </>
        
    )
}
