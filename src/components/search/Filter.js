import React from 'react';
import { Link } from 'react-router-dom';
import "./Filter.scss";

export default function Filter( {getProfiles}) {

    function clearSearch(e){
        e.preventDefault();
        getProfiles();
    };

    return (
        <div className="filter">

            <form>
            
            <select id="service" name="service"  >
                <option value="" disabled selected hidden>Service</option>
                <option value="Aisle Walk">Aisle Walk</option>
                <option value="Band">Band</option>
                <option value="DJ">DJ (Sax)</option>
                <option value="Drinks Reception">Drinks Reception</option>
                <option value="First Dance">First Dance</option>
                <option value="Instrumental">Instrumental</option>
                <option value="Wandering">Wandering Musicians</option>
            </select> 
            
            <select id="location" name="location" >
                <option value="" disabled selected hidden>Location</option>
                <option value="North West">North West</option>
                <option value="North East">North East</option>
                <option value="South West">South West</option>
                <option value="South East">South East</option>
                <option value="West Midlands">West Midlands</option>
                <option value="East Midlands">East Midlands</option>
                <option value="London">London</option>
                <option value="East of England">East of England</option>
                <option value="Yorkshire and the Humber">Yorkshire and the Humber</option>    
            </select>

                <button>Update</button>
                <button onClick={clearSearch}>Clear</button>
            </form>
                

            <Link to="/favourites">My Favourites</Link>
           
        </div>
    )
}
