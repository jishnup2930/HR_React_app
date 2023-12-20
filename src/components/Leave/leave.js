import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './leave.css';

function LeaveForm({ onLeaveSubmit }) {
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveReason, setLeaveReason] = useState("");
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (!leaveDate || !leaveReason) {
        console.error('Date and Reason are required!');
        window.alert("Date and reason are required");
        return;
      }

      const response = await fetch(`http://localhost:5000/leave/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ leave_date: leaveDate, leave_reason: leaveReason }),
      });

      if (response.ok) {
        onLeaveSubmit();
        setLeaveDate("");
        setLeaveReason("");
        console.log("Leave submitted successfully!");
        window.alert("Leave submitted successfully!")
      } else {
        console.error('Submission failed');
        window.alert("Submission failed");
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="leave_date">Leave Date:</label>
        <input
          type="date"
          id="leave_date"
          name="leave_date"
          value={leaveDate}
          onChange={(e) => setLeaveDate(e.target.value)}
        />

        <label htmlFor="leave_reason">Reason:</label>
        <textarea
          id="leave_reason"
          name="leave_reason"
          rows="2"
          cols="50"
          value={leaveReason}
          onChange={(e) => setLeaveReason(e.target.value)}
        ></textarea>
        <br />

        <button id="leave-button" type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default LeaveForm;
