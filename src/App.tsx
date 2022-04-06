import React from 'react';

import './App.css';


const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}
const Header = () => {
    return (
        <div>
            <a href='#s'>Home</a>
            <a href='#s'>News Feed</a>
            <a href='#s'>Messages</a>
        </div>
    );
}
const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
            </ul>
        </div>
    );
}

export default App;
