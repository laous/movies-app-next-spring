import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import SearchItem from "./SearchItem";

const SearchBar = ({ setActiveSearch }) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true);
  const [initialRender, setInitialRender] = useState(true);
  const [results, setResults] = useState([]);
  const searchEndpoint = (query) =>
    `${process.env.NEXT_PUBLIC_API_LINK}/tmdb/search/${query}`;

  const handleChange = useCallback(async (event) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      await axios
        .get(searchEndpoint(query), config)
        .then((res) => res.data)
        .then((res) => {
          setResults(res);
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
      if(initialRender) {
        setInitialRender(false);
        handleFocus();
      }else{
        setActive(false);
        window.removeEventListener("click", handleClick);
      }
      setQuery("");
      setResults([]);
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
        autoFocus
        onFocus={handleFocus}
        value={query}
      />
      <MdClose
        className="w-5 h-auto cursor-pointer"
        onClick={() => setActiveSearch(false)}
      />
      {active && results.length > 0 && (
        <ul className="list-none  mt-2 p-2 absolute top-full inset-x-0 min-h-100px z-50 bg-zinc-800">
          {results.slice(0, 6).map((movie, index) => (
            <li
              className="w-full"
              onClick={() => {
                setActive(false);
                setActiveSearch(false);
              }}
              key={index}
            >
              <SearchItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
