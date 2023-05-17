import { render, screen } from "@testing-library/react";
import EventCard from "./EventCard";

test("renders all event information correctly", () => {
  const mockEvent = {
    Title: "Beethoven's Greatest Works",
    Type: "Master’s Performance",
    Dates: ["2023-07-23T23:00:00Z"],
    Image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
    Description: "Come witness this amazing performance.",
  };

  const mockDate = "2023-07-23T23:00:00Z";

  render(<EventCard event={mockEvent} date={mockDate} />);

  const eventTypeEl = screen.getByText(mockEvent.Type);
  const eventImageEl = screen.getByRole("img");
  const eventTitleEl = screen.getByText(mockEvent.Title);
  const eventDescriptionEl = screen.getByText(mockEvent.Description);
  const eventFullDateEl = screen.getByText("July 23, 2023");
  const eventTimeEl = screen.getByText("4:00 PM PT");

  expect(eventTypeEl).toBeInTheDocument();
  expect(eventImageEl).toHaveAttribute("src", mockEvent.Image);
  expect(eventFullDateEl).toBeInTheDocument();
  expect(eventTitleEl).toBeInTheDocument();
  expect(eventDescriptionEl).toBeInTheDocument();
  expect(eventTimeEl).toBeInTheDocument();
});
