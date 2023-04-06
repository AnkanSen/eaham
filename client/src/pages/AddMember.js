import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddMember = () => {
  const Navigate=useNavigate();
  const [newMemberData, setNewMemberData] = useState({
    name: "",
    position: "",
    photo: "",
  });
  const nameChangeHandler = (e) => {
    setNewMemberData({ ...newMemberData, name: e.target.value });
  };
  const positionChangeHandler = (e) => {
    setNewMemberData({ ...newMemberData, position: e.target.value });
  };
  const photoChangeHandler = (e) => {
    setNewMemberData({ ...newMemberData, photo: e.target.value });
  };
  const addMemberHandler = async() => {
    Navigate("/adminHome")
    const res = await axios({
        method: "post",
        url: "http://localhost:4000/addTeamMember",
        data: newMemberData,
      })
  };
  return (
    <div>
      <form method="post">
        <label>Name</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={newMemberData.name}
        />
        <label>Position</label>
        <input
          type="text"
          onChange={positionChangeHandler}
          value={newMemberData.position}
        />
        <label>Photo</label>
        <input
          type="text"
          onChange={photoChangeHandler}
          value={newMemberData.photo}
        />
      </form>
      <button type="submit" onClick={addMemberHandler}>
        Add Member
      </button>
    </div>
  );
};

export default AddMember;
