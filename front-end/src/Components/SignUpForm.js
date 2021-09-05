import { useState } from "react";
import { withRouter } from "react-router-dom";
import "../Styles/SignUpForm.css";

const SignUpForm = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className="container">
      <p className="heading"> Sign Up </p>
      <div className="box">
        <p>First Name</p>
        <div>
          <input type="firstName" name="" id="" placeholder="First Name" />
        </div>
		</div>
        <div className="box">
          <p>Last Name</p>
          <div>
            <input type="lastName" name="" id="" placeholder="Last Name" />
          </div>
        </div>
        <div className="box">
          <p>Email</p>
          <div>
            <input type="email" name="" id="" placeholder="Enter your E-mail" />
          </div>
        </div>
        <div className="box">
          <p>Zip Code</p>
          <div>
            <input type="zipCode" name="" id="" placeholder="Enter ZipCode" />
          </div>
        </div>
      <div className="box">
        <p> Create Password</p>
        <div>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your Password"
          />
        </div>
      </div>
      <div>
        <p>Are you a Chef?</p>
        <input
          onClick={handleCheckBox}
          checked={checked}
          type="checkbox"
          value="Chef"
          name="is_chef"
        />
        {checked ? <div> </div> : null}
      </div>
      <button className="loginBtn">Sign Up</button>
    </div>
  );
};

export default withRouter(SignUpForm);
