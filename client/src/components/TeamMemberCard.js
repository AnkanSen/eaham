import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import './TeamMemberCard.css';

const TeamMemberCard = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const removeHandler = () => {
    // window.location.reload(false)
    axios.get("http://localhost:4000/deleteMember", {
      params: { key: props.teamMemberData._id },
    }).then(window.location.reload(false));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      const currUserName = user.name;
      let res = axios
        .get("http://localhost:4000/getCurrUserData", {
          params: { currUserName: currUserName },
        })
        .then((response) => {
          if (response.data.userType === "admin") setIsAdmin(true);
        });
    }
  }, []);
  return (
    <>

<div class="wrapper">
       <div class="membre">
            <img src="https://i.imgur.com/jMtQiws.jpg" alt="" />
           
            <div class="info">
               <h5 class="name">{props.teamMemberData.name}</h5>
               <p class="job">{props.teamMemberData.position}</p>
            </div>

           <div class="overly top">
               <div class="middle">
                    <h5 class="name">{props.teamMemberData.name}</h5>
            <p class="job"> {props.teamMemberData.position}</p>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellat nobis perspiciatis molestiae tempora quasi. Nulla.
            </p>
               
            <div class="social-icones">
                <a href="#" class="icon"><i class="fa fa-facebook-f"></i></a>
                <a href="#" class="icon">
                    <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="icon">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="#" class="icon">
                    <i class="fa fa-google-plus"></i>
                </a>
            </div>
        </div>
        </div>
       </div>

  </div>











        {/* <div class="Section">
    <div className="Container">
      {isAdmin && <button onClick={removeHandler}>Remove From Team</button>}
      <div className="EventCard">
        <h2>{props.teamMemberData.name}</h2>
        <h3>{props.teamMemberData.position}</h3>
      </div>
    </div>
    </div> */}
      
    </>

  );
};

export default TeamMemberCard;
