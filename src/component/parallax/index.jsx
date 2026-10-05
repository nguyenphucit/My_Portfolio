import React, { useRef } from "react";
import style from "./style.module.scss";
import { useScroll, motion, useTransform, MotionConfig } from "framer-motion";
export const Parallax = ({ condition, enabled, onToggle }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [-180, 360]);
  const starsY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const starsX = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const planetsY = useTransform(scrollYProgress, [0, 1], [-220, 220]);
  const mountainsY = useTransform(scrollYProgress, [0, 1], [95, -95]);
  const projects = condition === "Wedid";
  return (
    <MotionConfig reducedMotion="never">
      <div
        className={`${style.wrapper} ${projects ? style.Wedid : style.Wedo}`}
        ref={ref}
      >
        <motion.div
          className={style.stars}
          style={{ y: enabled ? starsY : 0, x: enabled ? starsX : 0 }}
        />
        <motion.div
          className={style.planets}
          style={{ y: enabled ? planetsY : 0 }}
        />
        <motion.div className={style.title} style={{ y: enabled ? textY : 0 }}>
          <p>{projects ? "FROM CURIOSITY TO CREATION" : "ALWAYS EXPLORING"}</p>
          <h2>{projects ? "What I’ve built." : "What I work with."}</h2>
        </motion.div>
        <motion.div
          className={style.mountains}
          style={{ y: enabled ? mountainsY : 0 }}
        />
        <button
          type="button"
          className={style.motionToggle}
          onClick={onToggle}
          aria-pressed={enabled}
        >
          {enabled ? "Pause parallax" : "Enable parallax"}
        </button>
      </div>
    </MotionConfig>
  );
};
