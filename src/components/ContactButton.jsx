import classes from "./ContactButton.module.scss";
import { Icon } from "@iconify/react";

function ContactButton() {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <Icon icon='carbon:email' />
      </div>
      <button class={classes.button}>CONTACT ME!</button>
    </div>
  );
}

export default ContactButton;
