import React, { Children } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../Navbar";
type Props = {
  isMenuOpen : boolean
  handleToggleMenuMode: () => void
};

const MenuButton = ({ isMenuOpen, handleToggleMenuMode }: Props) => {

  return (
    <div className="max-sm:block hidden cursor-pointer " >
      {isMenuOpen ? (
        <div className = "relative " >
          <AiOutlineClose size={30} onClick={handleToggleMenuMode} />
          <div className = 'absolute -top-4 -left-28 flex flex-col gap-1 '>
             <Navbar/>
          </div>
        </div>
      ) : (
        <AiOutlineMenu size={30} onClick={handleToggleMenuMode} />
      )}
    </div>
  );
};

export default MenuButton;
