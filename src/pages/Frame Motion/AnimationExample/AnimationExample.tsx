import { useState } from "react";
import { VEGETABLES } from "../vegetables";
import { VegetableFramerMotion } from "../VegetableFramerMotion/VegetableFramerMotion";
import { AnimatePresence } from "framer-motion";
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
      <div className="flex-center-col m-8">
        <div>Framer Motion</div>
        <div className="flex flex-wrap justify-center gap-main">
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
