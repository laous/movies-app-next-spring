import Link from "next/link";
import { MdSearch } from "react-icons/md";
import Logo from "./Logo";

const Header = () => {
  return (
    <header
      className="max-w-4xl w-full bg-gray-800 rounded-full flex items-center justify-between py-3 px-8 mx-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(100, 100, 100, 0.1) 100%);",
      }}
    >
      <Logo />
      <div className="hidden md:flex items-center justify-center gap-2 text-white mx-auto">
        <MdSearch className="w-5 h-auto" />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <Link href={"/"}>Sign in</Link>
        <span>|</span>
        <Link href={"/"}>Sign up</Link>
      </div>
    </header>
  );
};
export default Header;
