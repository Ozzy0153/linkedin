import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import Chatbox from "../components/chatbox/Chatbox";

import Navbar from "../components/navbar/Navbar";
import Leftbar from "../components/leftbar/Leftbar";
import Rightbar from "../components/rightbar/Rightbar";
function Layout() {
  const Feed = () => {
    return (
      <>
        <Navbar />
        <main>
          <Leftbar />
          <div className="container">
            <Outlet />
          </div>
          <Rightbar />
        </main>
      </>
    );
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Feed />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/chatbox/:id" element={<Chatbox />} />
          </Route>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default Layout;
