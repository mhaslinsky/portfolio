import { Routes, Route, NavLink } from "react-router-dom";
import classes from "./App.module.scss";
import ContactButton from "./components/ContactButton";
import HeroText from "./components/HeroText";
import { Icon } from "@iconify/react";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  return (
    <div className={classes.app}>
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
          <Icon
            style={{
              fontSize: "2rem",
              color: "rgb(248, 248, 248)",
              padding: ".2rem",
            }}
            icon='akar-icons:github-fill'
          />
          <Icon
            style={{
              fontSize: "2rem",
              color: "rgb(248, 248, 248)",
              padding: ".2rem",
            }}
            icon='bi:linkedin'
          />
        </div>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <HeroText>
              <ContactButton />
            </HeroText>
          }
        />
        <Route path='about' element={<AboutMe />} />
        <Route path='work' element={<Work />} />
        <Route path='skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
