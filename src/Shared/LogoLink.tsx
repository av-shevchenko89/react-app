import React from 'react';
import logo from '../assets/images/logo.svg';

export const LogoLink = ({ link = '/' }) => (
    <a href={link}>
        <img src={logo} alt="netflix" />
    </a>
)
