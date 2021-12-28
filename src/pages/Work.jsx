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
          <a
            href='https://wildfireatheart.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={classes.tint}>
              <img
                src={wildfirepic}
                alt='wildfire tracker'
                className={classes.img}
              ></img>
            </div>
          </a>
          <div className={classes.cardText}>
            <h2>Wildfire Tracker</h2>
            <h4>
              This app pulls live data from NASA's Natural Event tracker API.
              The map is generated using Mapbox gl and wrapped and managed using
              the React-map-gl library. The events from the API are filtered and
              represented on the map using a marker taken from the Iconify
              framework. The app utilizes environment variables for confidential
              data and is styled only using CSS Modules.
            </h4>
            <div className={classes.linkSection}>
              <a
                className={classes.link}
                href='https://wildfireatheart.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Take a Look
              </a>
              <a
                className={classes.link}
                href='https://github.com/mhaslinsky/forestfiretacker'
                target='_blank'
                rel='noopener noreferrer'
              >
                See the Code
              </a>
            </div>
          </div>
        </div>
        <div className={classes.cascadingText__letter}>
          <a
            href='https://hookrestaurantpage.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={classes.tint}>
              <img
                src={menupic}
                alt='wildfire tracker'
                className={classes.img}
              ></img>
            </div>
          </a>

          <div className={classes.cardText}>
            <h2>Restaurant Website</h2>
            <h4>
              This is a mockup website of my friends' pizzeria. The cart manages
              its state globally using React Context, with actions to modify
              it's state provided via useReducer. The menu contents are fetched
              from Firebase and the finalized orders are posted back to the same
              database. Various elements are stylized using the Styled
              Components library others with utilizing CSS Modules.
            </h4>
            <div className={classes.linkSection}>
              <a
                className={classes.link}
                href='https://hookrestaurantpage.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Take a Look
              </a>
              <a
                className={classes.link}
                href='https://github.com/mhaslinsky/menu-site'
                target='_blank'
                rel='noopener noreferrer'
              >
                See the Code
              </a>
            </div>
          </div>
        </div>
        <div className={classes.cascadingText__letter}>
          <a
            href='https://narrate-licensing.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={classes.tint}>
              <img
                src={licensepic}
                alt='wildfire tracker'
                className={classes.img}
              ></img>
            </div>
          </a>
          <div className={classes.cardText}>
            <h2>License Tracker</h2>
            <h4>
              This tool was created for my employer before learning ReactJS.
              Using Javascript, HTML, and CSS this automates a licensing process
              for an application we sell and support. Utilizing the Papa Parse
              library two seperate CSVs are parsed. The second CSV is filtered
              based on what is left after the first is filtered. The output is
              then displayed on the page in a sortable table.
            </h4>
            <div className={classes.linkSection}>
              <a
                className={classes.link}
                href='https://narrate-licensing.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Take a Look
              </a>
              <a
                className={classes.link}
                href='https://drive.google.com/file/d/1AMD3GCm3hMJzY-ckXz2dZ5egLS3cq-Ci/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Demo CSVs
              </a>
              <a
                className={classes.link}
                href='https://github.com/mhaslinsky/narrate-license2'
                target='_blank'
                rel='noopener noreferrer'
              >
                See the Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
