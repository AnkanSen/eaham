import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../frontend components/Navbar";
import "./loginPage.css"
import { useEffect } from "react";
const LoginPage = (event) => {
  const Navigate = useNavigate();

  const [enteredUserData, setEnteredData] = useState({
    email: "",
    passWord: "",
  });
  const emailChangeHandler = (e) => {
    setEnteredData({ ...enteredUserData, email: e.target.value });
  };
  const passWordChangeHandler = (e) => {
    setEnteredData({ ...enteredUserData, passWord: e.target.value });
  };
  const submitHandler = async (e) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/loginPost",
      data: enteredUserData,
    });
    const userType = res.data.userType;
    if (res.data.user) {
      localStorage.setItem("token", res.data.user);

      // alert("Login successful");
      if (userType === "normalUser") {
        Navigate("/home");
      } else if (userType === "admin") {
        Navigate("/adminHome");
      } else if (userType === "normalClubMembers") {
        Navigate("/home");
      }
    } else {
      alert("Please check your email and password");
      window.location.reload(false)
    }
  };
  const signUpHandler = () => {
    Navigate("/signUp");
  };
  const forgotPassWordHandler=()=>{
    Navigate("/forgotPassWord");
  }


  var card = document.getElementById("cardinner");
			
			function openRegister() {
				card.style.transform = "rotateY(-180deg)";
			}
			
			function openLogin() {
				card.style.transform = "rotateY(0deg)";
			}
      // openLogin()

  return (
    <>
<div className="section">
    <div className="bodyDiv">
      <form method="post">
        <label>Email</label>
        <input
          type="text"
          onChange={emailChangeHandler}
          value={enteredUserData.email}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={passWordChangeHandler}
          value={enteredUserData.passWord}
        />
      </form>
      <button type="submit" onClick={submitHandler}>
        Login
      </button>
      <p>Not registered yet ?--</p>
      <button onClick={signUpHandler}>SignUp</button>
      <button onClick={forgotPassWordHandler}>Forgot Password?</button>
      <div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
