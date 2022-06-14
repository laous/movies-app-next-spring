import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/authSlice";
import { toast } from "react-toastify";
import axios from "axios";

const SearchBar = ({ setActiveSearch }) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const searchEndpoint = (query) =>
    `${process.env.NEXT_PUBLIC_API_LINK}/tmdb/search/${query}`;

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const handleChange = useCallback(async (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      await axios
        .get(searchEndpoint(query), config)
        .then((res) => res.data)
        .then((res) => {
          setResults(res);
          console.log("Results: ", results);
        })
        .catch((err) => console.error(err));
    } else {
      setResults([]);
    }
  }, []);

  const handleFocus = () => {
    setActive(true);
    window.addEventListener("click", handleClick);
  };

  const handleClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      setQuery("");
      setResults([]);
      window.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <div
      className="relative w-full flex items-center justify-between gap-2 text-white"
      ref={searchRef}
    >
      <MdSearch className="w-5 h-auto" />
      <input
        type="text"
        placeholder="Enter a movie title"
        className="border-none outline-none bg-transparent w-[200px]"
        onChange={handleChange}
        onFocus={handleFocus}
        value={query}
      />
      <MdClose
        className="w-5 h-auto cursor-pointer"
        onClick={() => setActiveSearch(false)}
      />
      {active && results.length > 0 && (
        <ul
          className="list-none overflow-hidden mt-2 p-2 absolute top-full inset-x-0 min-h-100px
          bg-white z-50"
        >
          {results.map(({ id, title }, index) => (
            <Link href={"/movie/" + id}>
              <li
                className="text-black text-normal mt-2 leading-4 last:mb-4"
                key={index}
              >
                {title}
              </li>
            </Link>
          ))}
        </ul>
      )}
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
