import React, { useState } from 'react';
import {Btn} from '../../Shared';

export default function Search() {
    const [ value, setSearchVal ] = useState('');

    return (
        <div className="search">
            <input type="text"
                   placeholder="What do you want to watch?"
                   className="form-control"
                   value={value}
                   onChange={e => setSearchVal(e.target.value)} />
            <Btn label="Search" onClick={() => console.log(value)} />
        </div>
    )
}
