import React from 'react';

interface Props {
    sortBy: string;
    sort: (sortBy: string) => void;
}

interface SortOption {
    label: string;
    value: string;
}

const sortOptions: SortOption[] = [
    { label: 'Movie Name', value: 'title' },
    { label: 'Release Date', value: 'year' },
];

export default function Sorter({ sortBy, sort }: Props) {
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
