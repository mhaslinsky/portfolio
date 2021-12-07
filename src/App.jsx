import { useEffect, useState } from "react";
import classes from "./App.module.css";
import ContactButton from "./components/ContactButton";

let variableText = [
  "an...adaptable",
  "a...passionate",
  "an...inquisitive",
  "a...determined",
  "placeholder",
];

function App() {
  const [curIndex, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // typing effect
  useEffect(() => {
    //if at end, go back to start
    if (curIndex === variableText.length - 1) {
      setIndex(0);
      return;
    }
    if (
      //if done typing and not at the last word in the array, set reverse true
      subIndex === variableText[curIndex].length + 1 &&
      curIndex !== variableText.length - 1 &&
      !reverse
    ) {
      const timeout = setTimeout(() => {
        setReverse(true);
        return () => clearTimeout(timeout);
      }, 1000);
    }
    //if at beginning of word and reverse true, flip reverse and increment array
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    //actual typing logic if previous checks fail
    //if reverse true, it shortens substring one char at time
    //if false, the opposite
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [subIndex, curIndex, reverse]);

  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <header className='header'>
          <p>Header goes here</p>
        </header>
      </nav>
      <div className={classes.heroText}>
        <h1>I am Michael Haslinsky,</h1>
        <h1>
          {`${variableText[curIndex].substring(0, subIndex)}${
            blink ? "|" : ""
          }`}
          &zwnj;
        </h1>
        <h1>web developer</h1>
        <h4>
          Aspiring professional web developer in the Northeast United States. My
          studies focus on building responsive and eye-catching front-end
          designs with eventual expansion to back-end services.
        </h4>
        <ContactButton></ContactButton>
      </div>
    </div>
  );
}

export default App;
