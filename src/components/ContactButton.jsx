import classes from "./ContactButton.module.scss";
import { Icon } from "@iconify/react";
import { useRef } from "react";

function ContactButton() {
  const textRef = useRef();

  function clipboardCopy() {
    navigator.clipboard.writeText("mhaslinsky@gmail.com");

    textRef.current.classList.remove(classes.fadeAnim);
    void textRef.current.offsetWidth;
    textRef.current.classList.add(classes.fadeAnim);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.floatingText} ref={textRef}>
        Email Copied to Clipboard!
      </div>
      <div className={classes.container}>
        <div onClick={clipboardCopy} className={classes.icon}>
          <Icon icon='carbon:email' />
        </div>
        <button onClick={clipboardCopy} className={classes.button}>
          Contact Me!
        </button>
      </div>
    </div>
  );
}

export default ContactButton;
