import React, { useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import './sorter.css';

interface SortOption {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  label: string;
}

const options: SortOption[] = [
  { label: 'Movie Name', sortBy: 'title', sortOrder: 'asc' },
  { label: 'Release Date', sortBy: 'release_date', sortOrder: 'desc' },
  { label: 'Rating', sortBy: 'vote_average', sortOrder: 'desc' },
];

interface Props {
  sortBy: 'title' | 'release_date' | 'vote_average';
}

export function Sorter({sortBy}: Props) {
  const [selected, setSelected] = useState([options[1]]);

  useEffect(() => {
    const selected = options.filter((o) => o.sortBy === sortBy);
    setSelected(selected);
  }, [sortBy]);

  const onChange = (option: SortOption[]) => {
    const { label } = option[0];

    setSelected([option[0]])
  };

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
            cursor: 'pointer',
          },
          searchBox: {
            height: '20px',
            border: 'none',
            padding: '0 10px',
            width: '180px',
          },
        }}
        singleSelect
        customCloseIcon={<></>}
      />
    </div>
  );
}
