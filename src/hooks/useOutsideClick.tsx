import React, { useRef, useEffect } from "react";

type Props = {
  handleClose: () => void;
  children: React.ReactNode;
};

const UseOutsideClick = ({ handleClose, children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};

export default UseOutsideClick;
