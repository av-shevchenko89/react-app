import React, { useContext, useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { Filter } from '../../movie';
import { useSearchParams } from 'react-router-dom';
import { lte } from 'lodash';
import { FilterContext } from '../../pages/search-page';

interface SortOption extends Filter {
  label: string;
}

const options: SortOption[] = [
  { label: 'Movie Name', sortBy: 'title', sortOrder: 'asc' },
  { label: 'Release Date', sortBy: 'release_date', sortOrder: 'desc' },
  { label: 'Rating', sortBy: 'vote_average', sortOrder: 'desc' },
];

export function Sorter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState([options[1]]);
  const {changeParams} = useContext(FilterContext);

  useEffect(() => {
    const sortBy = searchParams.get('sortBy') || 'release_date';
    const selected = options.filter((o) => o.sortBy === sortBy);
    setSelected(selected);
  }, []);

  const onChange = (option: SortOption[]) => {
    const { label, ...data } = option[0];
    const { sortBy, sortOrder } = data;

    changeParams({ sortBy, sortOrder });
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
