import React, { useEffect, useState } from 'react';
import { Btn } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch, selectFilters } from '../../store/filters-slice';

export function Search() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const { search } = filters;

    const [ value, setSearchVal ] = useState('');

    useEffect(() => {
        setSearchVal(search)
    }, [ search ]);

    const searchMovie = () => {
        dispatch(changeSearch(value));
    }

    return (
        <div className="search">
            <input type="text"
                   placeholder="What do you want to watch?"
                   className="form-control"
                   value={value}
                   onChange={e => setSearchVal(e.target.value)} />
            <Btn label="Search" onClick={() => searchMovie()} />
        </div>
    )
}
