import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export const ModalWrapper = ({ children }) => {
  const [containerElement, setContainerElement] = useState(null);

  useEffect(() => {
    const element = document.getElementById("modal-container");
    if (element) {
      setContainerElement(element);
    }
  }, []);

  if (containerElement) {
    return createPortal(children, containerElement);
  }
};
