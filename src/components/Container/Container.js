import React from 'react';
import './Container.css';
import Card from '../Card';


const Container = ({images, wasClicked}) => {
    return (
    <div className="container-me container">
        {images.map((image) => <Card
        key={image.id}
        dataId={image.id}
        img={image.img}
        clicked={image.clicked}
        wasClicked={wasClicked}
        />)}
    </div>
    );
}

export default Container;