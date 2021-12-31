import classes from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={classes.heroText}>
      <h1 className={classes.cascadingText__letter}>About Me</h1>
      <p className={classes.cascadingText__letter}>
        As a child, I always had an affinity for web design and development. My
        earliest time spent in this space was at the turn of the Millenium,
        creating websites on Expages and Geocities. I even went so far as to
        start writing my own custom HTML instead of just copying and pasting
        from tutorials. Little did I know that I was already learning the most
        essential skills a modern dev needs to know.
      </p>
      <span></span>
      <p className={classes.cascadingText__letter}>
        For college, I went to Drexel University and pursued a degree in
        Computer Engineering. Computer Engineering can be described as a fusion
        of Electrical Engineering and Computer Science. There I got an excellent
        basis of knowledge in both the math and science behind what makes
        computers tick and how to program those machines to do what I need them
        to do.
      </p>
      <span></span>
      <p className={classes.cascadingText__letter}>
        This then leads to where I am now. I have been in the Information
        Technology space for the last 7 years. Most of my responsibilities have
        been on the support side of things. This includes 24/7 helpdesk support,
        project management, customer service, and the configuration,
        initialization, and administration of various multi-server spanning
        software systems. Worth mentioning that I am an MCSE (Microsoft
        Certified Solutions Expert) and can handle small to medium-sized
        businesses' general system administration duties. Doing this for so long
        has kept me in touch with the development side of things, and after a
        few black swan events, I have realized that it is where I want to
        return.
      </p>
    </div>
  );
}

export default AboutMe;
