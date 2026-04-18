import classes from "./CSSAnimation.module.css";

const vapourValues = [
  1, 3, 14, 5, 10, 8, 9, 4, 20, 6, 17, 11, 12, 15, 16, 7, 18, 13, 2, 19,
];

export function CSSAnimation() {
  return (
    <div className={classes.cupContainer}>
      <div className={classes.plate}></div>
      <div className={classes.cup}>
        <div className={classes.top}>
          <div className={classes.vapour}>
            {vapourValues.map((i) => (
              <span key={i} style={{ "--i": i } as React.CSSProperties}></span>
            ))}
          </div>
          <div className={classes.circle}>
            <div className={classes.tea}></div>
          </div>
        </div>
        <div className={classes.handle}></div>
      </div>
    </div>
  );
}
