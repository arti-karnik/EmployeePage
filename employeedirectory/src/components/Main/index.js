import React, { Component } from "react";
import EmployeeList from "../../components/EmployeeList";
import API from "../../utils/API";
import SearchBar from "../SearchBar";

class Main extends Component {
  state = {
    result: [],
    direction: {
      email: 'ascending',
      phone: 'ascending'
    },
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ 
        employees: res.data.results,
        filteredEmployees: res.data.results
       }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };
  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(input)
          );
        }),
      });
    } else {
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  
  sortBy = (key) => {
    const data = this.state.filteredEmployees;
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
    <div>
        <SearchBar search={this.state.search} handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
                    />
        <EmployeeList sortBy={this.sortBy} filteredEmployees={this.state.filteredEmployees}/>
    </div>
    );
  }
}
export default Main;