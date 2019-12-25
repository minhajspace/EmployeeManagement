import React from "react";
import data from "../data.json";

const onUserClick = value => e => {
  console.log({ value });
};

class Home extends React.Component {
  render() {
    return (
      <div>
        {data.map((value, index) => {
          return (
            <div className="ui card" onClick={onUserClick(value)}>
              <div className="card">
                <div className="header">{`  Employe Name ${value.employee_name}`}</div>
              </div>
              <div className="meta">{`Employe Age  ${value.employee_age}`}</div>
              <div>{this.props.children} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
