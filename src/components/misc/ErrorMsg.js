import React from 'react';
import "./ErrorMsg.scss";

export default function ErrorMsg({message, clear}) {
    return (
        <div className="error-msg">
            <p>{message}</p>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
