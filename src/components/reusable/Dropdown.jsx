import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const Dropdown = ({
  button,
  data,
  className,
  itemClassName,
  ClassBtn,
  anchor,
}) => {
  return (
    <Menu>
      <MenuButton className={ClassBtn ? ClassBtn : ""}>{button}</MenuButton>
      <MenuItems transition anchor={anchor} className={`${className}`}>
        {data.map((item, index) => (
          <MenuItem key={index}>
            {item.handleFunction ? (
              <button
                className="flex gap-2 items-center w-full"
                onClick={item.handleFunction}
              >
                {item.icon}{" "}
                <span className="text-white capitalize"> {item.title}</span>
              </button>
            ) : (
              <Link className={itemClassName} to={item.to}>
                <span>{item.icon}</span>
                <span> {item.title}</span>
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
