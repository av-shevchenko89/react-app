import React from 'react';
import { Btn, LogoLink } from '../../Shared';

export default function Nav() {
    return (
        <nav>
            <LogoLink />
            <Btn label="+ ADD MOVIE" />
        </nav>
    )
}
