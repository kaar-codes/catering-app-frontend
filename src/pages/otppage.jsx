import { useState } from "react";
import { Link } from "react-router-dom";
function Otppage() {
  return (
    <>
      <section className="flex justify-between ">
        <div>
          <img
            src="forgotpassword.svg"
            alt="Forgot Password Violet Tone Image"
            className="w-[520px]"
          />
        </div>

        <div className="text-center mt-50 marginchange">
          <h1 className="text-3xl">Forgot Password</h1>
          <br></br>
          <input
            type="email"
            name="email"
            required
            className="input-element forgotelement"
            placeholder="Enter your email"
            autoFocus
          />
          <button
            type="submit"
            value="send"
            className="bg-[#8A38F5] mt-7 rounded w-32 h-14 text-xl forgotbtn"
          >
            send
          </button>
        </div>
      </section>
      <div class="overlay"></div>

      <div class="popup">
        <h2>
          <b>Enter Code</b>
        </h2>
        <p>We’ve sent an SMS with activation code</p>
        <input
          type="integer"
          maxlength="1"
          className="w-12 h-12 text-center text-xl border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="integer"
          maxlength="1"
          className="w-12 h-12 text-center text-xl border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="integer"
          maxlength="1"
          className="w-12 h-12 text-center text-xl border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="integer"
          maxlength="1"
          className="w-12 h-12 text-center text-xl border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="integer"
          maxlength="1"
          className="w-12 h-12 text-center text-xl border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <br></br>
        <p className="text-orange-700">wrong code, please try again</p>
      </div>
    </>
  );
}
export default Otppage;
