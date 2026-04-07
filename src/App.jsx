import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function App() {
  // Initialize with no user state
  const userObj = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userObj);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={
                user ? <Quote replace /> : <Login setUserState={setUser} />
              }
            />
            <Route
              element={user ? <Outlet /> : <Navigate to="/login" replace />}
            >
              <Route
                path="/profile"
                element={<Profile user={user} setUser={setUser} />}
              />
              <Route
                path="/askquote"
                element={<Quote userState={user} />}
              ></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
