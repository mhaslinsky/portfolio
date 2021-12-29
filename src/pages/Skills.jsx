import classes from "./Skills.module.scss";
import Accordian from "../components/Accordian";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";

const DUMMY_DATA = [
  {
    title: "Web Dev Skills",
    content: <HardSkills />,
  },
  {
    title: "Other Skills",
    content: <SoftSkills />,
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
