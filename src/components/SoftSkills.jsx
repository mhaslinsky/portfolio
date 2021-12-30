import React from "react";
import classes from "./SoftSkills.module.scss";

function SoftSkills() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.skillHeader}>Project Management</header>
      <p className={classes.text}>
        I have experience leading multiple projects. Using{" "}
        <a
          className={classes.link}
          href='https://www.quickbase.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Quickbase
        </a>{" "}
        as my PM tool, I have led projects with upwards of 2 dozen members and
        timescales of over one year. Examples of responsibilities included:
      </p>
      <ul className={classes.list}>
        <li>&#8226; Scheduling of meetings.</li>
        <li>&#8226; Coordinating resources.</li>
        <li>&#8226; Following up on task completion.</li>
        <li>&#8226; Documenting project status for use by project members.</li>
      </ul>
    </div>
  );
}

export default SoftSkills;
