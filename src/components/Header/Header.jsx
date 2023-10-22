import { Link, NavLink } from "react-router-dom";
import Styles from "./_header.module.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMoon } from "react-icons/bi";
import { logo, user_pixs } from "../../assets/assets";
import { navMenuData } from "../../dummyData/navMenu";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export const NavItem = (props) => {
  const { path, routeName, icon } = props;

  return (
    <li className={Styles.header__navmenu_list}>
      <img src={icon} alt={`${routeName} icon`} />
      <NavLink to={path} className="hover:text-[#2e9fc9]">
        {routeName}
      </NavLink>
    </li>
  );
};

function Header() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const admin_name = "Oluwadamilare";

  const toggleMenu = (e) => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className={Styles.header}>
      <div className="flex flex-col justify-between">
        <div className={Styles.header__top}>
          <div className={Styles.header__top_logo}>
            <Link to="/">
              <img
                src={logo}
                alt="TownHall logo"
                className={Styles.header__logo}
              />
            </Link>
          </div>
          <div className={Styles.header__top_userInfo}>
            <button className={Styles.icon}>
              <BiMoon className="w-6 h-6 text-black" />
            </button>
            <button className={Styles.notification}>
              <IoMdNotificationsOutline className={Styles.icons} />
            </button>

            <div className="flex">
              <div className={Styles.header__top_user_pixs}>
                <img src={user_pixs} alt={admin_name} />
              </div>
              <div className={Styles.header__top_username}>
                <h3>{admin_name}</h3>
                <h6>User</h6>
              </div>
            </div>
          </div>
          {toggleBtn && (
            <button
              className={Styles.header__top_hamburger}
              onClick={toggleMenu}
            >
              <IconX size={32} />
            </button>
          )}
          {!toggleBtn && (
            <button
              className={Styles.header__top_hamburger}
              onClick={toggleMenu}
            >
              <IconMenu2 size={32} />
            </button>
          )}
        </div>
        <hr />

        {toggleBtn && (
          <div className={Styles.header_bottom}>
            <ul className={Styles.header_bottom__navmenu}>
              {navMenuData.map((nav, index) => {
                return (
                  <NavItem
                    path={nav.path}
                    routeName={nav.routeName}
                    icon={nav.icon}
                    key={index}
                  />
                );
              })}
            </ul>
            <div className={Styles.header__search_container}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search.."
                className={Styles.header__search_field}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
