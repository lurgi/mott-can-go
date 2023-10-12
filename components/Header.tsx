import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <header className="h-16 p-4 flex items-center">
      <div className="rounded-full hover:bg-slate-100 p-2 transition-colors hover:cursor-pointer">
        <AiOutlineMenu className="w-5 h-5 text-slate-600 hover:text-slate-900 transition-colors" />
      </div>
      <div className="font-roboto font-semibold">Mott Can Go!</div>
    </header>
  );
};

export default Header;
