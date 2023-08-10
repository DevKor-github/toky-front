import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";

interface ModalPortalProps {
  children: ReactNode;
  isShowing: boolean;
}

export default function ModalPortal({ children, isShowing }: ModalPortalProps) {
  const [portalElement, setProtalElement] = useState<Element | null>(null);
  useEffect(() => {
    setProtalElement(document.getElementById("portal"));
  }, [isShowing]);

  return portalElement
    ? ReactDOM.createPortal(
        <AnimatePresence mode="wait">{isShowing && children}</AnimatePresence>,
        portalElement
      )
    : null;
}
