import React, { useEffect, useState } from 'react';
import like from "../../images/heart.png";
import "./Favourite.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

 

export default function Favourite({profile}) {

const [liked, setLiked] = useState(localStorage.getItem(profile._id) === 'true');

useEffect(() => {
    localStorage.setItem( profile._id , liked);
  }, [liked]);

  function openWhatsApp() {  
    window.open(`whatsapp://send?text= https://firstdancemusic.netlify.app/${profile._id}`);  
    }  

  const toggleLiked = () => {
    setLiked(!liked);
  };
    return (
        <div className="icons">
            <img className={`${liked ? 'like' : 'unlike'}`} onClick={toggleLiked} src={like} alt="first dance music like button"/>
            
            <Link className="share-container" onClick={openWhatsApp} >
            <FontAwesomeIcon icon={faShare} className="share-icon" size="lg"/>
            </Link>
        </div>
    )
}
