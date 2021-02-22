import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./Navbarpages/Blog";
import Contact from "./Navbarpages/Contact";
import Courses from "./Navbarpages/Courses";
import Homepage from "./Navbarpages/Homepage";
import Pages from "./Navbarpages/Pages";
import Event from "./Navbarpages/Event";
import logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <>
      <Router>
        <nav className="nav">
          <div className="nav-inner">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-items">
              <Link className="nav-link" to="/Homepage">
                HOME
              </Link>
              <Link className="nav-link" to="/pages">
                PAGES
              </Link>
              <Link className="nav-link" to="/courses">
                COURSES
              </Link>
              <Link className="nav-link" to="/event">
                EVENT
              </Link>
              <Link className="nav-link" to="/blog">
                BLOG
              </Link>
              <Link className="nav-link" to="contact">
                CONTACT
              </Link>
            </div>
            <div className="navbar-btn">
              <a className="register-btn" href="#">
                register
              </a>
              <a className="login-btn" href="#">
                login
              </a>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/Homepage">
            <Homepage />
          </Route>
          <Route path="/pages">
            <Pages />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Navbar;
