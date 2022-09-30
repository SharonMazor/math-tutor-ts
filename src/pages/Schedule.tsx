import React, { Fragment, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import ChooseHour from "../components/ChooseHour";
import "./Schedule.css";

// const lessonSchedule = {
//   year: 2022,
//   month: september,
//   day
// }

// });

const Schedule: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [chooseDay, setChooseDay] = useState(false);

  return (
    <Fragment>
      <section className="section">
        <div>
          <h1 className="h1">בחרו תאריך ושעה</h1>
          <Calendar
            className="calendar"
            calendarType="Hebrew"
            onChange={setDate}
            value={date}
            minDate={new Date()}
            maxDate={new Date(2022, 11, 31)}
            onClickDay={() => setChooseDay(true)}
          />
        </div>
        <div></div>
        {/* {chooseDay ? <ChooseHour date={date} /> : ""} */}
      </section>
    </Fragment>
  );
};

export default Schedule;
