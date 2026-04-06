import dayjs from "dayjs";
import { useState } from "react";

function Quote() {
  const [eventDate, setEventDate] = useState(dayjs());
  return (
    <>
      <h1 className="text-5xl">
        Please put yourselves free to enter the details
      </h1>
      <form>
        <input
          type="text"
          name="event-title"
          placeholder="Please enter your Event title here"
          className=""
          required
        />
        <input
          type="text"
          name="event-description"
          placeholder="Let us know more about your event"
          className=""
        />

        <input type="submit" value="Ask Quote" />
      </form>
    </>
  );
}

export default Quote;
