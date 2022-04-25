import {Link} from "react-router-dom"

export const Login = () => {
  //  use reqres to log user in.

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
     <Link to="/employeedetails" ><input type="submit" value="SIGN IN" className="login_submit" /></Link> 
    </form>
  );
};
