import {Link} from "react-router-dom"
import { useEffect } from "react";

export const EmployeeList = () => {

  useEffect(()=>{
    getEmployee();
  },[])  

  const getEmployee = async ()=>{
    const data = await fetch("http://localhost:8080/employee").then((e)=>e.json());
    
  }
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <Link to="/login" >
       
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Kial Bengtsen</p></span>
        <span className="employee_title"><p>Team Lead</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Melessa Grayland</p></span>
        <span className="employee_title"><p>Team Lead</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Trish Cotillard</p></span>
        <span className="employee_title"><p>Team Lead</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Leora Walbridge</p></span>
        <span className="employee_title"><p>Jr Software Developer</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Haleigh Yard</p></span>
        <span className="employee_title"><p>Sr Software Developer</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Raynard Maystone</p></span>
        <span className="employee_title"><p>Jr Software Developer</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Kip Grewer</p></span>
        <span className="employee_title"><p>Team Lead</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Kial Bengtsen</p></span>
        <span className="employee_title"><p>Sr Software Developer</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Annnora Mozzetti</p></span>
        <span className="employee_title"><p>Team Lead</p></span>
      </div>
      <div className="employee_card">
        <img className="employee_image" src="http://dummyimage.com/185x177.png/ff4444/ffffff" />
        <span className="employee_name"><p>Frank Skirlin</p></span>
        <span className="employee_title"><p>Jr Software Developer</p></span>
      </div>
      </Link>
    </div>
  );
};
