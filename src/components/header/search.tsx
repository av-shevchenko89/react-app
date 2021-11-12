import React, { useState, useEffect, useContext } from 'react';
import { HeaderContext } from '../../pages/search-page';
import { Btn } from '../../shared';

export function Search({ searchQuery }: { searchQuery: string }) {
  const [value, setSearchVal] = useState('');
  const {handleSearch} = useContext(HeaderContext);

  useEffect(() => {
    setSearchVal(searchQuery || '');
  }, [searchQuery]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="form-control"
        value={value}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Btn label="Search" onClick={() => handleSearch(value)} />
    </div>
  );
}
