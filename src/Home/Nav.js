import React from "react";
import {  Navbar, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavComponent = () => {
  let history = useHistory();
  const logout = () => {
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link
          to="/home"
          className="mr-3 text-white"
          style={{ textDecoration: "none" }}
        >
          <h4>KIRAN</h4>
        </Link>
        <Nav className="mr-auto">
          <Link
            to="/users"
            className="mr-3 text-white"
            style={{ textDecoration: "none" }}
          >
            Users
          </Link>
          <Link
            to="/blogs"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Blog
          </Link>
        </Nav>

        <Button
          variant="success"
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </Button>
      </Navbar>
      <div></div>
    </div>
  );
};

export default NavComponent;
