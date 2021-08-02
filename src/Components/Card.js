import React from 'react';
import './Card.css';

function Card({ src, title, description }) {
    return (
        <div className='card'>
            <div className="card__image">
                <img src={src} alt="" />
            </div>
            <div className='card__info'>
                <div className="movie__details">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <button className="card__button">Trailer</button>
            </div>
        </div>
    )
}

export default Card
