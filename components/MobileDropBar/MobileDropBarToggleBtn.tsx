import { Dispatch, SetStateAction } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface IMobileDropBarToggleBtn {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDropBarToggleBtn = ({
  isOpen,
  setIsOpen,
}: IMobileDropBarToggleBtn) => {
  return (
    <div
      onClick={() => setIsOpen((bol) => !bol)}
      className={
        "h-8 w-1/5 bg-white z-50 transition-all duration-300 flex justify-center items-center rounded-t-lg hover:text-cyan-600 text-slate-600 hover:cursor-pointer"
      }
    >
      <div className="scale-150 py-2">
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
    </div>
  );
};

export default MobileDropBarToggleBtn;
