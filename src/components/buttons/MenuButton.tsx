import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Navbar from "../Navbar";

type Props = {
  isMenuOpen: boolean;
  handleToggleMenuMode: () => void;
};

const MenuButton = ({ isMenuOpen, handleToggleMenuMode }: Props) => {
  return (
    <div className="hidden cursor-pointer max-sm:block ">
      {isMenuOpen ? (
        <div className="relative ">
          <AiOutlineClose size={30} onClick={handleToggleMenuMode} />
          <div className="absolute -left-6 top-10 flex flex-col gap-1 ">
            <Navbar />
          </div>
        </div>
      ) : (
        <AiOutlineMenu size={30} onClick={handleToggleMenuMode} />
      )}
    </div>
  );
};

export default MenuButton;
