import React from "react";
import "./Auth.css";
const Login = () => {
    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App">
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
  }
  
  export default Register
  