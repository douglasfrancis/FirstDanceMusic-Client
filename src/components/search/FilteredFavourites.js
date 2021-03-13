import React, { useEffect, useState } from 'react';
import SearchProfile from './SearchProfile';
import axios from 'axios';
import domain from '../../util/domain';


export default function FilteredFavourites() {

  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(()=>{
    getFavourites();

  },[]);

  function getFavourites() {
      var arr = [];
      var data = [];

        for(var i=0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var value = localStorage[key];
          if(value == 'true' ){
              arr.push(key)
          }; 
          setUsers(arr);
      };
     
        for(var j=0; j < arr.length; j++) {
           axios.get(`${domain}/search/${arr[j]}`)
          .then(res => {
             return data.push( res.data );
          })
          setProfiles(data);
      } 
};

function renderProfiles() {
  return profiles.map((profile, i) => {
    return  console.log(profile);
    <SearchProfile key={i} 
    profile={profile} 
    />
  })
};

  return (
    <div>
      <div id='maindiv'>
              <h1>Favourites</h1>

              {users.length > 0 ? (
                renderProfiles()
                ): (
                    <p className="no-services">No profiles have been added to your favourites yet</p>
                ) }
            
           </div>
    </div>
  )
};
