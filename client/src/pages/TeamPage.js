import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TeamMemberCard from "../components/TeamMemberCard";
const TeamPage = () => {
  const [allTeamData, setAllTeamData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/allTeamData").then((response) => {
      setAllTeamData(response.data);
    });
  }, []);
  return (
    <div>
      {allTeamData.map((teamMember) => {
        return (
          <TeamMemberCard
            key={teamMember._id}
            teamMemberData={teamMember}
          ></TeamMemberCard>
        );
      })}
    </div>
  );
};

export default TeamPage;
