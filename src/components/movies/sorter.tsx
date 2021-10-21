import React from 'react';

interface Props {
    sortBy: string;
    sort: (sortBy: string) => void;
}

interface SortOption {
    label: string;
    value: string;
    order: 'asc' | 'desc'
}

const sortOptions: SortOption[] = [
    { label: 'Movie Name', value: 'title', order: 'asc' },
    { label: 'Release Date', value: 'year', order: 'desc' },
    { label: 'Rating', value: 'rating', order: 'desc' },
];

export function Sorter({ sortBy, sort }: Props) {
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
