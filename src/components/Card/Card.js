import React from 'react';
import './Card.css';
const Card = ({dataId, img, clicked, wasClicked}) => {
    let cardStyle = {
        backgroundImage: `url(${img})`
    };

   return (<div onClick={() => wasClicked(dataId)} role="img" className="click-item" style={cardStyle} ></div>)
}

export default Card;