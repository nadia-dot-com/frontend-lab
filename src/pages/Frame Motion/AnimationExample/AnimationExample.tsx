import { useState } from "react";
import { Vegetable } from "../Vegetable/Vegetable";
import { VEGETABLES } from "../vegetables";
import { VegetableFramerMotion } from "../VegetableFramerMotion/VegetableFramerMotion";
import { AnimatePresence } from "framer-motion";
import classes from "./AnimationExample.module.scss";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export function AnimationExample() {
  const [vegetables, setVegetables] = useState(VEGETABLES);
  const [vegetablesMotion, setVegetablesMotion] = useState(VEGETABLES);

  const addVegetableMotion = () =>
    setVegetablesMotion((prev) => {
      const nextVeg = VEGETABLES.find((V) => !prev.includes(V));

      if (!nextVeg) return prev;
      return [...prev, nextVeg];
    });

  const deleteVegetableMotion = (vegetable: string) =>
    setVegetablesMotion((prev) => prev.filter((v) => v != vegetable));

  const addVegetable = () =>
    setVegetables((prev) => {
      const nextVeg = VEGETABLES.find((V) => !prev.includes(V));

      if (!nextVeg) return prev;
      return [...prev, nextVeg];
    });

  const deleteVegetable = (vegetable: string) =>
    setVegetables((prev) => prev.filter((v) => v != vegetable));

  return (
    <Wrapper>
    <div className={classes.container}>
      <div>Manually</div>
      <div className={classes.vegetables}>
        {vegetables.map((v) => (
          <Vegetable key={v} onClick={() => deleteVegetable(v)} vegetable={v} />
        ))}
      </div>
      <button
        onClick={addVegetable}
        disabled={vegetables.length === VEGETABLES.length}
      >
        Add to List
      </button>
      <div>Framer Motion</div>
      <div className={classes.vegetables}>
        <AnimatePresence>
          {vegetablesMotion.map((v) => (
            <VegetableFramerMotion
              key={v}
              onClick={() => deleteVegetableMotion(v)}
              vegetable={v}
            />
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={addVegetableMotion}
        disabled={vegetablesMotion.length === VEGETABLES.length}
      >
        Add to List
      </button>
    </div>

    </Wrapper>
  );
}
