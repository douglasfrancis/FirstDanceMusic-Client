import React, { useEffect, useState } from 'react';
import like from "../../images/heart.png";
import "./Favourite.scss";

export default function Favourite({profile}) {

const [liked, setLiked] = useState(localStorage.getItem(profile._id) === 'true');

useEffect(() => {
    localStorage.setItem( profile._id , liked);
  }, [liked]);

  const toggleLiked = () => {
    setLiked(!liked);
  };
    return (
        <div className="like-btn">
            <img className={`${liked ? 'like' : 'unlike'}`} onClick={toggleLiked} src={like} alt="first dance music like button"/>
        </div>
    )
}
