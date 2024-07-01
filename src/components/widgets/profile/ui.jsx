import React from "react";

export const ui = ({ toggle, setToggle }) => {
  return (
    <div className="block__component w-full">
      <div className="user__info-block">
        <div className="user__avatar">
          <img src="./avatar.png" alt="avatar" />
        </div>
        <div className="user__info">
          <h1>
            Иванов <br /> Иван Иванович
          </h1>
          <p>UI/UX designer</p>
          <p>Россия, Красноярск</p>
        </div>
      </div>
      <div className="toggle">
        <div
          className={
            toggle == "main" ? "main__info main__info-active" : "main__info"
          }
          onClick={() => setToggle("main")}
        >
          <p>Основная информация</p>
        </div>
        <div
          className={
            toggle == "vacation" ? "vacation vacation-active" : "vacation"
          }
          onClick={() => setToggle("vacation")}
        >
          <p>Отпуск</p>
        </div>
      </div>
    </div>
  );
};
