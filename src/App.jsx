import { Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import ContactButton from "./components/ContactButton";
import HeroText from "./components/HeroText";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Background from "./components/Background";
import Resume from "./components/Resume";
import { Fragment } from "react";

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <div className={classes.info}>
        <Background />
        <Routes>
          <Route
            path='/'
            element={
              <Fragment>
                <Resume />
                <HeroText>
                  <ContactButton />
                </HeroText>
              </Fragment>
            }
          />
          <Route path='about' element={<AboutMe />} />
          <Route path='work' element={<Work />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
