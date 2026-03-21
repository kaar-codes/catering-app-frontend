import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
function ContactUs() {
  return (
    <>
      <NavBar />
      <section>
        <div className="h-238 bg-linear-to-r from-white-500 to-gray-500">
          <div className="nocenteralign">
            <h2 className="text-3xl">Contact us</h2>
          </div>
          <div className="paragraphnocenter ">
            <p>
              Reach out to us today to discuss your event, <br></br>menu
              preferences, and personalized service <br></br>requirements.
            </p>
          </div>

          <div className="items-start">
            <div className="h-10 w-45 py-4 align-middle bg-gray-400 text-center rounded-md contactinner">
              +91 9988774455
            </div>
            <br></br>
            <div className="h-13 w-45 py-4 gap-2 align-middle bg-gray-400 text-center rounded-md  contactinner">
              No.97, Lawspet, Puducherry
            </div>
            <br></br>
            <div className="h-10 w-45 py-4 align-middle bg-gray-400 text-center rounded-md  contactinner">
              Whatsapp
              <div className="pandurangan">
                <img src="PANDURANGAN.svg" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="contactusimg.svg"
            alt="image of contact us "
            className="absolute inset-y-0 right-0 w-190"
          />
        </div>
      </section>
    </>
  );
}
export default ContactUs;
