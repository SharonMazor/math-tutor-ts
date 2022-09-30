import React from "react";
import "./ChooseHour.css";

const time = ["08:00", "09:00", "10:00", "14:00", "15:00"];

// fetch

const ChooseHour: React.FC<Date> = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="hours">
      <label>{` בחרו את השעה הרצויה ביום ${day}.${month}.${year}:`}</label>
      {time.map((times) => {
        return (
          <div>
            <button> {times} </button>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseHour;
