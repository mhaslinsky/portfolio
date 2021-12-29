import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { Icon } from "@iconify/react";
import logo from "../assets/logo4edit2.png";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <header className='header'>
        <NavLink to='/'>
          <img className={classes.logo} src={logo} alt='logo'></img>
        </NavLink>
      </header>
      <ul>
        <li>
          <NavLink
            to='/about'
            className={(navData) =>
              navData.isActive ? classes.active : classes.notActive
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/work'
            className={(navData) =>
              navData.isActive ? classes.active : classes.notActive
            }
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/skills'
            className={(navData) =>
              navData.isActive ? classes.active : classes.notActive
            }
          >
            Skills
          </NavLink>
        </li>
      </ul>
      <div className={classes.social}>
        <a
          href='https://github.com/mhaslinsky'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon className={classes.smIcon} icon='akar-icons:github-fill' />
        </a>
        <a
          href='https://www.linkedin.com/in/michael-haslinsky/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon className={classes.smIcon} icon='bi:linkedin' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
