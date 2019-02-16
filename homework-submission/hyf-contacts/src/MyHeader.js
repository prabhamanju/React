import React from "react";
import logo from "./logo.svg";
import "./App.css";

class MyHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <span className="header__branding">
          <img
            src={logo}
            width="35"
            height="35"
            className="header__logo"
            alt="Contacts app logo"
          />
          <h1 className="header__title">Contacts</h1>
        </span>
        <span className="header__actions">
          <span className="btn">
            <i className="btn__icon fas fa-plus" />

            <span className="btn__label">Create Contact</span>
          </span>
        </span>
      </div>
    );
  }
}
export default MyHeader;
