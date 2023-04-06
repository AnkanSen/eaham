import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [passingYear, setPassingYear] = useState();
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [passWord, setPassWord] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phNoChangeHandler = (e) => {
    setPhNo(e.target.value);
  };
  const passingYearChangeHandler = (e) => {
    setPassingYear(e.target.value);
  };
  const courseChangeHandler = (e) => {
    setCourse(e.target.value);
  };
  const branchChangeHandler = (e) => {
    setBranch(e.target.value);
  };
  const passWordChangeHandler = (e) => {
    setPassWord(e.target.value);
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    Navigate("/login");
    const newUserData = {
      name: name,
      email: email,
      phNo: phNo,
      passingYear: passingYear,
      course: course,
      branch: branch,
      passWord: passWord,
    };
    const res = await axios.post(
      "http://localhost:4000/signUpPost",
      newUserData
    );
    if (res.data === "userName already exist") {
      window.alert("please fill with correct information");
    }
  };
  return (
    <div>
      <form action="" method="post">
        <label>Name</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
        <label>Email</label>
        <input type="text" onChange={emailChangeHandler} value={email} />
        <label>Ph No :</label>
        <input type="text" onChange={phNoChangeHandler} value={phNo} />
        <label>Passing Year</label>
        <input
          type="number"
          onChange={passingYearChangeHandler}
          value={passingYear || ""}
        />
        <label>Course</label>
        <input type="text" onChange={courseChangeHandler} value={course} placeholder="B.TECH/M.TECH/MCA/PHD"/>
        <label>Branch</label>
        <input type="text" onChange={branchChangeHandler} value={branch} />
        <label>Password</label>
        <input type="text" onChange={passWordChangeHandler} value={passWord} />
      </form>
      <button type="submit" onClick={submitHandler}>
        SignUp
      </button>
    </div>
  );
};

export default SignUpPage;
