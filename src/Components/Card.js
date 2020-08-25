import React from 'react';
import '../Card.css';

const card = ({id, name, email})=>{
    return (
        <div className ='card bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-4 tc' >
            <img src={`https://robohash.org/${id}?200x200`} alt ='ThePictures' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default card;