import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import Profile from './Profile';
import ServiceEditor from './ServiceEditor';
import "./Home.scss";
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Home() {

    const [profiles, setProfiles] = useState([]);
    const [profileEditorOpen, setProfileEditorOpen] = useState(false);
    const [editServiceData, setEditServiceData] = useState(null);

    const {user} = useContext(UserContext);
    

    useEffect(() => {
        if(!user) setProfiles([]);
        else getProfiles();
    }, [user]);

    async function getProfiles() {
        const profilesRes = await Axios.get("http://localhost:5000/service/");
        setProfiles(profilesRes.data);
    };

    function renderProfiles() {
        return profiles.map((profile, i) => {
          return  <Profile key={i} 
          profile={profile} 
          getProfiles={getProfiles}
          editService={editService}/>
        })
    };

    function editService(profileData){
        setEditServiceData(profileData);
        setProfileEditorOpen(true);
    };

    function clearEditServiceData(){
        setEditServiceData(null);
    }

    return (
        <div className="home">
            {!profileEditorOpen && user && (<button className="add-service-btn" onClick={() =>{setProfileEditorOpen(true)}}>Add Service</button>)}
            {profileEditorOpen && <ServiceEditor 
            getProfiles={getProfiles} 
            setProfileEditorOpen={setProfileEditorOpen}
            editServiceData={editServiceData}
            clearEditServiceData={clearEditServiceData}/>}
            {profiles.length > 0 ? (
                renderProfiles()
                ): (
                    user &&<p className="no-services">No services have been added yet</p>
                ) }
            {user ===null && (
                <div className="no-user-msg">
                <h2>Welcome to Service Manager</h2>
                <Link to="/register">Register Here</Link>
                </ div>
            )}
        </div>
    )
}
