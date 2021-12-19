import classes from "./Background.module.scss";

function Background() {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.bgBubbles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Background;
