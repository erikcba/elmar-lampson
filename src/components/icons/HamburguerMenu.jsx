import React from 'react';

export default function HamburgerMenu({ toggleMenu, className, theme }) {
    return (
        <button onClick={toggleMenu} className={`${className} `}>
            <span className= {`${theme === 'white' ? 'bg-white' : 'bg-black'}`} ></span>
            <span className= {`${theme === 'white' ? 'bg-white' : 'bg-black'}`}></span>
            <span className= {`${theme === 'white' ? 'bg-white' : 'bg-black'}`}></span>
        </button>
    );
}
