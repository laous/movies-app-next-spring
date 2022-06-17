import Link from "next/link";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../reducers/authSlice";
import { resetUserData } from "../../reducers/userDataSlice";
import Logo from "./Logo";

const MenuContent = ({ setActiveSearch }) => {
  const { user, status, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(resetUserData());
    toast.info("You are logged out!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.reload("/account");
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

export default MenuContent;
