import React from "react";
import data from "../data.json";
import home from "../screens/home";

const Detail = props => {
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div>
            <div className="ui bulleted list"></div>
            <div className="item">{` Employe ID${value.id}`}</div>
            <div className="item">{`Employe Salary ${value.employee_salary}`}</div>
            <img className="ui avatar image" src={value.profile_image} />
          </div>
        );
      })}
    </div>
  );
};
export default Detail;
