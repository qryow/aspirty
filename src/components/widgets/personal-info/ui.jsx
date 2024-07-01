"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/shared/input";
import { Modal } from "@/components/shared/modal";
import { ModalWrapper } from "@/components/shared/modal/model";
import { Button } from "@/components/shared/button";
import { useForm } from "react-hook-form";

export const ui = () => {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState([
    { label: "Имя", value: "Юрий", type: "text" },
    { label: "Фамилия", value: "Герыш", type: "text" },
    { label: "Отчество", value: "Андреевич", type: "text" },
    { label: "Дата рождения", value: "2024-07-11", type: "date" },
    { label: "Дата трудоустройства", value: "2024-07-11", type: "date" },
    { label: "Страна", value: "Россия", type: "text" },
    { label: "Город", value: "Красноярск", type: "text" },
    { label: "Должность", value: "UI/UX designer", type: "text" },
    { label: "Электронная почта", value: "test@gmail.com", type: "text" },
  ]);

  console.log(userInfo);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const updatedUserInfo = userInfo.map((item) => ({
      ...item,
      value: data[item.label],
    }));
    setUserInfo(updatedUserInfo);
    setModal(false);
  };

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
    <div className="block__component fade__up w-[100%] min-[1280px]:w-[52%]">
      <div className="main__info-head">
        <h3>Персональная информация</h3>
        <p className="edit" onClick={() => setModal(true)}>
          Изменить
        </p>
      </div>

      <div className="main__info-content">
        {userInfo.map((elem, index) => (
          <Input key={`${elem.value}${index}`} {...elem} />
        ))}
      </div>
      <ModalWrapper>
        <Modal modal={modal} setModal={setModal}>
          <form
            className={
              modal ? "modal__content modal_content_active" : "modal__content"
            }
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="main__info-head">
              <h3>Персональная информация</h3>
              <img
                onClick={() => setModal(false)}
                src="./close-icon.svg"
                alt="close"
                className="cursor-pointer"
              />
            </div>
            <div className="main__info-content mb-[32px]">
              {userInfo.map((elem, index) => (
                <Input
                  key={`${elem.value}${index}`}
                  {...elem}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>
            <Button type="submit">Сохранить</Button>
          </form>
        </Modal>
      </ModalWrapper>
    </div>
  );
};
