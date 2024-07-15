'use client';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../components/Calendar';

const MainPage = () => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    };

    const fetchWeather = async (zip) => {
        const apiKey = 'random key';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zip}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleFetchWeather = () => {
        if (zipCode) {
            fetchWeather(zipCode);
        } else {
            console.log('Please enter a zip code.');
        }
    };

    return (
        <div>
            <h1>The 7 Wonders of the World</h1>
            <Calendar></Calendar>

            <h2>Weather Information</h2>
            <input 
                type="text" 
                value={zipCode} 
                onChange={handleZipCodeChange} 
                placeholder="Enter Zip Code" 
            />
            <button onClick={handleFetchWeather}>Get Weather</button>

            <h2>Weather Data</h2>
            {weatherData && (
                <code>
                    {JSON.stringify(weatherData, null, 2)}
                </code>
            )}
        </div>
    );
};

export default MainPage;
