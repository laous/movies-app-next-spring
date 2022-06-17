import { useState } from "react";
import MenuContent from "./MenuContent";
import SearchBar from "./SearchBar";

const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);

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
