import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <Link>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
