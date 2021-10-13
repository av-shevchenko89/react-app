import React, { useContext } from 'react';
import { Btn, LogoLink } from '../../Shared';
import { CreateContext } from '../../App';

export function Nav() {
    const add = useContext(CreateContext)

    return (
        <nav>
            <LogoLink />
            <Btn label="+ ADD MOVIE" onClick={add}/>
        </nav>
    )
}
