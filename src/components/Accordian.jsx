import { useEffect, useRef, useState } from "react";
import classes from "./Accordian.module.scss";

function Accordian({ id, title, content }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    if (id === 0) {
      setExpanded(true);
      return;
    }
    collapseSection(contentRef.current);
  }, [id]);

  function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        element.style.height = 0 + "px";
      });
    });
    // mark the section as "currently collapsed"
    setExpanded(false);
  }

  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + "px";
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener("transitionend", function myFunc(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener("transitionend", myFunc);
      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });
    // mark the section as "currently not collapsed"
    setExpanded(true);
  }

  function growOrShrink() {
    if (expanded) {
      collapseSection(contentRef.current);
    } else {
      expandSection(contentRef.current);
    }
  }

  return (
    <div className={classes.accordian}>
      <div key={id} className={classes.item}>
        <div className={classes.title} onClick={() => growOrShrink()}>
          <h2>{title}</h2>
          <span>{expanded ? "-" : "+"}</span>
        </div>
        <div
          style={{
            overflow: "hidden",
            height: "auto",
            transition: "height 0.3s ease-out",
          }}
          ref={contentRef}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
