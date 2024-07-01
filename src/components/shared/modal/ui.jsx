export const ui = ({ modal, setModal, children }) => {
  return (
    <div
      className={`${
        modal ? "modal__wrapper modal__active" : "style.modal__wrapper"
      }`}
      onClick={() => {
        setModal(false);
      }}
    >
      {children}
    </div>
  );
};
