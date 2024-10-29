import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Flight</div>
            <div className="search">
                <input type="text" placeholder="Search for anything" />
                <button>🔍</button>
            </div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/">Flights</a>
                <a href="/">Hotels</a>
                <a href="/">Services</a>
            </nav>
            <div className="user-controls">
                <button>👤</button>
                <select>
                    <option>EN</option>
                </select>
                <select>
                    <option>USD</option>
                </select>
            </div>
        </header>
    );
}