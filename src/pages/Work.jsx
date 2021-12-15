import wildfirepic from "../assets/wildfirepic.png";
import classes from "./Work.module.scss";
import menupic from "../assets/menu.png";
import licensepic from "../assets/licensetracker.png";

function Work() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Previous Work</h1>
      <div className={classes.cascadingText}>
        <div className={classes.cascadingText__letter}>
          <a href='https://wildfireatheart.netlify.app/'>
            <img
              src={wildfirepic}
              alt='wildfire tracker'
              className={classes.img}
            ></img>
          </a>
          <div className={classes.cardText}>
            <h2>Wildfire Tracker</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
          </div>
        </div>
        <div className={classes.cascadingText__letter}>
          <a href='https://hookrestaurantpage.netlify.app/'>
            <img
              src={menupic}
              alt='wildfire tracker'
              className={classes.img}
            ></img>
          </a>
          <div className={classes.cardText}>
            <h2>Restaurant Website</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
          </div>
        </div>
        <div className={classes.cascadingText__letter}>
          <a href='https://mhaslinsky.github.io/narrate-license/'>
            <img
              src={licensepic}
              alt='wildfire tracker'
              className={classes.img}
            ></img>
          </a>
          <div className={classes.cardText}>
            <h2>License Tracker</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
