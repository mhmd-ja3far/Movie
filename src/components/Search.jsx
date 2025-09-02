import React from "react";

function Search({ SearchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="search.svg" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={SearchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
