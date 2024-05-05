import React, { useState } from "react";
import "./Calender.css"; // Import CSS file for styling
import { useDispatch } from "react-redux";
import { saveDates } from "./action";

function Calendar() {
  const [startDate, setStartDate] = useState("");
  const [startButton, setStartButton] = useState(false);
  const [endButton, setEndButton] = useState(false);
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
    setStartButton(true);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setEndButton(true);
  };
  const continueHandler = () => {
    console.log("clicked");
    dispatch(saveDates(startDate, endDate));
  };

  return (
    <div className="date-picker">
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>

      <button onClick={continueHandler} disabled={!startButton || !endButton}>
        Continue
      </button>
    </div>
  );
}

export default Calendar;
