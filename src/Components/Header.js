import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Logo from "./images/header-logo.png";
function Header() {
  const { user, basket } = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <MdSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearLink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearLink">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" className="header__clearLink">
          <div className="header__optionBasket">
            <FiShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
