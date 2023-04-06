import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import EventCard from "../components/Event/EventCard";
const EventsPage = () => {
  const [allEventData, setAllEventData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/allEventData").then((response) => {
      setAllEventData(response.data);
    });
  }, []);
  return (
    <div>
      {allEventData.map((event) => {
        return <EventCard key={event._id} eventData={event}></EventCard>;
      })}
    </div>
  );
};

export default EventsPage;
