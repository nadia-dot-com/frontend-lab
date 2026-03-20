import classes from "./VegetableFramerMotion.module.css";
import { motion } from "motion/react";

export function VegetableFramerMotion({
  vegetable,
  onClick,
}: {
  vegetable: string;
  onClick: () => void;
}) {

  console.log(vegetable)
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.vegetable}
      onClick={onClick}
    >
      {vegetable}
    </motion.div>
  );
}
