import React from "react";
import classes from "./SoftSkills.module.scss";

function SoftSkills() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.skillHeader}>Information Technology</header>
      <p className={classes.text}>
        I have seven years of experience in general IT support and in-depth
        systems administration for bespoke software systems. I have also
        completed my Microsoft Certification to become a Solutions Expert. This
        cert is the equivalent of gaining an Expert certification in a specific
        role as of 2022.
        <p>
          Due to that experience, I can understand the abstraction behind the
          scenes of modern cloud software implementations. This has also given
          me many years of experience dealing with customer support and clients
          directly. Many years spent in the trenches have given me invaluable
          troubleshooting skills, and these have served me many times on the
          path to learning web design and development. A few of the technologies
          I have handled are:
          <ul className={classes.list}>
            <li>&#8226; VMWare and Citrix virtualization</li>
            <li>&#8226; Active Directory and domain administration</li>
            <li>&#8226; DHCP, DNS, and various network admin tools</li>
            <li>&#8226; MSSQL and MySQL DBs</li>
          </ul>
        </p>
      </p>
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
        <ul className={classes.list}>
          <li>&#8226; Scheduling of meetings.</li>
          <li>&#8226; Coordinating resources.</li>
          <li>&#8226; Following up on task completion.</li>
          <li>
            &#8226; Documenting project status for use by project members.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default SoftSkills;
