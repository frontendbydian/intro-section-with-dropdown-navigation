import { MenuItemProps } from "../types/types";

function MenuItem({ icon, name, link }: MenuItemProps) {
  return (
    <li>
      <a href={link} className="flex items-center justify-between gap-4">
        {icon ? <img src={icon} alt={`icon ${name}`} /> : null}
        <span className="text-sm font-medium text-custom-medium-gray">
          {name}
        </span>
      </a>
    </li>
  );
}

export default MenuItem;
