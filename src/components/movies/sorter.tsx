import React, { useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortBy, selectFilters } from '../../store/filters-slice';
import { Filter } from '../../movie';


interface SortOption extends Filter {
    label: string;
}

const options: SortOption[] = [
    { label: 'Movie Name', sortBy: 'title', sortOrder: 'asc' },
    { label: 'Release Date', sortBy: 'release_date', sortOrder: 'desc' },
    { label: 'Rating', sortBy: 'vote_average', sortOrder: 'desc' },
];

export function Sorter() {
    let selected = [ options[1] ];

    useEffect(() => {
        selected = options.filter(o => o.sortBy === sortBy)
    }, []);

    const filters = useSelector(selectFilters);
    const { sortBy } = filters;

    const dispatch = useDispatch();

    const onChange = (option: SortOption[]) => {
        const { label, ...data } = option[0];
        dispatch(changeSortBy(data));
    }

    return (
        <div className="sorter">
            <label>Sort By</label>

            <Multiselect
                selectedValues={selected}
                onSelect={onChange}
                options={options}
                displayValue="label"
                style={{
                    chips: {
                        color: '#fff',
                        fontSize: '16px',
                    },
                    multiselectContainer: {
                        color: '#424242',
                        width: '180px',
                        display: 'inline-flex',
                        cursor: 'pointer'
                    },
                    searchBox: {
                        height: '20px',
                        border: 'none',
                        padding: '0 10px',
                        width: '180px',
                    }
                }}
                singleSelect
                customCloseIcon={<></>}
            />
        </div>
    )
}
