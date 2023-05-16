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

  const formattedDate = new Date(date);
  const formattedDateString = formattedDate.toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTimeString = formattedDate.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="border rounded-md shadow-md hover:shadow-lg">
      <h4 className="text-center py-4 text-xl font-bold text-slate-700">
        {event.Type}
      </h4>
      <div className="relative">
        <img
          src={event.Image}
          alt={event.Title}
          className="h-96 object-cover w-full"
        ></img>
        <div className="absolute flex flex-col top-8 left-8 bg-white rounded-md p-2 font-bold items-center w-16">
          <span className="text-2xl text-teal-600">
            {formattedDate.getDate()}
          </span>
          <span className="text-xl text-slate-700">
            {months[formattedDate.getMonth() + 1]}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="text-slate-700">
          <p className="text-lg font-bold">{event.Title}</p>
          <p className="text-md">{event.Description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <i className="fa-regular fa-calendar" />
            <span className="ml-2">{formattedDateString}</span>
          </div>
          <div className="flex items-center">
            <i className="fa-regular fa-clock" />
            <span className="ml-2">{formattedTimeString}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
