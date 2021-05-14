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
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ 
        result: res.data.results,
        filteredUser: res.data.results
       }))
      .catch(err => console.log(err));
  };

  handleInputChange =  (event, sortKey) => {
    console.log("handle inu" + sortKey);
    event.preventDefault();
  };
  handleSort =  (event, sortKey, ascending) => {
    console.log("handle inu" + sortKey);
    event.preventDefault();
    let reverse = ascending ? 1 : -1;
    const data = this.state.result;
    console.log(reverse)
    if (reverse) {
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))

    } else {
      data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
    }
    this.setState({data})
  };
  
  sortBy = (key) => {
    const data = this.state.result;
    console.log(data)
    console.log(key)
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
          handleInputChange={this.handleInputChange}/>
        <EmployeeList sortBy={this.sortBy}  result={this.state.result}/>
    </div>
    );
  }
}
export default Main;