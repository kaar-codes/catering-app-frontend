import { useState } from "react";
import client from "../utils/api";
import MobileMockup from "../components/mobileMockup";
import { useNavigate, Navigate } from "react-router-dom";

function Login({ setUserState }) {
  const [badAuth, setBadAuth] = useState(false);
  const [uniqueInfo, setUniqueInfo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const { userObj, accessToken } = (
        await client.post("/auth/login", {
          uniqueQuery: uniqueInfo,
          password,
        })
      ).data;
      localStorage.setItem("token", accessToken);
      // Set the user state as Logged In
      setUserState(userObj);
      navigate("/");
    } catch {
      setBadAuth(true);
    }
  }

  return (
    <section className="flex justify-between h-screen">
      <MobileMockup />

      <div className="w-1/2 flex flex-col justify-center px-20 gap-6">
        <h2 className="text-4xl text-center font-semibold">
          Sign in to the Application
        </h2>

        {badAuth ? <p>Bad Authentication</p> : ""}

        <div className="grid gap-4">
          <input
            type="email"
            className="input-element"
            placeholder="Email or phone"
            required
            autoFocus
            onChange={(e) => setUniqueInfo(e.target.value)}
          />

          <input
            type="password"
            className="input-element"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-[#916BBF] p-3 rounded-lg text-xl text-white font-bold"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
