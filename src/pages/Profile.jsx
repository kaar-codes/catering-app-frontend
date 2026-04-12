import { useState, useEffect } from "react";
import client from "../utils/api";

function Profile({ user, setUser }) {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  async function logout() {
    localStorage.clear();
    setUser(null);
  }

  const fetchData = async () => {
    console.log(JSON.parse(localStorage.getItem("user")).role);
    const condition =
      JSON.parse(localStorage.getItem("user")).role === "CUSTOMER";
    const requestQueryURL = condition ? "/quote/allYourQuote" : "/quote/quotes";
    try {
      const quoteList = (
        await client.get(requestQueryURL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).data.quotes;
      setQuote(quoteList);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.status == 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function moveStatusContent(quote, changeTo) {
    try {
      await client.patch(
        "/quote/editQuote",
        {
          quoteId: quote._id,
          email: quote.email,
          status: changeTo,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      await fetchData();
    } catch (error) {
      console.log(error);
      alert("Error Occured: ", error.message);
    }
  }

  return loading ? (
    <h1>Loading Quotes</h1>
  ) : quotes ? (
    <>
      <section className="grid grid-cols-[360px_auto] gap-4">
        <div className="bg-[#ddd] sticky p-3 min-h-100 max-h-200">
          <p>Welcome back, {user.firstName}</p>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="flex flex-col-reverse ">
          {quotes.map((quote, ind) => (
            <div className="bg-[#112] text-white p-2 m-2 relative" key={ind}>
              <h1>{quote.eventTitle}</h1>
              <span
                className={`px-2 py-1 rounded text-white text-sm absolute top-0 right-0 ${
                  quote.status === "Cancel"
                    ? "bg-red-500"
                    : quote.status === "Confirm"
                      ? "bg-green-500"
                      : quote.status === "Waiting List"
                        ? "bg-yellow-600"
                        : "bg-blue-600"
                }`}
              >
                {quote.status}
              </span>
              <div className="flex justify-between gap-1">
                <span>{quote.eventDescription}</span>
                <span>{quote.place}</span>
                <span>{quote.guestRange}</span>
                <img
                  className="w-13"
                  src="./ico-event.svg"
                  alt="mobile front side"
                />
                <span>{quote.eventType}</span>
                <img
                  className="w-13"
                  src="./ico-phone.svg"
                  alt="mobile front side"
                />
                <span>{quote.phone}</span>
                <span>{quote.eventDate.split("T").at(0)}</span>
              </div>
              {quote.status !== "Cancel" && (
                <div className="flex gap-2">
                  {JSON.parse(localStorage.getItem("user")).role ===
                    "ADMIN" && (
                    <button
                      className="bg-yellow-100 text-yellow-600 px-1 py-0.5"
                      onClick={() => {
                        console.log(quote);
                        moveStatusContent(quote, "Waiting List");
                      }}
                    >
                      WAITING LIST
                    </button>
                  )}
                  {JSON.parse(localStorage.getItem("user")).role ===
                    "ADMIN" && (
                    <button
                      className="bg-green-100 text-green-600 px-1 py-0.5"
                      onClick={async () => {
                        console.log(quote);
                        moveStatusContent(quote, "Confirm");
                      }}
                    >
                      CONFIRM
                    </button>
                  )}
                  {JSON.parse(localStorage.getItem("user")).role ===
                    "ADMIN" && (
                    <button
                      className="bg-red-100 text-red-600 px-1 py-0.5"
                      onClick={async () => {
                        console.log(quote);
                        moveStatusContent(quote, "Cancel");
                      }}
                    >
                      CANCEL
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}{" "}
        </div>
      </section>
    </>
  ) : (
    <>
      <h1>No Quotes Found</h1>
      <div className="bg-[#ddd]">
        <h1>Profile Section</h1>
        <p>Welcome back, {user.firstName}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Profile;
