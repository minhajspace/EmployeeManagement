import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";


import './Home.css'

class Home extends React.Component {
  onUserClick = value => e => {
    console.log({ value });
    this.props.history.push('/detail')
  };
  render() {
    return (
      <div>
        <Link className="link " to="/detail">
          {data.map((value, index) => {

            return (
              <div className="ui card" onClick={this.onUserClick(value)}>
                <div className="card">
                  <div className="content">

                    <div className="header">{`  Employe Name ${value.employee_name}`}</div>
                  </div>
                  <div className="meta">{`Employe Age  ${value.employee_age}`}</div>
                  <div>{this.props.children} </div>
                </div>

              </div>

            );
          })}
        </Link>
      </div>
    );
  }
}

export default Home;
