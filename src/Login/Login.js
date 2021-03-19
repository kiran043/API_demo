import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Login.css";

// regex pattern
const emailRE = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

function Login() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    emailErr: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser((prevData) => {
        return {
          ...prevData,
          emailErr: "",
        };
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [ user.emailErr]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const userValidation = (re, checkUser, err) => {
    if (!re.test(checkUser)) {
      setUser((prevData) => {
        return { ...prevData, [err]: `Please Enter Valid email ID` };
      });
      return false;
    } else {
      setUser((prevData) => {
        return {
          ...prevData,
          [err]: "",
        };
      });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userValidation(emailRE, user.email, "emailErr")
    ) {
      history.push("/home");
    }
  };
  return (
    <div class="container-fluid ">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-6 col-md-3 text-center">
          <form onSubmit={handleSubmit} class="form-container">
          <h3>ASSIGNMENT BY KIRAN</h3>
          <p>Please Login</p>
            <div class=" form-group">
              <label><b>Name:</b></label><br/>
              <input
                class="w-50 rounded"
                type="text"
                value={user.name}
                onChange={(e) => handleChange(e)}
                placeholder="Name"
                name="name"
              />
            </div>
            <div class=" form-group">
              <label><b>Email:</b></label><br/>
              <input
                class="w-50 rounded"
                type="text"
                value={user.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
                name="email"
                className={user.emailErr ? "err" : null}
              />
            </div>

            {user.emailErr && <span style={{color:'red'}}>{user.emailErr}</span>}
            <br />
            <div className='text-center mt-4'>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
