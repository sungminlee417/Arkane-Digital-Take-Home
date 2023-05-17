import { render, screen } from "@testing-library/react";
import { EventsProvider } from "../context/EventsProvider";
import Events from "./Events";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <ul>{children}</ul>,
  SwiperSlide: ({ children }) => <li>{children}</li>,
}));

jest.mock("swiper", () => ({
  Navigation: (props) => null,
  Autoplay: (props) => null,
}));

const mockEvents = [
  {
    Title: "Beethoven's Greatest Works",
    Type: "Master’s Performance",
    Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],
    Image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
    Description: "Come witness this amazing performance.",
  },
  {
    Title: "Mozart's Symphony No. 40",
    Type: "Orchestral Concert",
    Dates: ["2023-07-24T19:30:00Z", "2023-07-29T19:30:00Z"],
    Image:
      "https://cdn.britannica.com/35/74835-050-F0B71060/canvas-oil-Wolfgang-Amadeus-Mozart-Barbara-Krafft-1819.jpg",
    Description: "Come witness this amazing performance.",
  },
];

test("renders correct amount of events", () => {
  render(
    <EventsProvider value={mockEvents}>
      <Events />
    </EventsProvider>
  );

  const listElements = screen.getAllByRole("listitem");
  expect(listElements).toHaveLength(4);
});
