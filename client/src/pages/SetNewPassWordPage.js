import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SetNewPassWordPage = () => {
  const Navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [newPassWord, setNewPassWord]=useState("");
  const emailChangeHandler=(e)=>{
    setEmail(e.target.value);
  }
  const newPassWordChangeHandler=(e)=>{
    setNewPassWord(e.target.value);
  }
  const updateHandler=()=>{
    axios({
      method: "post",
      url: "http://localhost:4000/updatePassWord",
      data: {
        email: localStorage.getItem('email'),
        passWord: newPassWord
      },
    }).then((response)=>{
      if(response.data==="Password Updated"){
        localStorage.removeItem('email')
        Navigate("/login");
      }
      else{
        console.log("please give correct email")
      }
    })
  }
  return (
    <div>
      <form method="post">
        
        <label >New Password</label>
        <input type="text" onChange={newPassWordChangeHandler} value={newPassWord}/>
      </form>
      <button onClick={updateHandler}>Save</button>
    </div>
  );
}

export default SetNewPassWordPage;
