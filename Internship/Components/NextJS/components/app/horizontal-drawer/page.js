'use client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderCards from '../components/RenderCards';
import config from '../data/config';  // Import cardData
import './styling.css';

const MainPage = () => {
    return (
        <div className="cardContainer">
            <h1>The 7 Wonders of the World</h1>
   
            <RenderCards data={config} />

            
        </div>
    );
};

export default MainPage;
