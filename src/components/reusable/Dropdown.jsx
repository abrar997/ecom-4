import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const Dropdown = ({
  button,
  data,
  className,
  itemClassName,
  isFunction,
  ClassBtn,
}) => {
  return (
    <Menu>
      <MenuButton className={ClassBtn ? ClassBtn : ""}>{button}</MenuButton>
      <MenuItems transition anchor="top start" className={`${className}`}>
        {data.map((link, index) => (
          <MenuItem key={index}>
            {isFunction ? (
              <button
                className="flex gap-4 items-center w-full"
                onClick={link.handleFunction}
              >
                {link.icon}
              </button>
            ) : (
              <Link className={itemClassName} to={link.to}>
                {link.title}
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
