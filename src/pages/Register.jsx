import { useState } from "react";
import MobileMockup from "../components/mobileMockup";
import { useNavigate } from "react-router-dom";
import client from "../utils/api";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("CUSTOMER");

  async function sendRegisterData(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      alert("Registration successful!");
      await client.post("/user/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phone,
        role: isAdmin ? "ADMIN" : "CUSTOMER",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Registration failed");
    }
  }

  return (
    <section className="flex justify-between h-screen">
      <MobileMockup />

      <div className="w-1/2 flex flex-col justify-center px-20 gap-6">
        <h2 className="text-4xl text-center font-semibold">
          Create New Account
        </h2>

        <form className="grid gap-4" onSubmit={sendRegisterData}>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-element"
              placeholder="Firstname"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="input-element"
              placeholder="Lastname"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="email"
            className="input-element"
            placeholder="Email address here"
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <input
            type="password"
            className="input-element"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            className="input-element"
            placeholder="Confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <input
            type="text"
            className="input-element"
            placeholder="Phone number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="flex items-center gap-3 text-lg">
            <input
              type="checkbox"
              className="w-5 h-5"
              onChange={(e) => {
                console.log(e.target.checked);
                setIsAdmin(e.target.checked ? "ADMIN" : "CUSTOMER");
              }}
            />
            <span>Admin</span>
          </div>
          <button
            className="bg-[#916BBF] p-3 rounded-lg text-xl text-white font-bold"
            onClick={sendRegisterData}
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
