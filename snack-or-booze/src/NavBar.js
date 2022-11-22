import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
            <NavLink to="/drinks">Drinks</NavLink>
            <NavLink to="/menu/new">Add Menu Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

// The navbar should add a new link, “Drinks”, leading to a page listing the drinks — just like the “Snacks” link leads to a page listing food items.