import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <div>
      <NavBar />
       <SearchBar/>
    </div>
  );
};

export default App;