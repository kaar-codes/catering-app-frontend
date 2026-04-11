import dayjs from "dayjs";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import client from "../utils/api";

function GuestRange({ setRange }) {
  const options = ["100 - 250", "250 - 500", "500 - 1000", "Other"];
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div>
      <h3 className="mb-4">Please select Guest Range</h3>
      <div className="flex gap-3">
        {options.map((val) => {
          return (
            <span
              key={val}
              className={`px-3 py-1 border rounded-4xl cursor-pointer ${
                selectedValue === val
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border-violet-500"
              }`}
              onClick={() => {
                setSelectedValue(val);
                setRange(val);
              }}
            >
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function EventType({ setEvent }) {
  const options = [
    "birthday",
    "marriage",
    "engagements",
    "corporate events",
    "house warming",
    "baby shower",
    "temple festival",
    "other",
  ];
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div>
      <h3 className="mb-4">Please select Event Type</h3>
      <div className="flex gap-3 flex-wrap">
        {options.map((val) => {
          return (
            <span
              key={val}
              className={`px-3 py-1 border rounded-4xl cursor-pointer ${
                selectedValue === val
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border-violet-500"
              }`}
              onClick={() => {
                setSelectedValue(val);
                setEvent(val);
              }}
            >
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Quote({ userState }) {
  const { email, phone } = userState;
  const [eventTitle, setEventTitle] = useState();
  const [eventDescription, setEventDescription] = useState();
  const [eventDate, setEventDate] = useState(dayjs());
  const [guestRange, setGuestRange] = useState("100-250");
  const [eventType, setEventType] = useState("birthday");
  const [place, setPlace] = useState();

  async function handleSendQuote(e) {
    e.preventDefault();

    try {
      const formattedEventDate = eventDate
        ? eventDate.format("YYYY-MM-DD")
        : null;
      const payload = {
        eventDate: formattedEventDate,
        guestRange,
        eventType,
        email,
        phone,
        place,
        eventTitle,
        eventDescription,
      };

      console.log(payload);

      const res = await client.post("/quote/addQuote", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Quote Created Successfully");
      } else {
        alert("Error Occurred");
      }
    } catch (error) {
      alert("Err: " + error.message);
    }
  }

  return (
    <>
      <form className="p-14">
        <h1 className="text-4xl my-10">
          Please put yourselves free to enter the details
        </h1>
        <div className="grid grid-cols-3 gap-12">
          <div className="col-start-1 -col-end-1">
            <input
              type="text"
              name="event-title"
              placeholder="Please enter your Event title here"
              className="text-2xl border-b-2 block min-w-100 p-1 w-full outline-0"
              required
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </div>
          <div className="col-start-1 -col-end-1">
            <textarea
              type="text"
              name="event-description"
              placeholder="Let us know more about your event"
              className="text-2xl border-b-2 block min-w-100 p-1 resize-none outline-0 w-full"
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          <textarea
            type="text"
            name="event-place"
            placeholder="Where is the event planned?"
            className="text-2xl border-b-2 block min-w-100 p-1 resize-none outline-0 w-full"
            onChange={(e) => setPlace(e.target.value)}
          />
          <div></div>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
            <DatePicker
              label="Event Date"
              value={eventDate}
              format="YYYY-MM-DD"
              onChange={(newValue) => setEventDate(newValue)}
            />
          </LocalizationProvider>

          <GuestRange setRange={setGuestRange} />

          <EventType setEvent={setEventType} />

          {/* <Menu /> */}

          <input
            type="submit"
            value="Ask Quote"
            className="bg-violet-300 p-3"
            onClick={handleSendQuote}
          />
        </div>
      </form>
    </>
  );
}

export default Quote;
