import classes from "./Skills.module.scss";
import Accordian from "../components/Accordian";

const DUMMY_DATA = [
  {
    title: "Hard Skills",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Soft Skills",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Skills() {
  return (
    <div className={classes.wrapper}>
      <h1>Skills</h1>
      {DUMMY_DATA.map((item, i) => (
        <Accordian
          key={i}
          id={i}
          title={item.title}
          content={item.content}
        ></Accordian>
      ))}
    </div>
  );
}

export default Skills;
