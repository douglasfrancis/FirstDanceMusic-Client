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

  async function getFavourites() {
      var arr = [];
      
      
        for(var i=0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var value = localStorage[key];
          if(value == 'true' ){
              arr.push(key)
          }; 
          setUsers(arr);
      };

      let profiles = [];
      for (i = 0; i < users.length; i++) {
        profiles.push(axios.get(`${domain}/search/${users[i]}`))
      }
      
      Promise.all(profiles)
        .then(responses => console.log(responses));


};

  return (
    <div>
      <div id='maindiv'>
              <h1>Favourites</h1>

              {users.length < 1 && <p>No profiles have been added to your favourites yet</p>}
      
              {profiles.map((profile, i) => <SearchProfile key={i} profile= {profile} />)}
       
           </div>
    </div>
  )
};
