import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/Contact.jsx";
import Quote from "./pages/Quote.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const isUserLoggedIn = false;
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route
            path="/quote"
            element={<Quote isLoggedIn={isUserLoggedIn} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
