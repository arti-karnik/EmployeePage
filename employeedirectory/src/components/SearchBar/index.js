import React from "react";
import "./style.css";

const SearchBar = (props) => {
  return (
    <form>
      <div className="form-group">
        <input  name="search" type="text" className="form-control" placeholder="Search Employee Name" id="search"
        />
      </div>
    </form>
  );
};

export default SearchBar;