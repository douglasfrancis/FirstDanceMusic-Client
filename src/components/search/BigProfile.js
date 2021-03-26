import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import "./BigProfile.scss";
import domain from '../../util/domain';
import { useParams } from 'react-router';
import BigProfileView from './BigProfileView';

export default function BigProfile(props) {
    const [profile, setProfile] = useState(null)

    useEffect(()=>{
        getProfile();
    },[]);

    const { id } = useParams();

    async function getProfile() {
        const profilesRes = await Axios.get(`${domain}/search/${id}/`);
        setProfile(profilesRes.data);
    };

    console.log(profile);

    return (
        <div id="big-profile">
           {!profile ? (<p>Something seems to have gone wrong. Please contact us directly so we can ensure you get the best musicians for your big day</p>) : 
           < BigProfileView profile= {profile}/>
           
           }


            
            
        </div>
    )
}
