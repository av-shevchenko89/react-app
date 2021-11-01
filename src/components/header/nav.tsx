import React, { useContext } from 'react';
import { Btn, LogoLink } from '../../shared';
import { CreateContext } from '../../containers';

export function Nav() {
    const add = useContext(CreateContext);

    return (
        <nav>
            <LogoLink />
            <Btn label="+ ADD MOVIE" onClick={add} />
        </nav>
    )
}
