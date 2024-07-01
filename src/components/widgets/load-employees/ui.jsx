"use client";
import { Button } from "@/components/shared/button";
import { Modal } from "@/components/shared/modal";
import { ModalWrapper } from "@/components/shared/modal/model";
import { useEffect, useState } from "react";

export const ui = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  return (
    <div className="block__component fade__up w-[100%] min-[1280px]:w-[46%]">
      <div className="main__info-head">
        <h3>Загрузка сотрудника</h3>
        <p className="percent">100%</p>
      </div>
      <div className="employee-content">
        <div className="info__content-item">
          <h5>Название проекта</h5>
          <p>MedPoint 24</p>
        </div>
        <div className="info__content-item">
          <h5>Тип проекта</h5>
          <p>Коммерческий</p>
        </div>
        <div className="info__content-item">
          <h5>Ответственный</h5>
          <div className="sub__item">
            <img src="./avatars/avagar-1.png" alt="avatar" />
            <p>Анна Кузнецова</p>
          </div>
        </div>
        <div className="info__content-item">
          <h5>Команда</h5>
          <div className="sub__item-team">
            <img
              src="./avatars/avatar-2.png"
              alt="avatar"
              className="fade__in"
            />
            <img
              src="./avatars/avatar-3.png"
              alt="avatar"
              className="overlapping fade__in"
            />
            <img
              src="./avatars/avatar-4.png"
              alt="avatar"
              className="overlapping fade__in"
            />
            <img
              src="./avatars/avagar-1.png"
              alt="avatar"
              className="overlapping fade__in"
            />
            <img
              src="./avatars/avatar-5.png"
              alt="avatar"
              className="overlapping fade__in"
            />
            <img
              src="./avatars/avatar-6.png"
              alt="avatar"
              className="overlapping fade__in max-[1400px]:hidden max-[1250px]:block"
            />
            <img
              src="./avatars/avatar-7.png"
              alt="avatar"
              className="overlapping fade__in max-[1400px]:hidden max-[1250px]:block"
            />
            <p onClick={() => setModal(true)} className="cursor-pointer">
              +2
            </p>
          </div>
        </div>
        <div className="info__content-item w-full">
          <h5>Сроки работы</h5>
          <div className="sub__item-timeline">
            <p>03 марта 2023</p>
            <img src="./arrow-right.svg" alt="arrow" />
            <p>23 марта 2023</p>
          </div>
        </div>
      </div>
      <Button>Посмотреть всю загрузку</Button>

      <ModalWrapper>
        <Modal modal={modal} setModal={setModal}>
          <div
            className={
              modal
                ? "modal__content w-[32%] max-[1350px]:w-[35%] max-[1200px]:w-[45%] max-[1020px]:w-[55%] max-[890px]:w-[60%] max-[720px]:w-[100%] max-[720px]:h-[100vh] modal_content_active"
                : "modal__content"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="main__info-head">
              <h2>Команда</h2>
              <img
                onClick={() => setModal(false)}
                src="./close-icon.svg"
                alt="close"
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-2.png" alt="avatar" />
              <div className="">
                <h4 className="text-[--primary-text]">John Smith</h4>
                <p className="text-[14px] text-[--secondary-text]">
                  Junior UI/UX designer
                </p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-3.png" alt="avatar" />
              <div className="">
                <h4 className="text-[--primary-text]">Sarah Brown</h4>
                <p className="text-[14px] text-[--secondary-text]">
                  Middle Product Design TeamLead
                </p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-4.png" alt="avatar" />
              <div className="">
                <h4 className="text-[--primary-text]">David Taylor</h4>
                <p className="text-[14px] text-[--secondary-text]">
                  Middle Android Developer
                </p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avagar-1.png" alt="avatar" />
              <div className="">
                <h4 className="text-[--primary-text]">Ann Williams</h4>
                <p className="text-[14px] text-[--secondary-text]">
                  Middle Head of Service
                </p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-5.png" alt="avatar" />
              <div className="">
                <h4 className="text-[--primary-text]">James Miller</h4>
                <p className="text-[14px] text-[--secondary-text]">CEO</p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-6.png" alt="avatar" />
              <div className="">
                <p className="text-[--primary-text]">Henry Jones</p>
                <p className="text-[14px] text-[--secondary-text]">Middle QA</p>
              </div>
            </div>
            <div className="flex gap-[12px] mb-[12px]">
              <img src="./avatars/avatar-7.png" alt="avatar" />
              <div className="">
                <p className="text-[--primary-text]">Charles Williams</p>
                <p className="text-[14px] text-[--secondary-text]">
                  Junior Employee Support Manager
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
};
