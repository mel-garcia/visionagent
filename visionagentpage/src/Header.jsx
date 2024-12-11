import React from 'react';
import './assets/Header.css';

const Header = () => {
    return (
        <header>
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li style={{ marginRight: '15px' }}>
                        <a href="#home">Home</a>
                    </li>
                    <li style={{ marginRight: '15px' }}>
                        <a href="#about" >About</a>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
