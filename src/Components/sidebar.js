import React from "react";
import { slide as Menu } from "react-burger-menu";

const sidebar = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        TBD
      </a>

      <a className="menu-item" href="/">
        TBD
      </a>

      <a className="menu-item" href="/">
        TBD
      </a>
    </Menu>
  );
};

export default sidebar;
