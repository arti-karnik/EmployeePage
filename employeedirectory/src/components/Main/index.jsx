import React, { Component } from "react";
import EmployeeList from "../EmployeeList";
import API from "../../utils/API";
import SearchBar from "../SearchBar/index.jsx";

class Main extends Component {
  state = {
    result: [],
    direction: {
      email: 'ascending',
      phone: 'ascending'
    },
    AllEmployees: [],
    EmployeeList: [],
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ 
        AllEmployees: res.data.results,
        EmployeeList: res.data.results
       }))
      .catch(err => console.log(err));
  };

  // Method to handle input change
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  // Method to filter Employee List based on search
  filterEmployees = (query) => {
    if (query) {
      this.setState({
        EmployeeList: this.state.AllEmployees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(query) ||
            employee.email
              .toLowerCase()
              .includes(query) 
          );
        }),
      });
    } else {
      this.setState({ EmployeeList: this.state.AllEmployees });
    }
  };
  
  // Method to sort Employee List ascending and descending
  sortBy = (event, key) => {
    const data = this.state.EmployeeList;
    this.setState({
      data: data.sort((a, b) => {
        const asc = this.state.direction[key] === 'ascending';
        if (a[key] < b[key]) {
            return asc ? -1 : 1;
        } else if (a[key] > b[key]) {
            return asc ? 1 : -1;
        } else {
            return 0;
        }
      }),

      direction: {
          [key]: this.state.direction[key] === 'ascending'
          ? 'descending'
          : 'ascending'
      }
    })
  }

  render() {
    return (
    <div class="container">
        <SearchBar search={this.state.search} handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}/>
        <EmployeeList sortBy={this.sortBy} EmployeeList={this.state.EmployeeList} emailSort={this.state.direction['email']} phoneSort={this.state.direction['phone']}/>
    </div>
    );
  }
}
export default Main;