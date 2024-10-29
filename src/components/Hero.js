import React from 'react';

export default function Hero() {
    return (
        <section className="hero">
            <h1>TRAVEL WITH US</h1>
            <h2>DISCOVER THE WORLD</h2>
            <div className="search-form">
                <button className="active">✈️ Flights</button>
                <button>🏨 Hotels</button>
                <div className="form-inputs">
                    <select>
                        <option>London (LHR)</option>
                    </select>
                    <select>
                        <option>Milan (MXP)</option>
                    </select>
                    <select>
                        <option>Round Trip</option>
                    </select>
                    <input type="date" defaultValue="2023-05-15" />
                    <input type="date" defaultValue="2023-05-17" />
                    <select>
                        <option>2 adults</option>
                    </select>
                    <button className="discover">Discover →</button>
                </div>
            </div>
            <div className="globe">🌍</div>
        </section>
    );
}