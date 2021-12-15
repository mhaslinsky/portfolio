import { Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import ContactButton from "./components/ContactButton";
import HeroText from "./components/HeroText";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className={classes.app}>
      <Navbar />

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
