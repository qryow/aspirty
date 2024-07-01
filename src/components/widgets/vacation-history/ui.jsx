"use client";
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
    <div className="block__component fade__up w-[100%] min-[1280px]:w-[64%]">
      <div className="main__info-head">
        <h3>История отпусков</h3>
        <p className="edit" onClick={() => setModal(true)}>
          Посмотреть все
        </p>
      </div>

      <div className="vacations min-[860px]:block hidden">
        <div className="vacation__item">
          <h5 className="first">Тип</h5>

          <div className="vacation__time">Даты отпуска</div>
          <h5 className="last">Количество дней</h5>
        </div>
        <div className="vacation__item">
          <p className="first">Отпуск</p>
          <div className="vacation__time">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>

          <p className="last">20</p>
        </div>
        <div className="vacation__item">
          <p className="first">Отгул</p>
          <div className="vacation__time">
            <span>03 марта 2023</span>
            <img src="./red-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>

          <p className="last">4</p>
        </div>
        <div className="vacation__item">
          <p className="first">Отгул</p>
          <div className="vacation__time">
            <span>03 марта 2023</span>
            <img src="./red-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>

          <p className="last">4</p>
        </div>
        <div className="vacation__item">
          <p className="first">Отгул</p>
          <div className="vacation__time">
            <span>03 марта 2023</span>
            <img src="./red-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>

          <p className="last">4</p>
        </div>
        <div className="vacation__item">
          <p className="first">Отгул</p>
          <div className="vacation__time">
            <span>03 марта 2023</span>
            <img src="./red-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>

          <p className="last">4</p>
        </div>
      </div>

      <div className="vacations__mobile min-[860px]:hidden block">
        <div className="vacation__mobile-item">
          <h5>Тип</h5>
          <p>Отпуск</p>

          <h5>Даты отпуска</h5>
          <div className="vacation__time mb-[16px] ">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>
          <h5 className="last">Количество дней</h5>
          <p className="last">20</p>
        </div>
        <div className="vacation__mobile-item">
          <h5>Тип</h5>
          <p>Отпуск</p>

          <h5>Даты отпуска</h5>
          <div className="vacation__time mb-[16px] ">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>
          <h5 className="last">Количество дней</h5>
          <p className="last">20</p>
        </div>
        <div className="vacation__mobile-item">
          <h5>Тип</h5>
          <p>Отпуск</p>

          <h5>Даты отпуска</h5>
          <div className="vacation__time mb-[16px] ">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>
          <h5 className="last">Количество дней</h5>
          <p className="last">20</p>
        </div>
        <div className="vacation__mobile-item">
          <h5>Тип</h5>
          <p>Отпуск</p>

          <h5>Даты отпуска</h5>
          <div className="vacation__time mb-[16px] ">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>
          <h5 className="last">Количество дней</h5>
          <p className="last">20</p>
        </div>
        <div className="vacation__mobile-item">
          <h5>Тип</h5>
          <p>Отпуск</p>

          <h5>Даты отпуска</h5>
          <div className="vacation__time mb-[16px] ">
            <span>03 марта 2023</span>
            <img src="./yellow-arrow.svg" alt="arrow" />
            <span>23 марта 2023</span>
          </div>
          <h5 className="last">Количество дней</h5>
          <p className="last">20</p>
        </div>
      </div>

      <ModalWrapper>
        <Modal modal={modal} setModal={setModal}>
          <div
            className={
              modal ? "modal__content modal_content_active" : "modal__content"
            }
            onClick={(e) => e.stopPropagation()}
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
            <div className="vacations min-[860px]:block hidden">
              <div className="vacation__item">
                <h5 className="first">Тип</h5>

                <div className="vacation__time">Даты отпуска</div>
                <h5 className="last">Количество дней</h5>
              </div>
              <div className="vacation__item">
                <p className="first">Отпуск</p>
                <div className="vacation__time">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>

                <p className="last">20</p>
              </div>
              <div className="vacation__item">
                <p className="first">Отгул</p>
                <div className="vacation__time">
                  <span>03 марта 2023</span>
                  <img src="./red-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>

                <p className="last">4</p>
              </div>
              <div className="vacation__item">
                <p className="first">Отгул</p>
                <div className="vacation__time">
                  <span>03 марта 2023</span>
                  <img src="./red-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>

                <p className="last">4</p>
              </div>
              <div className="vacation__item">
                <p className="first">Отгул</p>
                <div className="vacation__time">
                  <span>03 марта 2023</span>
                  <img src="./red-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>

                <p className="last">4</p>
              </div>
              <div className="vacation__item">
                <p className="first">Отгул</p>
                <div className="vacation__time">
                  <span>03 марта 2023</span>
                  <img src="./red-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>

                <p className="last">4</p>
              </div>
            </div>

            <div className="vacations__mobile min-[860px]:hidden block">
              <div className="vacation__mobile-item">
                <h5>Тип</h5>
                <p>Отпуск</p>

                <h5>Даты отпуска</h5>
                <div className="vacation__time mb-[16px] ">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>
                <h5 className="last">Количество дней</h5>
                <p className="last">20</p>
              </div>
              <div className="vacation__mobile-item">
                <h5>Тип</h5>
                <p>Отпуск</p>

                <h5>Даты отпуска</h5>
                <div className="vacation__time mb-[16px] ">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>
                <h5 className="last">Количество дней</h5>
                <p className="last">20</p>
              </div>
              <div className="vacation__mobile-item">
                <h5>Тип</h5>
                <p>Отпуск</p>

                <h5>Даты отпуска</h5>
                <div className="vacation__time mb-[16px] ">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>
                <h5 className="last">Количество дней</h5>
                <p className="last">20</p>
              </div>
              <div className="vacation__mobile-item">
                <h5>Тип</h5>
                <p>Отпуск</p>

                <h5>Даты отпуска</h5>
                <div className="vacation__time mb-[16px] ">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>
                <h5 className="last">Количество дней</h5>
                <p className="last">20</p>
              </div>
              <div className="vacation__mobile-item">
                <h5>Тип</h5>
                <p>Отпуск</p>

                <h5>Даты отпуска</h5>
                <div className="vacation__time mb-[16px] ">
                  <span>03 марта 2023</span>
                  <img src="./yellow-arrow.svg" alt="arrow" />
                  <span>23 марта 2023</span>
                </div>
                <h5 className="last">Количество дней</h5>
                <p className="last">20</p>
              </div>
            </div>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
};
