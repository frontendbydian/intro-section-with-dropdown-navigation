import { MenuItemProps } from "../types/types";

function MenuItem({ icon, name, link, isLarge }: MenuItemProps) {
  return (
    <li className="hover:bg-custom-almost-white">
      <a href={link} className="flex items-center justify-between gap-4">
        {icon ? <img src={icon} alt={`icon ${name}`} /> : null}
        <span
          className={` font-medium text-custom-medium-gray hover:text-custom-almost-black ${
            isLarge ? "text-base" : "text-sm"
          }`}
        >
          {name}
        </span>
      </a>
    </li>
  );
}

export default MenuItem;
