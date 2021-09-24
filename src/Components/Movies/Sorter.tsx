import React, { useState } from 'react';

interface SortOption {
    label: string;
    value: string;
}

const sortOptions: SortOption[] = [
    { label: 'Movie Name', value: 'title' },
    { label: 'Release Date', value: 'date' },
];

export default function Sorter() {
    const [ sortBy, sort ] = useState('date');

    return (
        <div className="sorter">
            <label>Sort By</label>
            <select value={sortBy} onChange={e => sort(e.target.value)}>
                {sortOptions.map((opt: SortOption, i) => (
                    <option value={opt.value} key={i}>{opt.label}</option>
                ))}
            </select>
        </div>
    )
}
