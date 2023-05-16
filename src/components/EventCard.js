import React from "react";

const EventCard = ({ event, date }) => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const dateParts = formattedDate.split(", ");
  const dateArr = dateParts[0].split("/");
  const time = dateParts[1];
  const timeParts = time.split(":");
  const hour = timeParts[0];
  const minute = timeParts[1];
  const pmAm = time.split(" ")[1];
  const dateStr = months[dateArr[0]] + " " + dateArr[1] + ", " + dateArr[2];
  const formattedTime = hour + ":" + minute + pmAm;

  return (
    <div className="border rounded-md shadow-md hover:shadow-lg">
      <h4 className="text-center py-4 text-xl font-bold text-slate-700 rounded-t-md">
        {event.Type}
      </h4>
      <div className="relative">
        <img src={event.Image} alt={event.Title}></img>
        <div className="absolute flex flex-col top-8 left-8 bg-white rounded-md p-2 font-bold items-center w-16">
          <span className="text-2xl text-teal-600">{dateArr[1]}</span>
          <span className="text-xl text-slate-700">{months[dateArr[0]]}</span>
        </div>
      </div>
      <div className="p-4 rounded-b-md text-slate-700">
        <p className="text-lg font-bold">{event.Title}</p>
        <p className="text-md">{event.Description}</p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          <i className="fa-regular fa-calendar" />
          <span>{dateStr}</span>
        </div>
        <div className="flex gap-1 items-center">
          <i className="fa-regular fa-clock" />
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
