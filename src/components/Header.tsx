import { useState } from "react";
import FeaturesMenu from "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";
import MenuItem from "./MenuItem";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className="top-0 left-0 z-40 flex items-center justify-between w-full p-4 py-6 md:fixed md:px-12 md:py-8 md:gap-12 bg-custom-almost-white ">
      <img src="/images/logo.svg" alt="logo" />
      <div
        className={`absolute z-40 h-screen w-screen top-0 left-0 md:hidden bg-custom-almost-black opacity-70 ${
          isMenuVisible ? "static" : "hidden"
        }`}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      ></div>
      <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <img
          src="/images/icon-menu.svg"
          alt="menu icon"
          className="lg:hidden"
        />
      </button>
      <nav
        className={`absolute z-50 flex flex-col items-stretch md:items-center justify-between md:flex-row  flex-1 w-8/12 min-h-screen px-8 py-24 bg-white top-0  md:w-fit md:bg-custom-almost-white md:min-h-0 md:p-0 md:static transition-all duration-500
            ${isMenuVisible ? "right-0" : "-right-[100%] hidden lg:flex"}
            `}
      >
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="absolute top-4 right-4 md:hidden"
        >
          <img src="/images/icon-close-menu.svg" alt="icon close" />
        </button>
        <ul className="flex flex-col gap-4 md:gap-12 md:flex-row">
          <FeaturesMenu />
          <CompanyMenu />
          <MenuItem name="Careers" link="#" isLarge={true} />
          <MenuItem name="About" link="#" isLarge={true} />
        </ul>
        <div className="flex flex-col items-stretch gap-4 md:gap-12 md:flex-row justify-self-end">
          <button className="font-medium text-custom-medium-gray hover:text-custom-almost-black">
            Login
          </button>
          <button className="px-4 py-2 font-medium border hover:border-2 rounded-xl border-custom-almost-black text-custom-medium-gray hover:text-custom-almost-black">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
