import Link from "next/link";
import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/authSlice";
import { toast } from "react-toastify";

const SearchBar = ({ setActiveSearch }) => {
  return (
    <div className=" w-full flex items-center justify-between gap-2 text-white">
      <MdSearch className="w-5 h-auto" />
      <input
        type="text"
        placeholder="Search"
        className="border-none outline-none bg-transparent w-[200px]"
      />
      <MdClose
        className="w-5 h-auto cursor-pointer"
        onClick={() => setActiveSearch(false)}
      />
    </div>
  );
};

const MenuContent = ({ setActiveSearch }) => {
  const { user, status, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.info("You are logged out!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Logo />
      <div
        className="hidden md:flex items-center justify-center gap-2 text-white mx-auto"
        onClick={() => setActiveSearch(true)}
      >
        <MdSearch className="w-5 h-auto" />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none bg-transparent"
        />
      </div>
      {user ? (
        <div className="flex items-center space-x-3 justify-center">
          <Link href={"/myprofile"}>
            <CgProfile className="w-6 h-6 cursor-pointer" />
          </Link>
          <span>|</span>
          <button onClick={handleLogout}>
            <FiLogOut className="w-5 h-auto cursor-pointer text-red-600" />
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3 justify-center">
          <Link href={"/account"}>Sign in</Link>
          <span>|</span>
          <Link href={"/account"}>Register</Link>
        </div>
      )}
    </>
  );
};

const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const { user, status, message } = useSelector((state) => state.auth);

  return (
    <header
      className="max-w-4xl w-full bg-gray-800 rounded-full flex items-center justify-between py-3 px-8 mx-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(100, 100, 100, 0.1) 100%)",
      }}
    >
      {activeSearch ? (
        <SearchBar setActiveSearch={setActiveSearch} />
      ) : (
        <MenuContent setActiveSearch={setActiveSearch} />
      )}
    </header>
  );
};
export default Header;
