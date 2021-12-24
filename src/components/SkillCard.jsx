import classes from "./SkillCard.module.scss";
function SkillCard({ skillName, icon }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.header}>{skillName}</div>
    </div>
  );
}
export default SkillCard;
