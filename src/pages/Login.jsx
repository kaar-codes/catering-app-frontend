import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MobileMockup from "../components/mobileMockup";

function Login() {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  async function sendLoginCredentials(e) {
    e.preventDefault();
    try {
      const uri = "http://localhost:3000/auth/login";
      const response = await axios.post(uri, { email: userEmail, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <section className="flex justify-between">
        <MobileMockup />
        <div className="p-48  w-1/2 flex flex-col gap-y-10">
          <h2 className="text-3xl text-center">Sign In Account</h2>
          <form className="grid gap-2" onSubmit={sendLoginCredentials}>
            <input
              type="email"
              className="input-element"
              name="email"
              placeholder="Email address here"
              required
              autoFocus
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="input-element"
              name="password"
              placeholder="Enter your password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link to="/forgotpassword">forgot password</Link>

            <input
              type="submit"
              value="Sign In"
              className="bg-[#916BBF] p-3 rounded-lg text-2xl text-white font-bold"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
