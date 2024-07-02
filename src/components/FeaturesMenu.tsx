import { useState } from "react";
import { MenuItemProps } from "../types/types";
import MenuItem from "./MenuItem";

const featuresMenuList: MenuItemProps[] = [
  {
    icon: "/images/icon-todo.svg",
    name: "Todo List",
    link: "#",
  },
  {
    icon: "/images/icon-calendar.svg",
    name: "Calendar",
    link: "#",
  },
  {
    icon: "/images/icon-reminders.svg",
    name: "Reminders",
    link: "#",
  },
  {
    icon: "/images/icon-planning.svg",
    name: "Planning",
    link: "#",
  },
];

function FeaturesMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <li
        className="relative z-50 w-fit"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <button
          className="flex items-center justify-between gap-2 font-semibold text-custom-medium-gray hover:text-custom-almost-black"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Features</span>
          {isExpanded ? (
            <img src="/images/icon-arrow-up.svg" alt="arrow up icon" />
          ) : (
            <img src="/images/icon-arrow-down.svg" alt="arrow down icon" />
          )}
        </button>
        <ul
          className={`md:absolute right-0 px-6 md:mt-4 flex z-50 flex-col items-start justify-between gap-4 bg-white md:shadow-[0_0_16px_0_rgb(0_0_0/0.1)] transition-all rounded-xl w-max overflow-hidden ${
            isExpanded ? "max-h-96 py-6" : "max-h-0 py-0"
          }`}
        >
          {featuresMenuList.map((item: MenuItemProps, index: number) => {
            return <MenuItem {...item} key={item.name + index} />;
          })}
        </ul>
      </li>
    </>
  );
}

export default FeaturesMenu;
