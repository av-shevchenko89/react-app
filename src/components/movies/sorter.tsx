import React, { useEffect, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { Filter } from "../../movie";

interface SortOption extends Filter {
  label: string;
}

const options: SortOption[] = [
  { label: "Movie Name", sortBy: "title", sortOrder: "asc" },
  { label: "Release Date", sortBy: "release_date", sortOrder: "desc" },
  { label: "Rating", sortBy: "vote_average", sortOrder: "desc" },
];

export function Sorter() {
  let selected = [options[1]];

  useEffect(() => {
    selected = options.filter((o) => o.sortBy === sortBy);
  }, []);

  const [sortBy, setSortBy] = useState("release_date");
  const [sortOrder, setSortOrder] = useState("desc");

  const onChange = (option: SortOption[]) => {
    const { label, ...data } = option[0];
    const { sortBy, sortOrder } = data;
    setSortBy(sortBy);
    setSortOrder(sortOrder);
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
            color: "#fff",
            fontSize: "16px",
          },
          multiselectContainer: {
            color: "#424242",
            width: "180px",
            display: "inline-flex",
            cursor: "pointer",
          },
          searchBox: {
            height: "20px",
            border: "none",
            padding: "0 10px",
            width: "180px",
          },
        }}
        singleSelect
        customCloseIcon={<></>}
      />
    </div>
  );
}
