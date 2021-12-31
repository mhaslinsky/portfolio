import classes from "./Resume.module.scss";
import { Icon } from "@iconify/react";

function Resume() {
  return (
    <div className={classes.wrapper}>
      <Icon className={classes.icon} icon='gala:file-doc' />
      <a
        className={classes.link}
        href='https://drive.google.com/file/d/1OaG2GqzlW5ueHv5iTVEAEwgOLITwRWyY/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p>Resume PDF</p>
      </a>
    </div>
  );
}
export default Resume;
