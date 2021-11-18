import React, { useEffect, useState } from 'react';
import { Btn } from '../../shared';
interface Props {
  searchVal?: string;
  searchMovie: (value: string) => void;
}

export function Search(props: Props) {
  const { searchVal, searchMovie } = props;
  const [value, setSearchVal] = useState('');

  useEffect(() => {
    setSearchVal(searchVal);
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="form-control"
        value={value}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Btn label="Search" onClick={() => searchMovie(value)} />
    </div>
  );
}
