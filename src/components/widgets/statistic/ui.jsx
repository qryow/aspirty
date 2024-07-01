"use client";
import { useState } from "react";

export const ui = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block__component fade__up w-[100%] min-[1280px]:w-[32%]">
      <div className="stat__head">
        <h3>Статистика</h3>
        <img
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="cursor-pointer"
          src="./info-icon.svg"
          alt="info"
        />
        <div
          className={`info__mini-block  ${open ? "opacity-100" : "opacity-0"}`}
        >
          1 раб. месяц = 3 дня отпуска
        </div>
      </div>
      <div className="stat__circle">
        <div className="circular-progress">
          <svg className="w-full h-full">
            <circle
              className="circle"
              cx="50%"
              cy="50%"
              r="45%"
              strokeWidth="7%"
              stroke="#DB4546"
              fill="none"
              style={{ "--progress": -10 }}
            ></circle>
            <circle
              className="circle"
              cx="50%"
              cy="50%"
              r="45%"
              strokeWidth="7%"
              stroke="#FFB649"
              fill="none"
              style={{ "--progress": 30 }}
            ></circle>
            <circle
              className="circle"
              cx="50%"
              cy="50%"
              r="45%"
              strokeWidth="7%"
              stroke="#25824F"
              fill="none"
              style={{ "--progress": 92 }}
            ></circle>
          </svg>
          <div className="circle__text">
            <p>32</p>
            <span>дня</span>
          </div>
        </div>
      </div>

      <div className="states">
        <div className="one__state">
          <div className="one__state-item">
            <div className="one__state-dot bg-[#25824F]"></div>
            <h5>Доступно сейчас</h5>
          </div>

          <p>32 дня</p>
        </div>
        <div className="one__state">
          <div className="one__state-item">
            <div className="one__state-dot bg-[#FFB649]"></div>
            <h5>Запланировано</h5>
          </div>

          <p>8 дня</p>
        </div>
        <div className="one__state">
          <div className="one__state-item">
            <div className="one__state-dot bg-[#DB4546]"></div>
            <h5>Использовано/недоступно</h5>
          </div>

          <p>6 дня</p>
        </div>
      </div>

      <div className="stat__items"></div>
    </div>
  );
};
