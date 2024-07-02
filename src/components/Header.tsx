import { useState } from "react";
import FeaturesMenu from "./FeaturesMenu";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className="fixed top-0 left-0 flex items-stretch justify-between w-full p-4 py-6 md:px-12 md:py-8 md:gap-20 bg-custom-almost-white ">
      <img src="/images/logo.svg" alt="logo" />
      <div
        className={`absolute h-screen w-screen top-0 left-0 md:hidden bg-custom-almost-black opacity-70 ${
          isMenuVisible ? "static" : "hidden"
        }`}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      ></div>
      <nav
        className={`absolute  flex-1 w-8/12 min-h-screen px-8 py-24 bg-white top-0 right-0 md:w-fit md:bg-custom-almost-white md:min-h-0 md:p-0 md:static transition-all
            ${isMenuVisible ? "right-0" : "-right-[100%]"}
            `}
      >
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="absolute top-4 right-4 md:hidden"
        >
          <img src="/images/icon-close-menu.svg" alt="icon close" />
        </button>
        <ul>
          <FeaturesMenu />
        </ul>
      </nav>
      <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <img
          src="/images/icon-menu.svg"
          alt="menu icon"
          className="md:hidden"
        />
      </button>
    </header>
  );
};

export default Header;
