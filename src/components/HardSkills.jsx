import classes from "./HardSkills.module.scss";
import SkillCard from "./SkillCard";
import { Icon } from "@iconify/react";

const iconColor = "#2c8c99";

function HardSkills() {
  return (
    <div className={classes.wrapper}>
      <SkillCard
        skillName='CSS3'
        icon={
          <Icon icon='akar-icons:css-fill' width='100%' color={iconColor} />
        }
      />
      <SkillCard
        skillName='SASS'
        icon={<Icon icon='cib:sass-alt' width='100%' color={iconColor} />}
      />
      <SkillCard
        skillName='CSS Modules'
        icon={<Icon icon='akar-icons:square' width='100%' color={iconColor} />}
      />
      <SkillCard
        skillName='Styled Components'
        icon={
          <Icon
            icon='file-icons:styledcomponents'
            width='100%'
            color={iconColor}
          />
        }
      />

      <SkillCard
        skillName='Javascript'
        icon={
          <Icon
            icon='akar-icons:javascript-fill'
            width='100%'
            color={iconColor}
          />
        }
      />
      <SkillCard
        skillName='ReactJS'
        icon={
          <Icon icon='akar-icons:react-fill' width='100%' color={iconColor} />
        }
      />
      <SkillCard
        skillName='React Router'
        icon={
          <Icon
            icon='simple-icons:reactrouter'
            width='100%'
            color={iconColor}
          />
        }
      />
      <SkillCard
        skillName='Redux'
        icon={
          <Icon icon='akar-icons:redux-fill' width='100%' color={iconColor} />
        }
      />
      <SkillCard
        skillName='HTML5'
        icon={
          <Icon icon='akar-icons:html-fill' width='100%' color={iconColor} />
        }
      />
      <SkillCard
        skillName='Firebase'
        icon={<Icon icon='bx:bxl-firebase' width='100%' color={iconColor} />}
      />
      <SkillCard
        skillName='Figma'
        icon={
          <Icon icon='akar-icons:figma-fill' width='100%' color={iconColor} />
        }
      />
      <SkillCard
        skillName='Adobe Suite'
        icon={<Icon icon='cib:adobe' width='100%' color={iconColor} />}
      />
    </div>
  );
}

export default HardSkills;
