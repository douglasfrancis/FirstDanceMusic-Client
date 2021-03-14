import React from 'react';
import "./SuccessMsg.scss";

export default function SuccessMsg({message, clear}) {
    return (
        <div className="success-msg">
            <p>{message}</p>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
