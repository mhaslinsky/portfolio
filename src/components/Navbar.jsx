import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <header className='header'>
        <NavLink to='/'>
          <img
            src='https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png'
            alt='logo'
          ></img>
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
        <a href='https://github.com/mhaslinsky'>
          <Icon
            style={{
              fontSize: "3rem",
              color: "rgb(248, 248, 248)",
              padding: ".2rem",
            }}
            icon='akar-icons:github-fill'
          />
        </a>
        <a href='https://www.linkedin.com/in/michael-haslinsky/'>
          <Icon
            style={{
              fontSize: "3rem",
              color: "rgb(248, 248, 248)",
              padding: ".2rem",
            }}
            icon='bi:linkedin'
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
