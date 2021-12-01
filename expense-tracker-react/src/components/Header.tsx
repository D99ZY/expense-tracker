import React from 'react';
import './Header.css';

interface HeaderProps {
    title: string;
}

const Header = ({title}: HeaderProps) => {
    return (
        <h1>
            {title}
        </h1>
    );
};

export default Header;
