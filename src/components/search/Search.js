import React, {  useEffect, useState } from 'react';
import Axios from 'axios';
import SearchProfile from './SearchProfile';
import domain from '../../util/domain';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import ErrorMsg from '../misc/ErrorMsg';
import "./SearchProfile.scss";

export default function Search() {
    const [profiles, setProfiles] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    let query = new URLSearchParams(useLocation().search);
    let location = query.get('location');
    let service = query.get('service');


    useEffect(() => {
       if(location || service) {
        getFilteredProfiles();
        myFunction();
       } else {
        getProfiles();
        myFunction();
       }
        
    }, [location, service]);

    async function getFilteredProfiles() {

        const payload = {
            location: location,
            service: service
        }

        try{
        const profilesRes = await Axios.post(`${domain}/search/filter`, payload);
        setProfiles(profilesRes.data);
        }catch (err) {
            if(err.response) {
                if(err.response.data.msg){
                    setErrorMsg(err.response.data.msg);
                }
            }
            return;
        }
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

    var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

    return (
<>
<div id="loader"></div>
        
        {
                errorMsg && <ErrorMsg message={errorMsg} clear={() => setErrorMsg(null)}/>
            }
        <Filter getProfiles={getProfiles}/>

        <div className="bride-view animate-bottom" style={{display: "none"}} id="myDiv" >
            
        
        
        <div className="search">
            
            {profiles.length > 0 ? (
                renderProfiles()
                ): (
                    
                    <p className="no-services">No services for this criteria have been added yet</p>
                ) }
            
        </div>

        </div>

        </>
        
    )
}
