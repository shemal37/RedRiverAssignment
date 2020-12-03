import React, { useState } from "react";
import menuImage from ".././Assets/menu.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  return sidebar ? (
    <img
      src={menuImage}
      width="30px"
      alt="menu"
      className="menu-image"
      onClick={() => setSidebar(!sidebar)}
    />
  ) : (
    <div class="sidenav" onClick={() => setSidebar(!sidebar)}>
      <a href=".f">About</a>
      {/* <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a> */}
    </div>
  );
};

export default Navbar;
