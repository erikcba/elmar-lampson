import React from 'react';

export default function HamburgerMenu({ toggleMenu, className }) {
    return (
        <button onClick={toggleMenu} className={className}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}
