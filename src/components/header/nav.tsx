import React, { useContext } from 'react';
import { Btn, LogoLink } from '../../shared';
import { HeaderContext } from '../../pages/search-page';

export function Nav() {
    const {handleCreate} = useContext(HeaderContext);

    return (
        <nav>
            <LogoLink />
            <Btn label="+ ADD MOVIE" onClick={handleCreate} />
        </nav>
    )
}
