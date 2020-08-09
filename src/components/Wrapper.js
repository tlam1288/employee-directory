import React, { Component } from "react";
import Header from "./Header";
import Employee from "./Employee";
//import Button from "./Button";
//import API from "../utils/API";
import employees from "../employee.json";

class Wrapper extends Component {
  state = {
    employees,
    order: "ascending",
  };

  // componentDidMount() {
  //   this.searchEmployees("15");
  // }

  // searchEmployees = (query) => {
  //   API.search(query)
  //     .then((res) => console.log(res.data.results))
  //     .then((res) => this.setState({ result: res.data.results }))
  //     .catch((err) => console.log(err));
  // };

  handleSortUp = () => {
    this.setState({ order: "ascending" });
  };

  handleSortDown = () => {
    this.setState({ order: "descending" });
  };

  renderEmployee = () => {
    if (this.state.order === "ascending") {
      return employees
        .sort((a, b) => {
          const nameA = a.name.first.toUpperCase();
          const nameB = b.name.first.toUpperCase();

          let comparison = 0;
          if (nameA > nameB) {
            comparison = 1;
          } else if (nameA < nameB) {
            comparison = -1;
          }
          return comparison;
        })
        .map((employee) => (
          <Employee
            image={employee.picture.large}
            name={employee.name.first + " " + employee.name.last}
            phone={employee.phone}
            email={employee.email}
          />
        ));
    } else if (this.state.order === "descending") {
      return employees
        .sort((a, b) => {
          const nameA = a.name.first.toUpperCase();
          const nameB = b.name.first.toUpperCase();

          let comparison = 0;
          if (nameA > nameB) {
            comparison = 1;
          } else if (nameA < nameB) {
            comparison = -1;
          }
          return comparison * -1;
        })
        .map((employee) => (
          <Employee
            image={employee.picture.large}
            name={employee.name.first + " " + employee.name.last}
            phone={employee.phone}
            email={employee.email}
          />
        ));
    }
  };

  render() {
    return (
      <div>
        <Header />
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleSortUp}
        >
          Sort A-Z
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleSortDown}
        >
          Sort Z-A
        </button>
        {this.renderEmployee()}
      </div>
    );
  }
}
export default Wrapper;
