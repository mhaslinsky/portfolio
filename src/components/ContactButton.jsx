import classes from "./ContactButton.module.scss";
import { Icon } from "@iconify/react";

function ContactButton() {
  function clipboardCopy() {
    navigator.clipboard.writeText("mhaslinsky@gmail.com");
  }

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <Icon icon='carbon:email' />
      </div>
      <button onClick={clipboardCopy} class={classes.button}>
        CONTACT ME!
      </button>
    </div>
  );
}

export default ContactButton;
