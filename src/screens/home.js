import React from "react";
import data from "../data.json"
import { withRouter } from "react-router";

class Home extends React.Component {
  handleClick = employee => e => {
    this.props.history.push("/details", {
      state: {
        details: employee
      }
    });
  };
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        {data.map(item => {
          return (
            <p
              onClick={this.handleClick(item)}
              className="employee-card"
              key={item.id}
            >
              <div className="ui cards">
                <div className="card">
                  <div className="content">
                    <div className="header">
                      {` Employe Name ${item.employee_name}`}
                    </div>
                    <div className="meta">
                      {` Employe Age ${item.employee_age}`}
                    </div>
                  </div>
                </div>
              </div>

            </p>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Home);
