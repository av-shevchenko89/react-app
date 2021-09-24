import React from 'react';
import logo from '../../assets/images/logo.svg';

const LogoLink = ({link = '/'}) => (
    <a href={link}>
        <img src={logo} alt="netflix" />
    </a>
)

export default LogoLink;
