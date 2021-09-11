import { Link } from "react-router-dom";
import "../Styles/LoginForm.css";
import { UserContext } from "../Providers/UserProvider";
import { useEffect, useContext } from "react";
import { signInWithGoogle } from "../Services/Firebase";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

  const user = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);


  return (
    <section>
      <div className="container">
        <p className="heading"> Login </p>
        {/* <div className="box">
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
        </div> */}
        <button className="loginBtn" onClick={signInWithGoogle}>Sign in With google</button>
        <p className="text">
          {" "}
          Dont have an account? <Link to="/users/new">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
