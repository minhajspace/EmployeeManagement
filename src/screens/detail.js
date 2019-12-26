import React from "react";
import { withRouter } from "react-router";
import './detail.css';

class Details extends React.Component {
  handleBackClick = () => {
    this.props.history.goBack();
  };
  render() {
    const { state } = this.props.location.state;
    const {
      employee_name,
      employee_salary,
      employee_age,
      profile_image
    } = state.details;
    return (
      <>
        <div className="ui card">
          <ul>

            <h4><u>Employee Details </u></h4>
            <li>   <h5>Employee Name</h5> </li>
            <p>{employee_name}</p>
            <li>  <h5>Employee Salary</h5> </li>
            <p>{employee_salary}</p>
            <li> <h5>Employee Age</h5> </li>
            <p>{employee_age}</p>
            <li>    <h5>Employee Profile Image</h5> </li>
            <img alt="employee avatar" src={profile_image} />
            <div className="back-button" onClick={this.handleBackClick}>

              <button class="ui button">
                Go back
</button>

            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(Details);
