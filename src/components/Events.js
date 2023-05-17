import React, { useContext } from "react";
import { EventsContext } from "../context/EventsProvider";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import EventCard from "./EventCard";

const Events = () => {
  const { events } = useContext(EventsContext);

  const renderEvents = () =>
    events.map((event) =>
      event.Dates.map((date) => (
        <SwiperSlide>
          <motion.div
            transition={{ duration: 0.8 }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            className="p-10 mt-14"
          >
            <EventCard event={event} date={date} />
          </motion.div>
        </SwiperSlide>
      ))
    );

  return (
    <motion.div
      transition={{ duration: 0.8 }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      className="p-10 mt-14"
    >
      <h2 className="text-2xl font-bold text-center mb-10 text-slate-700">
        Upcoming Events
      </h2>
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {renderEvents()}
      </Swiper>
    </motion.div>
  );
};

export default Events;
