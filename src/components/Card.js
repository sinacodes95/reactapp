import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'">
            <img alt={id} src={`https://robohash.org/${id}?size=200x200`}></img>
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;