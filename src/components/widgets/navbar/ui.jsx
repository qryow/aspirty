import React from "react";

export const ui = () => {
  return (
    <div className="navbar">
      <div className="logo__wrapper">
        <img src="./logo.svg" alt="aspirity logo" />
      </div>
      <div className="menu__wrapper">
        <div className="user__block">
          <img
            className="user__block-avatar"
            src="./avatar.png"
            alt="user avatar"
          />
          <img
            className="user__block-arrow"
            src="./arrow-todown.svg"
            alt="arrow"
          />
        </div>
        <div className="burger-menu">
          <img src="./burger-menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
