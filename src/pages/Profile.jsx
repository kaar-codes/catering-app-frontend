import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  async function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <h1>Profile Section</h1>
      <p>Welcome back, {user.firstName}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Profile;
