import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/contactus.jsx";
import Quote from "./pages/Quote.jsx";
import Forgotpassword from "./pages/forgotpassword.jsx";
import Otppage from "./pages/otppage.jsx";
import Landingpage from "./pages/landingpage.jsx";
import ForgotPasswordFlow from "./pages/forgotpasswordflow.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Resetpassword from "./pages/resetpassword.jsx";

function App() {
  const isUserLoggedIn = false;
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/quote"
            element={<Quote isLoggedIn={isUserLoggedIn} />}
          ></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/otppage" element={<Otppage />}></Route>
          <Route path="/landingpage" element={<Landingpage />}></Route>
          <Route
            path="/forgotpasswordflow"
            element={<ForgotPasswordFlow />}
          ></Route>
          <Route path="/resetpassword" element={<Resetpassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
