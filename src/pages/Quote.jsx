import Login from "./Login.jsx";

function Quote(props) {
  return props.isLoggedIn ? (
    <>
      <h1>Quote Page</h1>
      <p>SPR Catering Application Quote Page</p>
    </>
  ) : (
    <Login />
  );
}

export default Quote;
