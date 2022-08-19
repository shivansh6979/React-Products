import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <Button variant="dark">Our Products</Button>
        </Link>

        <Link to="/users">
          <Button variant="dark">Orders</Button>
        </Link>
      </header>
    </>
  );
};

export default Header;
