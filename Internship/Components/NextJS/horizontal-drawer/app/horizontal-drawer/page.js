'use client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderCards from '../components/RenderCards';
import cardData from '../data/cardData';  // Import cardData
import './styling.css';

const MainPage = () => {
    return (
        <div className="cardContainer">
            <h1>The 7 Wonders of the World</h1>
   
            <RenderCards data={cardData} />
        </div>
    );
};

export default MainPage;
