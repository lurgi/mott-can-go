import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <header className="h-16 p-4 flex items-center absolute z-10 bg-slate-50 w-full">
      <div className="block sm:hidden mr-1 rounded-full hover:bg-slate-100 p-2 transition-colors hover:cursor-pointer">
        <AiOutlineMenu className="w-5 h-5 text-slate-600 hover:text-slate-900 transition-colors" />
      </div>
      <div className="ml-2 font-roboto font-semibold text-xl">Mott Can Go!</div>
    </header>
  );
};

export default Header;
