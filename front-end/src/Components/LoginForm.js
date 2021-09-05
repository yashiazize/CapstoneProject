import { Link } from "react-router-dom";
import "../Styles/LoginForm.css";

const LoginForm = () => {
  return (
    <section>
      <div className="container">
        <p className="heading"> Login </p>
        <div className="box">
          <p>Email</p>
          <div>
            <input type="email" name="" id="" placeholder="Enter your E-mail" />
          </div>
        </div>
        <div className="box">
          <p>Password</p>
          <div>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <button className="loginBtn">Login</button>
        <p className="text">
          {" "}
          Dont have an account? <Link to="/users/new">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
