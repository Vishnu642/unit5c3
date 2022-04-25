
import { useEffect } from "react";

export const EmployeeDetails = () => {

  return (
    <div className="user_details">
      <img className="user_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
      <h4 className="user_name"><h3>Melessa Grayland</h3></h4>
      <span className="user_salary">$3000</span>
      <span className="tasks">
        <li className="task">Coding</li>
      </span>
      Status: <b className="status">working</b>
      Title: <b className="title">intern</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
