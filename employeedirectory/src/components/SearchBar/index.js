import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={e => props.handleInputChange(e, "")}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search employee directory"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBar;