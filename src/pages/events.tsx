import UpcomingEvents from "@components/UpcomingEvents/UpcomingEvents";
import { UPCOMING_EVENTS_DATA } from "@util/constants";
import { NextPage } from "next";

export interface Props {
  isMobile: boolean;
}

export const Events: NextPage<Props> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <main>
          {/* Events main */}
          <div className="text-center flex flex-col justify-center items-center w-full mt-20 mb-10">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">COME HANG OUT</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Upcoming Events</h1>
          </div>

          {UPCOMING_EVENTS_DATA.map((upcomingEvent) => (
            <UpcomingEvents
              date={upcomingEvent.date}
              image={upcomingEvent.image}
              eventName={upcomingEvent.eventName}
              location={upcomingEvent.location}
              eventType={upcomingEvent.eventType}
              isPaid={upcomingEvent.isPaid}
              isMobile={isMobile}
            />
          ))}
        </main>
      ) : (
        <main>
          <div className="h-20"></div>
          <div className="bg-white bg-cover bg-center">
            {/* Events main */}
            <div className="text-center flex flex-col justify-center items-center w-full mt-20 mb-20">
              <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">COME HANG OUT</h3>
              <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Upcoming Events</h1>
            </div>

            {UPCOMING_EVENTS_DATA.map((upcomingEvent) => (
              <UpcomingEvents
                date={upcomingEvent.date}
                image={upcomingEvent.image}
                eventName={upcomingEvent.eventName}
                location={upcomingEvent.location}
                eventType={upcomingEvent.eventType}
                isPaid={upcomingEvent.isPaid}
                isMobile={isMobile}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Events;
