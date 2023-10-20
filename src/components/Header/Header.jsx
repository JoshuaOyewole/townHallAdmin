import { Link, NavLink } from "react-router-dom";
import { logo, user_pixs, homeIcon, organizations, memberIcon, electionIcon } from "../../assets/assets";
import Styles from "./_header.module.scss";
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiMoon} from "react-icons/bi"



function Header() {
  const admin_name = "Oluwadamilare";

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
              <BiMoon className='w-6 h-6 text-black' />
            </button>
            <button className={Styles.notification}>
              <IoMdNotificationsOutline  className={Styles.icons}/>
            </button>
            <div className={Styles.header__top_user}>
              <div className={Styles.header__top_user_pixs}>
                <img src={user_pixs} alt={admin_name} />
              </div>
              <div className={Styles.header__top_username}>
                <h3>{admin_name}</h3>
                <h6>User</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={Styles.header_bottom}>
          <ul className={Styles.header_bottom__navmenu}>
            <li className={Styles.header__navmenu_list}>
              <img src={homeIcon} alt="Home Icon" />
              <NavLink
                to="/"
                className="hover:font-medium"
              >
                Home
              </NavLink>
            </li>
            <li className={Styles.header__navmenu_list}>
              <img src={organizations} alt="Home Icon" />
              <NavLink
                to="/organizations"
                className="hover:font-medium"
              >
                Organizations
              </NavLink>
            </li>
            <li className={Styles.header__navmenu_list}>
            <img src={memberIcon} alt="Home Icon" />
              <NavLink
                to="/members"
                className="hover:font-medium"
              >
                Members
              </NavLink>
            </li>
            <li className={Styles.header__navmenu_list}>
            <img src={memberIcon} alt="Home Icon" />
              <NavLink
                to="/post_management"
                className="hover:font-medium"
              >
                Post Management
              </NavLink>
            </li>
            <li className={Styles.header__navmenu_list}>
            <img src={electionIcon} alt="Home Icon" />
              <NavLink
                to="/election"
                className="hover:font-medium"
              >
                Election
              </NavLink>
            </li>
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
      </div>
    </div>
  );
}

export default Header;
